import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';
import LogoutIcon from '@mui/icons-material/Logout';

import { endChat } from '../services/end-chat';
import { ExitButtonBase } from '../styles';

type Props = {
  channelSid: string;
  token: string;
};

export default function EndChat({ channelSid, token }: Props) {
  // Serverless call to end chat
  const handleEndChat = async () => {
    try {
      await endChat(channelSid, token);
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
    <ExitButtonBase type="button" onClick={handleExit}>
      <LogoutIcon style={{ marginRight: '5px' }} fontSize="inherit" />
      Quick Exit
    </ExitButtonBase>
  );
}
