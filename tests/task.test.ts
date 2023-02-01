import { taskReducer, TaskState, setCurrentTaskFromChannel} from '../src/task';
import { Channel } from 'twilio-chat/lib/channel';


describe('task reducer', () => {
  test('should return initial state when no action is passed', () => {
    const expected = {};
    const initialState = undefined;
    const updatedState = taskReducer(initialState, {} as any);

    expect(updatedState).toStrictEqual(expected);
  });

  test('should return new taskSid when updating channel with current task', () => {
    const initialState: TaskState = { currentSid: 'Task1' };

    const expected = { ...initialState, currentSid: 'Task2' };
    const channel: Partial<Channel>= {attributes: { taskSid: 'Task2' } } 
    const action = setCurrentTaskFromChannel(channel as Channel);
    const updatedState = taskReducer(initialState, action);

    expect(updatedState).toStrictEqual(expected);
  });
});
