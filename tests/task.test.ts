import { taskReducer, TaskState, SetCurrentTaskAction, SET_CURRENT_TASK } from '../src/task';

describe('task reducer', () => {
  test('should return initial state', () => {
    const expected = {};

    const initialState = undefined;
    const result = taskReducer(initialState, {} as SetCurrentTaskAction);

    expect(result).toStrictEqual(expected);
  });

  test('should handle SET_CURRENT_TASK action', () => {
    const state: TaskState = { currentSid: 'Task1' };
    const newSid = 'Task2';

    const expected = { ...state, currentSid: newSid };

    const result = taskReducer(state, { type: SET_CURRENT_TASK, newSid } as SetCurrentTaskAction);

    expect(result).toStrictEqual(expected);
  });
});
