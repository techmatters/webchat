import * as FlexWebChat from '@twilio/flex-webchat-ui';
import { Channel } from 'twilio-chat/lib/channel';
import { getUserIp } from './ip-tracker';
import { getCurrentConfig } from '../configurations';
import { updateZIndex } from './dom-utils';
import { PreEngagementConfig } from '../configurations/types';

updateZIndex();

const currentConfig = getCurrentConfig();
const defaultLanguage = currentConfig.defaultLanguage;
const initialLanguage = defaultLanguage;
const translations = currentConfig.translations;

const outOfHours: PreEngagementConfig = {
  description: "We're closed at the moment. Operating hours: 8am-6pm",
  fields:
    [
      {
        label: 'Hidden Field',
        type: 'InputField',
        attributes: {
          name: '',
          required: true,
          readOnly: true,
        },
      },
    ],
  submitLabel: "Let's chat!"
};

const getChangeLanguageWebChat = (manager: FlexWebChat.Manager) => (language: string) => {
  const twilioStrings = { ...manager.strings }; // save the originals
  const setNewStrings = (newStrings: FlexWebChat.Strings) => (manager.strings = { ...manager.strings, ...newStrings });
  const translationErrorMsg = 'Could not translate, using default';
  
  try {
    if (language !== defaultLanguage && translations[language]) {
      setNewStrings({ ...twilioStrings, ...translations[defaultLanguage], ...translations[language] });
    } else {
      setNewStrings({ ...twilioStrings, ...translations[defaultLanguage] });
    }
  } catch (err) {
    window.alert(translationErrorMsg);
    console.error(translationErrorMsg, err);
    getChangeLanguageWebChat(manager)(defaultLanguage);
  }
}

type ChannelAndManagerAndIpFn = (channel: Channel, manager: FlexWebChat.Manager, ip?: string) => void;

const doWithChannel = (callback: ChannelAndManagerAndIpFn) => (manager: FlexWebChat.Manager, ip?: string) => {
  const { channelSid } = manager.store.getState().flex.session;
    manager
      .chatClient.getChannelBySid(channelSid)
      .then(channel => {
        callback(channel, manager, ip);
      });
}

const unlockInput = (manager: FlexWebChat.Manager) => {
  const { user } = manager.chatClient;
  const { lockInput, ...attributes } = user.attributes as any;
  user.updateAttributes(attributes);
}

const setListenerToUnlockInput = async (channel: Channel, manager: FlexWebChat.Manager) => {
  if (!channel) return;

  const cb = () => {
    // Re-enable input
    unlockInput(manager)
  }

  // User is not alone in the channel (possible cause to enter this case is page reload)
  const membersCount = await channel.getMembersCount();
  if (membersCount > 1) {
    cb();
    return;
  }
  
  // Adds an event listener that will run only once
  channel.once("memberJoined", () => {
    cb();
  });
}

const setChannelOnCreateWebChat = doWithChannel(setListenerToUnlockInput);

const setChannelAfterStartEngagement = doWithChannel((channel: Channel, manager: FlexWebChat.Manager, ip: string = '') => {
  setListenerToUnlockInput(channel, manager);

  // Generate task by sending empty message (hidden from the UI above)
  const message = `${translations[initialLanguage].AutoFirstMessage} ${ip}`;
  channel.sendMessage(message); 
})

export const initWebchat = async () => {
  let ip: string | undefined;

  if (currentConfig.captureIp) {
    ip = await getUserIp();
  }

  const appConfig = {
    accountSid: currentConfig.accountSid,
    flexFlowSid: currentConfig.flexFlowSid,
    startEngagementOnInit: false,
    preEngagementConfig: currentConfig.preEngagementConfig,
    context: {
      ip,
    }
  };

  const webchat = await FlexWebChat.createWebChat(appConfig);
  const { manager } = webchat;
  let tick = 0;
  setInterval(() => {
    const preEngagementConfig = tick%2==0 ? outOfHours : appConfig.preEngagementConfig; 
    tick++;
    manager.updateConfig({ ...appConfig, preEngagementConfig });
  }, 5000);
  const changeLanguageWebChat = getChangeLanguageWebChat(manager);

  changeLanguageWebChat(initialLanguage);

  // If caller is waiting for a counselor to connect, disable input (default language)
  if (manager.chatClient) setChannelOnCreateWebChat(manager);

  // Disable greeting message as chatbot already includes one
  FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = undefined;

  // Set caller name to be 'You'  
  FlexWebChat.MessagingCanvas.defaultProps.memberDisplayOptions =
  currentConfig.memberDisplayOptions
    ? currentConfig.memberDisplayOptions
    : {
    yourDefaultName: 'You',
    yourFriendlyNameOverride: false,
    theirFriendlyNameOverride: true,
  };

  // Hide message input and send button if disabledReason is not undefined
  FlexWebChat.MessageInput.Content.remove('textarea', {
    if: props => (manager.chatClient.user.attributes as any).lockInput,
  });

  // Hide first message ("AutoFirstMessage", sent to create a new task)
  FlexWebChat.MessageList.Content.remove('0');

  // Posting question from preengagement form as users first chat message
  FlexWebChat.Actions.on("afterStartEngagement", (payload) => {
    const { language } = payload.formData;

    // Here we collect caller language (from preEngagement select) and change UI language
    changeLanguageWebChat(language);

    setChannelAfterStartEngagement(manager, ip);
  });

  // Render WebChat
  webchat.init();
};
