/* eslint-disable react/require-default-props */
import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';
import { Template } from '@twilio/flex-webchat-ui';

import { finishChatTask } from './end-chat-service';
import QuickExitIcon from './QuickExitIcon';
import { ExitWrapper, ExitDescWrapper, ExitDescText, QuickExitText, StyledQuickExitButton } from './end-chat-styles';

type Props = {
  channelSid: string;
  token: string;
  language?: string;
  finishTask: boolean;
};

export default function QuickExit({ channelSid, token, language, finishTask }: Props) {

  const handleExit = async () => {
    const actions: Promise<unknown>[] = []
    if (finishTask) {
      // Only if we started a task
      try {
        actions.push(finishChatTask(channelSid, token, language));
      } catch (error) {
        console.log(error);
      }
    }
    // Clear chat history and open a new location
    actions.push(FlexWebChat.Actions.invokeAction('RestartEngagement', { exit: true }));
    await Promise.all(actions);
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
