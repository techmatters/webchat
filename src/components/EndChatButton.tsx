/* eslint-disable react/require-default-props */
import React from 'react';

import { EndButtonBase } from '../styles';
import { endChat } from '../services/end-chat';

type Props = {
  channelSid: string;
  token: string;
  language?: string;
};

export default function EndChat({ channelSid, token, language }: Props) {
  const handleEndChat = async () => {
    try {
      await endChat(channelSid, token, language);
    } catch (error) {
      console.log(error);
    }
  };
  return <EndButtonBase onClick={handleEndChat}>End Chat</EndButtonBase>;
}
