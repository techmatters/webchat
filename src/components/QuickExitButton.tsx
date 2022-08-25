import * as React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import { ButtonBase } from '@material-ui/core';

//Investigate the ability to have the 'Quick Exit' button clear the conversation UI for the child (shouldn't clear the chat for the counselor)
//Investigate the ability to have the 'Quick Exit' button redirect to a different url (e.g. www.google.com)

export default function QuickExitButton () {

  const handleExitChat = () =>{
    FlexWebChat.Actions.invokeAction("RestartEngagement")
    window.close();
    window.open('https://google.com', '_blank')
  }

  return (
    <ButtonBase style={{'color':'red'}} onClick={handleExitChat}>
      Quick Exit
    </ButtonBase>
  )
};