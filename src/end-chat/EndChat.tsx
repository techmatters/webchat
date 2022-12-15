/* eslint-disable react/require-default-props */
import React from 'react';
import { Template } from '@twilio/flex-webchat-ui';

import { endChat } from './end-chat-service';
import { EndChatWrapper, StyledEndButton } from './end-chat-styles';

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
  return (
    <EndChatWrapper>
      <StyledEndButton onClick={handleEndChat}>
        <Template code="EndChatButtonLabel" />
      </StyledEndButton>
    </EndChatWrapper>
  );
}
