/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { Template } from '@twilio/flex-webchat-ui';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

import { finishChatTask } from './end-chat-service';
import { EndChatWrapper, StyledEndButton } from './end-chat-styles';

type Props = {
  channelSid: string;
  token: string;
  language?: string;
  action: 'finishTask' | 'restartEngagement';
};

export default function EndChat({ channelSid, token, language, action }: Props) {
  const [disabled, setDisabled] = useState(false);

  // Serverless call to end chat
  const handleEndChat = async () => {
    switch (action) {
      case 'finishTask':
        try {
          setDisabled(true);
          await finishChatTask(channelSid, token, language);
        } catch (error) {
          console.log(error);
        } finally {
          setDisabled(false);
        }
        return;
      case 'restartEngagement':
      default:
        await FlexWebChat.Actions.invokeAction('RestartEngagement', { exit: false });
    }
  };
  return (
    <EndChatWrapper>
      <StyledEndButton onClick={handleEndChat} disabled={disabled}>
        <Template code="EndChatButtonLabel" />
      </StyledEndButton>
    </EndChatWrapper>
  );
}
