import * as React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import { ButtonBase } from '@material-ui/core';

type Props = {
  channelSid: string;
}

export default function EndChatButton ({channelSid}: Props) {
  
  const handleEndChat = () => {
    FlexWebChat.Actions.invokeAction("RestartEngagement");
    FlexWebChat.Actions.invokeAction("MinimizeChat");
    // FlexWebChat.Actions.invokeAction("SendMessage", { body: "User ended the conversation", channelSid: channelSid });
  }

  return (
    <ButtonBase style={{'color':'blue'}} onClick={handleEndChat}>
      End Chat
    </ButtonBase>
  );
};