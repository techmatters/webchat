import * as React from 'react';

import Exit from './QuickExitButton';
import End from './EndChatButton';

//Buttons should be able to end the conversation and notify the counselor that the child has left the conversation
type Props = {
  channelSid: string;
}
export default function ButtonsRow ({channelSid}:Props) {
  return (
    <div style={{'margin': '3px auto'}}>
      <Exit channelSid={channelSid} />
      <End channelSid={channelSid}/>
    </div>
  );
};