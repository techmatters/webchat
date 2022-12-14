/* eslint-disable react/require-default-props */
import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';
import { Template } from '@twilio/flex-webchat-ui';

import { endChat } from './end-chat-service';
import QuickExitIcon from './QuickExitIcon';
import { ExitButtonBase } from './end-chat-styles';

type Props = {
  channelSid: string;
  token: string;
  language?: string;
};

export default function EndChat({ channelSid, token, language }: Props) {
  // Serverless call to end chat
  const handleEndChat = async () => {
    try {
      await endChat(channelSid, token, language);
    } catch (error) {
      console.log(error);
    }
  };

  const handleExit = async () => {
    await handleEndChat();
    // Clear chat history and open a new location
    await FlexWebChat.Actions.invokeAction('RestartEngagement', { exit: true });
  };

  return (
    <ExitButtonBase onClick={handleExit} style={{
      whiteSpace: 'nowrap',
      width: '100%',
      justifyContent: 'center'
    }}>
      <QuickExitIcon />
      <span style={{ margin: '-3px 0 0 3px' }}>
        <Template code="QuickExitButtonLabel" />
      </span>
    </ExitButtonBase>
  );
}
