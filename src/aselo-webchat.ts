import * as FlexWebChat from '@twilio/flex-webchat-ui';
import { Channel } from 'twilio-chat/lib/channel';
import { getUserIp } from './ip-tracker';
import { getCurrentConfig } from '../configurations';

getUserIp();

const currentConfig = getCurrentConfig();
const defaultLanguage = currentConfig.defaultLanguage;
const initialLanguage = defaultLanguage;
const translations = currentConfig.translations;

const appConfig = {
  accountSid: currentConfig.accountSid,
  flexFlowSid: currentConfig.flexFlowSid,
  startEngagementOnInit: false,
  preEngagementConfig: currentConfig.preEngagementConfig,
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

type ChannelAndManagerFn = (channel: Channel, manager: FlexWebChat.Manager) => void;

const doWithChannel = (callback: ChannelAndManagerFn) => (manager: FlexWebChat.Manager) => {
  const { channelSid } = manager.store.getState().flex.session;
    manager
      .chatClient.getChannelBySid(channelSid)
      .then(channel => {
        callback(channel, manager);
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

const setChannelAfterStartEngagement = doWithChannel((channel: Channel, manager: FlexWebChat.Manager) => {
  setListenerToUnlockInput(channel, manager);

  // Generate task by sending empty message (hidden from the UI above)
  channel.sendMessage(translations[initialLanguage].AutoFirstMessage);
})

export const initWebchat = () => FlexWebChat.createWebChat(appConfig).then(webchat => {
  const { manager } = webchat;
  const changeLanguageWebChat = getChangeLanguageWebChat(manager);

  changeLanguageWebChat(initialLanguage);

  // If caller is waiting for a counselor to connect, disable input (default language)
  if (manager.chatClient) setChannelOnCreateWebChat(manager);

  // Disable greeting message as chatbot already includes one
  FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = undefined;

  // Set caller name to be 'You'  
  FlexWebChat.MessagingCanvas.defaultProps.memberDisplayOptions = {
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
    const { question, helpline } = payload.formData;

    // Here we might collect caller language (from a another preEngagement select)
    const helplineLanguage = currentConfig.mapHelplineLanguage(helpline);
    changeLanguageWebChat(helplineLanguage);

    setChannelAfterStartEngagement(manager);
  });

  // Render WebChat
  webchat.init();
});
