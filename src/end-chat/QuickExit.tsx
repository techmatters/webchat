/* eslint-disable react/require-default-props */
import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';
import { Template } from '@twilio/flex-webchat-ui';

import { endChat } from './end-chat-service';
import QuickExitIcon from './QuickExitIcon';
import { ExitWrapper, ExitDescWrapper, ExitDescText, QuickExitText, StyledQuickExitButton } from './end-chat-styles';

type Props = {
  channelSid: string;
  token: string;
  language?: string;
};

export default function QuickExit({ channelSid, token, language }: Props) {
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
    <ExitWrapper>
      <ExitDescWrapper>
        <ExitDescText>
          <Template code="QuickExitDescription" />
        </ExitDescText>
      </ExitDescWrapper>
      <StyledQuickExitButton onClick={handleExit}>
        <QuickExitIcon />
        <QuickExitText>
          <Template code="QuickExitButtonLabel" />
        </QuickExitText>
      </StyledQuickExitButton>
    </ExitWrapper>
  );
}
