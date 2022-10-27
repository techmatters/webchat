import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

import { endChat } from '../serverless-calls/endChat';

type Props = {
  channelSid: string;
  token: string;
  language:string;
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
    <button type="button" onClick={handleExit}>
      Quick Exit
    </button>
  );
}
