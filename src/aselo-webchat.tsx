import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';
import { Channel } from 'twilio-chat/lib/channel';
import { Provider } from 'react-redux';
import { FlexState } from '@twilio/flex-webchat-ui/src/Store';
import { Reducer } from 'redux';

import { getUserIp } from './ip-tracker';
import { displayOperatingHours } from './operating-hours';
import { getCurrentConfig } from '../configurations';
import { updateZIndex } from './dom-utils';
import blockedIps from './blockedIps.json';
import CloseChatButtons from './end-chat/CloseChatButtons';
import { getChangeLanguageWebChat } from './language';
import { applyMobileOptimization } from './mobile-optimization';
import { aseloReducer } from './aselo-webchat-state';
import { subscribeToChannel } from './task';

updateZIndex();
applyMobileOptimization();

const currentConfig = getCurrentConfig();
const { defaultLanguage, translations } = currentConfig;
const initialLanguage = defaultLanguage;

const chatChannel = async (manager: FlexWebChat.Manager): Promise<Channel> => {
  const { channelSid } = manager.store.getState().flex.session;
  return manager.chatClient.getChannelBySid(channelSid);
};

const unlockInput = (manager: FlexWebChat.Manager) => {
  const { user } = manager.chatClient;
  const { lockInput, ...attributes } = user.attributes as any;
  user.updateAttributes(attributes);
};

const setListenerToUnlockInput = async (channel: Channel, manager: FlexWebChat.Manager) => {
  if (!channel) return;

  const cb = () => {
    // Re-enable input
    unlockInput(manager);
  };

  // User is not alone in the channel (possible cause to enter this case is page reload)
  const membersCount = await channel.getMembersCount();
  if (membersCount > 1) {
    cb();
    return;
  }

  // Adds an event listener that will run only once
  channel.once('memberJoined', () => {
    cb();
  });
};


const setChannelOnCreateWebChat = async (channel: Channel, manager: FlexWebChat.Manager) => {
  setListenerToUnlockInput(channel, manager);
};

const setChannelAfterStartEngagement = async (channel: Channel, manager: FlexWebChat.Manager, contact: string = '') => {
  setListenerToUnlockInput(channel, manager);

  // Generate task by sending empty message (hidden from the UI above)
  const message = `${translations[initialLanguage].AutoFirstMessage} ${contact}`;
  channel.sendMessage(message);
};
export const initWebchat = async () => {
  let ip: string | undefined;

  if (currentConfig.captureIp) {
    ip = await getUserIp();
  }

  if (Array.isArray(blockedIps) && ip && (blockedIps as string[]).includes(ip)) {
    // Do not initialize plugin for this ip
    return;
  }

  const appConfig = {
    accountSid: currentConfig.accountSid,
    flexFlowSid: currentConfig.flexFlowSid,
    startEngagementOnInit: false,
    preEngagementConfig: currentConfig.preEngagementConfig,
    context: {
      ip,
      contactType: currentConfig.contactType,
    },
    colorTheme: {
      overrides: {
        PreEngagementCanvas: {
          Container: {
            ':first-child': {
              'white-space': 'break-spaces',
            },
          },
          Form: {
            Label: { display: 'block' },
          },
        },
      },
    },
  };

  const webchat = await FlexWebChat.createWebChat(appConfig);
  const { manager } = webchat;
  manager.store.replaceReducer(aseloReducer as Reducer<FlexState>);

  await displayOperatingHours(currentConfig, manager);

  const changeLanguageWebChat = getChangeLanguageWebChat(manager, currentConfig);

  changeLanguageWebChat(initialLanguage);

  // If caller is waiting for a counselor to connect, disable input (default language)
  if (manager.chatClient) {
    const channel = await chatChannel(manager);
    await setChannelOnCreateWebChat(channel, manager);
    await subscribeToChannel(manager, channel);
  }

  // Disable greeting message as chatbot already includes one
  FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = undefined;

  // Set caller name to be 'You'
  FlexWebChat.MessagingCanvas.defaultProps.memberDisplayOptions = currentConfig.memberDisplayOptions
    ? currentConfig.memberDisplayOptions
    : {
        yourDefaultName: 'You',
        yourFriendlyNameOverride: false,
        theirFriendlyNameOverride: true,
      };

  // Hide message input and send button if disabledReason is not undefined
  FlexWebChat.MessageInput.Content.remove('textarea', {
    if: (props) => (manager.chatClient.user.attributes as any).lockInput,
  });

  // Hide first message ("AutoFirstMessage", sent to create a new task)
  FlexWebChat.MessageList.Content.remove('0');

  // Posting question from preengagement form as users first chat message
  FlexWebChat.Actions.addListener('afterStartEngagement', async (payload) => {
    const { language, email } = payload.formData;

    // Here we collect caller language (from preEngagement select) and change UI language
    changeLanguageWebChat(language);

    const channel = await chatChannel(manager);
    let contact = ip;
    if (email) contact = email;
    await setChannelAfterStartEngagement(channel, manager, contact);
    await subscribeToChannel(manager, channel);
  });

  FlexWebChat.Actions.addListener('afterRestartEngagement', (payload) => {
    if (payload.exit) {
      setTimeout(() => window.open('https://google.com', '_self'), 1000);
    } else {
    }
  });

  // Add CloseButtons
  FlexWebChat.MessageInput.Content.add(
    <Provider store={manager.store as any} key="closechatprovider">
      <CloseChatButtons />
    </Provider>,
  );

  // Render WebChat
  webchat.init();
};
