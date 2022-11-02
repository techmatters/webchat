/* eslint-disable react/require-default-props */
import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

import { EndButtonBase } from '../styles';
import { endChat } from '../services/end-chat';

type Props = {
  channelSid: string;
  token: string;
  language?: string;
};

export default function EndChat({ channelSid, token, language }: Props) {
  const handleEndChat = async () => {
    try {
      const response: any = await endChat(channelSid, token);

      const { isTaskStageAssigned } = response;

      if (!isTaskStageAssigned) {
        FlexWebChat.Actions.invokeAction('RestartEngagement');
      }

      await endChat(channelSid, token, language);
    } catch (error) {
      console.log(error);
    }
  };
  return <EndButtonBase onClick={handleEndChat}>End Chat</EndButtonBase>;
}
