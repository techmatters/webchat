/**
 * Copyright (C) 2021-2023 Technology Matters
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */

export type PreEngagementFormState = { [key: string]: string };

const initialState: PreEngagementFormState = {};

const SET_VALUE = 'SET_VALUE';

type SetValue = {
  type: typeof SET_VALUE;
  payload: {
    name: string;
    value: string;
  };
};

export const setValue = (name: string, value: string): SetValue => ({
  type: SET_VALUE,
  payload: {
    name,
    value,
  },
});

export const preEngagementFormReducer = (state = initialState, action: SetValue) => {
  if (action.type === SET_VALUE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  return state;
};
