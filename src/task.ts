import { Manager } from '@twilio/flex-webchat-ui';
import { Channel } from 'twilio-chat/lib/channel';

export type TaskState = {
  currentSid?: string;
};

const initialState: TaskState = {};

const SET_CURRENT_TASK = 'setCurrentTask';

type SetCurrentTaskAction = {
  type: typeof SET_CURRENT_TASK;
  newSid: string | undefined;
};

export const setCurrentTaskFromChannel = (channel: Channel): SetCurrentTaskAction => {
  const attributes: { taskSid: string } = channel.attributes as any;
  return { type: SET_CURRENT_TASK, newSid: attributes?.taskSid };
};

export const taskReducer = (state: TaskState = initialState, action: SetCurrentTaskAction) => {
  if (action.type === SET_CURRENT_TASK) {
    return { ...state, currentSid: action.newSid };
  }
  return state;
};

export const subscribeToChannel = async (manager: Manager, channel: Channel) => {
  channel.addListener('updated', () => {
    manager.store.dispatch(setCurrentTaskFromChannel(channel));
  });
  manager.store.dispatch(setCurrentTaskFromChannel(channel));
};
