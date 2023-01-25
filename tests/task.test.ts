import { taskReducer, TaskState, SetCurrentTaskAction, SET_CURRENT_TASK } from '../src/task';

describe('task reducer', () => {
  test('should return initial state when no action is passed', () => {
    const expected = {};
    const initialState = undefined;
    const updatedState = taskReducer(initialState, {} as SetCurrentTaskAction);

    expect(updatedState).toStrictEqual(expected);
  });

  test('should return new taskSid when updating channel with current task', () => {
    const initialState: TaskState = { currentSid: 'Task1' };
    const newSid = 'Task2';
    const expected = { ...initialState, currentSid: newSid };
    const updatedState = taskReducer(initialState, { type: SET_CURRENT_TASK, newSid } as SetCurrentTaskAction);

    expect(updatedState).toStrictEqual(expected);
  });
});
