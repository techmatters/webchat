/* eslint-disable react/require-default-props */
import * as React from 'react';
import { connect } from 'react-redux';
import * as FlexWebChat from '@twilio/flex-webchat-ui';
import { Template } from '@twilio/flex-webchat-ui';

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
      <StyleWrapper margin="3px 2px 10px 2px" style={{ flexFlow: 'wrap', flexDirection: 'row' }}>
        <div style={{ flexBasis: '100px', flexGrow: 1, display: 'inline-grid', alignContent: 'center' }}>

          <StyleText style={{ padding: '0px' }} margin="2px 5px 0 3px" color="#606b85">
            <Template code="QuickExitDescription" />
          </StyleText>
        </div>
        <div>
          <Exit channelSid={channelSid} token={token} language={language} />
        </div>
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
