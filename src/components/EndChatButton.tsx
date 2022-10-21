import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

import { endChat } from '../services/end-chat';

type Props = {
  channelSid: string;
  token: string;
};

export default function EndChat({ channelSid, token }: Props) {
  const handleEndChat = async () => {
    try {
      const response: any = await endChat(channelSid, token);

      const { isTaskStageAssigned } = response;

      if (!isTaskStageAssigned) {
        FlexWebChat.Actions.invokeAction('RestartEngagement');
      }
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
