/* eslint-disable react/require-default-props */
import React from 'react';
import { Template } from '@twilio/flex-webchat-ui';

import { endChat } from './end-chat-service';
import { EndButtonBase } from './end-chat-styles';

type Props = {
  channelSid: string;
  token: string;
  language?: string;
};

export default function EndChat({ channelSid, token, language }: Props) {
  const handleEndChat = async () => {
    try {
      await endChat(channelSid, token, language);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <EndButtonBase onClick={handleEndChat}>
      <Template code="EndChatButtonLabel" />
    </EndButtonBase>
  );
}
