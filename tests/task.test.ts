import { taskReducer, TaskState, setCurrentTaskFromChannel} from '../src/task';
import { Channel } from 'twilio-chat/lib/channel';

jest.mock('../src/task', () => ({
  setCurrentTaskFromChannel: jest.fn()
}))

describe('task reducer', () => {
  test('should return initial state when no action is passed', () => {
    const expected = {};
    const initialState = undefined;
    // const channel: Partial<Channel> = {attributes: { taskSid: null } }
    const action = setCurrentTaskFromChannel(null)
    const updatedState = taskReducer(initialState, action);

    expect(updatedState).toStrictEqual(expected);
  });

  test('should return new taskSid when updating channel with current task', () => {
    const initialState: TaskState = { currentSid: 'Task1' };
    const newSid = 'Task2';
    const expected = { ...initialState, currentSid: newSid };
    const channel: Partial<Channel> = {attributes: { taskSid: newSid } }
    const action = setCurrentTaskFromChannel(channel);
    const updatedState = taskReducer(initialState, action);

    expect(updatedState).toStrictEqual(expected);
  });
});
