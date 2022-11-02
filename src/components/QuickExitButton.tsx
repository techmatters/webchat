/* eslint-disable react/require-default-props */
import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

import { endChat } from '../services/end-chat';
import { ExitButtonBase } from '../styles';

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
    <ExitButtonBase onClick={handleExit}>
      <FlexWebChat.Icon sizeMultiplier={1} icon="Logout" />
      <span style={{ marginTop: '4px' }}>Quick Exit</span>
    </ExitButtonBase>
  );
}
