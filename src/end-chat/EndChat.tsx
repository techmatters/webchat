/* eslint-disable react/require-default-props */
import React from 'react';
import { Template } from '@twilio/flex-webchat-ui';

import { finishChatTask } from './end-chat-service';
import { EndChatWrapper, StyledEndButton } from './end-chat-styles';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

type Props = {
  channelSid: string;
  token: string;
  language?: string;
  action: 'finishTask' | 'restartEngagement'
};

export default function EndChat({ channelSid, token, language, action }: Props) {
  // Serverless call to end chat
  const handleEndChat = async () => {
    switch (action) {
      case 'finishTask':
        try {
          await finishChatTask(channelSid, token, language);
        } catch (error) {
          console.log(error);
        }
        return;
      case 'restartEngagement':
        await FlexWebChat.Actions.invokeAction('RestartEngagement', { exit: false })
        return;
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
