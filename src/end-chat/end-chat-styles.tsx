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

import * as FlexWebChat from '@twilio/flex-webchat-ui';

const { styled } = FlexWebChat;

export const EndChatWrapper = styled('div')`
  margin: 2px auto;
  width: 45%;
  display: flex;
  justify-content: inherit;
`;

export const StyledEndButton = styled('button')`
  margin: 2px auto;
  background-color: #fff;
  color: #d22f2f;
  flex-grow: 1;
  height: 29px;
  font-weight: bold;
  border: 1.5px solid #d22f2f;
  border-radius: 4px;
  cursor: pointer;
  font-family: Open Sans;
  font-size: 11px;
  line-height: 24px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  &:focus: {
    outline: auto;
  }
`;

export const ButtonWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;

export const ExitDescWrapper = styled('div')`
  flex-basis: 100px;
  flex-grow: 1;
  display: inline-grid;
  align-content: center;
  justify-items: center;
`;

export const ExitDescText = styled('span')`
  margin: 2px 0 0 2px;
  color: #d22f2f;
  padding: 0 5px;
  margin-top: -2px;
  font-family: Open Sans;
  font-size: 9px;
  line-height: 15px;
  font-weight: bold;
  max-width: fit-content;
`;

export const StyledQuickExitButton = styled('button')`
  display: flex;
  width: 90%;
  margin: 4px auto;
  background-color: #d22f2f;
  color: #fff;
  flex-grow: 1;
  height: 29px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Open Sans;
  font-size: 11px;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  overflow-wrap: break-word;
  padding-left: 20px;
  &:focus: {
    outline: auto;
  }
`;

export const QuickExitText = styled('span')`
  padding: 0 5px 1px 2px;
`;

// eslint-disable-next-line import/no-unused-modules
export const ExitWrapper = styled('div')`
  margin-top: '0';
`;
