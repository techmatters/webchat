import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

import { endChat } from '../serverless-calls/endChat';

type Props = {
  token: string;
  channelSid: string;
};

export default function EndChat({ channelSid, token }: Props) {
  // Serverless call to end chat
  const handleEndChat = async () => {
    try {
      await endChat(channelSid, token);
      console.log('await endChat');
    } catch (error) {
      console.log(error);
    }
  };

  // This is a webchat api call to clear the history and open a new window
  const handleExit = async () => {
    await handleEndChat();
    try {
      FlexWebChat.Actions.invokeAction('RestartEngagement');
      window.close();

      window.open('https://google.com');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" onClick={handleExit}>
      Quick Exit
    </button>
  );
}
