/* eslint-disable react/require-default-props */
import * as React from 'react';
import { connect } from 'react-redux';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

import Exit from './QuickExitButton';
import End from './EndChatButton';
import { StyleWrapper, StyleText } from '../styles';

const CloseChatButtons = ({ channelSid, token, language }: MapStateToProps) => {
  if (!channelSid || !token) {
    return null;
  }
  return (
    <>
      <StyleWrapper margin="2px auto">
        <End channelSid={channelSid} token={token} language={language} />
      </StyleWrapper>
      <StyleWrapper margin="3px 2px 10px 10px">
        <StyleText margin="12px 5px 0 3px" color="#949cac">
          Need to leave quickly?
        </StyleText>
        <Exit channelSid={channelSid} token={token} language={language} />
      </StyleWrapper>
    </>
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
