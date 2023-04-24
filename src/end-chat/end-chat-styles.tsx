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
  margin: auto;
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

export const StyledCloseChatText = styled('span')`
  flex-grow: 0.8;
  text-align: center;
`;

export const EndChatIcon = styled('span')`
  position: relative;
  left: 7%;
`;

export const ExitDescText = styled('p')`
  color: #d22f2f;
  font-family: Open Sans;
  font-weight: bold;
  margin: 2px 0 0 1px;
  font-size: 11px;
  flex: auto;
  text-align: right;
  width: 50%;
  align-self: flex-end;
  text-align: center;
  &:after {
    content: '';
    display: inline-block;
    width: 100%;
  }
`;
