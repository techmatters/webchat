import { combineReducers } from 'redux';
import { AppState, WebchatReducer } from '@twilio/flex-webchat-ui';

import { taskReducer, TaskState } from './task';

export type AseloWebchatState = {
  flex: AppState;
  task: TaskState;
};

const reducers = {
  flex: (state: AppState | undefined, action: any) => WebchatReducer(state as AppState, action),
  task: taskReducer,
} as const;

const combinedReducer = combineReducers<AseloWebchatState>(reducers);

export const aseloReducer = (state: AseloWebchatState | undefined, action: any) => {
  return combinedReducer(state, action);
};
