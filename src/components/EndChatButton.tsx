import * as React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import { ButtonBase } from '@material-ui/core';

export default function EndChatButton () {
  
  const handleEndChat = () =>{
    FlexWebChat.Actions.invokeAction("RestartEngagement")
    FlexWebChat.Actions.invokeAction("MinimizeChat")
  }

  return (
    <ButtonBase style={{'color':'blue'}} onClick={handleEndChat}>
      End Chat
    </ButtonBase>
  )
};