import * as React from 'react';

import Exit from './QuickExitButton';
import End from './EndChatButton';

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
