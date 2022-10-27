import React from 'react';

import { endChat } from '../serverless-calls/endChat';

type Props = {
  channelSid: string;
  token: string;
  language: string;
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
    <button type="button" onClick={handleEndChat}>
      End Chat
    </button>
  );
}
