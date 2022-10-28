/* eslint-disable react/require-default-props */
import * as React from 'react';
import { connect } from 'react-redux';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

import Exit from './QuickExitButton';
import End from './EndChatButton';

const CloseChatButtons = ({ channelSid, token, language }: MapStateToProps) => {
  if (!channelSid || !token || !language) {
    return null;
  }
  return (
    <div style={{ margin: '3px auto' }}>
      <Exit channelSid={channelSid} token={token} language={language} />
      <End channelSid={channelSid} token={token} language={language} />
    </div>
  );
};

type MapStateToProps = {
  channelSid?: string;
  token?: string;
  language?: string;
};

type FlexState = {
  flex: FlexWebChat.AppState;
};

const mapStateToProps = (state: FlexState) => ({
  channelSid: state?.flex?.session?.channelSid,
  token: state?.flex?.session?.tokenPayload?.token,
  language: state?.flex?.config?.language,
});

export default connect(mapStateToProps)(CloseChatButtons);
