import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

import { endChat } from '../serverless-calls/endChat';

type Props = {
  token: string;
};

export default function EndChat({ token }: Props) {
  const handleEndChat = async () => {
  console.log('>handleEndChat start call to endChat')

    await endChat(token);
  console.log('>handleEndChat end call to endChat')

  };
  return (
    <button type="button" onClick={handleEndChat}>
      End Chat
    </button>
  );
}
