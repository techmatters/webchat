/* eslint-disable import/no-unused-modules */
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

export const ButtonsWrapper = styled('div')`
  display: flex;
  text-align: center;
  margin: -20px auto auto auto;
  padding-top: 25px;
  width: 100%;
`;

export const StyledEndButton = styled('button')`
  align-items: center;
  background-color: #fff;
  border: 1.5px solid #d22f2f;
  border-radius: 4px;
  color: #d22f2f;
  cursor: pointer;
  display: flex;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: bold;
  height: 29px;
  margin-left: 5px;
  width: 90%;
`;

export const EndChatText = styled('span')`
  flex-grow: 1;
  text-align: center;
`;

export const EndChatIcon = styled('span')`
  position: relative;
  left: 7%;
`;

export const ExitWrapper = styled('div')`
  width: 100%;
`;

export const QuickExitText = styled('span')`
  position: relative;
  top: -20%;
  left: -7%;
  padding: 0;
`;

export const StyledQuickExitButton = styled('button')`
  width: 90%;
  background-color: #d22f2f;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Open Sans;
  font-size: 12px;
  margin-right: -10px;
  height: 29px;
  align-items: center;
  inline-size: fit-content;
  padding: 0;
`;

export const ExitDescText = styled('p')`
  color: #d22f2f;
  font-family: Open Sans;
  font-weight: bold;
  margin: 2px 0 0 1px;
  font-size: 11px;
  &:after {
    content: '';
    display: inline-block;
    width: 100%;
  }
`;
