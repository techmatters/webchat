import * as React from 'react';
import { EngagementStage } from '@twilio/flex-webchat-ui/src/constants/session';

import Exit from './QuickExitButton';
import End from './EndChatButton';

// Buttons should be able to end the conversation and notify the counselor that the child has left the conversation
type Props = {
  channelSid: string;
  token: string;
};
export default function CloseChatButtons({ channelSid, token }: Props) {
  return (
    <div style={{ margin: '3px auto' }}>
      <Exit channelSid={channelSid} token={token} />
      <End channelSid={channelSid} token={token} />
    </div>
  );
}
