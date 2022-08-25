import * as React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import { ButtonBase } from '@material-ui/core';

export type Props = {
  channelSid: string;
}

export default function QuickExitButton ({channelSid}: Props) {

  const handleExitChat = () => {
    FlexWebChat.Actions.invokeAction("RestartEngagement");
    // FlexWebChat.Actions.invokeAction("SendMessage", { body: "User ended the conversation", channelSid: channelSid });

    window.open("https://google.com", "_self");
  };

  return (
    <ButtonBase style={{'color':'red'}} onClick={handleExitChat}>
      Quick Exit
    </ButtonBase>
  );
};