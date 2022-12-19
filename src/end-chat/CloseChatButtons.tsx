/* eslint-disable react/require-default-props */
import * as React from 'react';
import { connect } from 'react-redux';

import Exit from './QuickExit';
import End from './EndChat';
import { AseloWebchatState } from '../aselo-webchat-state';

const CloseChatButtons = ({ channelSid, token, language, taskSid }: MapStateToProps) => {
  if (!channelSid || !token) {
    return null;
  }
  return (
    <>
      <End
        channelSid={channelSid}
        token={token}
        language={language}
        action={taskSid ? 'finishTask' : 'restartEngagement'}
      />
      <Exit channelSid={channelSid} token={token} language={language} finishTask={Boolean(taskSid)} />
    </>
  );
};

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: AseloWebchatState) => {
  const { channelSid, tokenPayload } = state?.flex?.session ?? {};
  return {
    taskSid: state?.task?.currentSid,
    channelSid,
    token: tokenPayload?.token,
    language: state?.flex?.config?.language,
  };
};

export default connect(mapStateToProps)(CloseChatButtons);
