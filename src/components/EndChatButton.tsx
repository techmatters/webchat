import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

import { endChat } from '../services/endChat';
import { postSurvey } from '../services/postSurvey';

type Props = {
  channelSid: string;
  token: string;
};

export default function EndChat({ channelSid, token }: Props) {
  const handleEndChat = async () => {
    try {
      const response: any = await endChat(channelSid, token);

      const { taskSid, isTaskStageAssigned } = response;

      // Only 'assigned' tasks should have post survey triggered
      if (isTaskStageAssigned === true) {
        handlePostSurvey(taskSid);
      } else {
        // 'Start New Chat' does not get triggered when user ends task in stage other than 'assigned'
        FlexWebChat.Actions.invokeAction('RestartEngagement');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostSurvey = async (taskSid: string) => {
    try {
      await postSurvey(channelSid, taskSid, token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" onClick={handleEndChat}>
      End Chat
    </button>
  );
}
