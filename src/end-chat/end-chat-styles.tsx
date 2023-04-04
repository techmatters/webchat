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

export const EndChatWrapper = styled('span')`
  position: relative;
  top: 2%;
  left: -20%;
`;

export const IconWrapper = styled('div')`
  position: relative;
  top: 6%;
  left: -35%;
`;

export const StyledEndButton = styled('button')`
  display: flex;
  background-color: #fff;
  color: #d22f2f;
  height: 29px;
  font-weight: bold;
  border: 1.5px solid #d22f2f;
  border-radius: 4px;
  cursor: pointer;
  font-family: Open Sans;
  font-size: 12px;
  margin-right: 2px;
  padding: 0px 30px 0px 60px;
  height: 29px;
  line-height: 24px;
`;

export const ButtonWrapper = styled('div')`
  display: flex;
  text-align: center;
  margin: -20px auto auto auto;
  padding-top: 25px;
`;

export const ExitDescWrapper = styled('div')``;

export const ExitDescText = styled('span')`
  color: #d22f2f;
  text-align: justify;
  font-family: Open Sans;
  font-weight: bold;
  margin: 2px 0 0 2px;
  &:after {
    content: '';
    display: inline-block;
    width: 100%;
  }
`;

export const StyledQuickExitButton = styled('button')`
  background-color: #d22f2f;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Open Sans;
  font-size: 12px;
  margin-left: 2px;
  padding: 0px 30px 0px 60px;
  height: 29px;
  line-height: 24px;
`;

export const QuickExitText = styled('span')`
  position: relative;
  top: -18%;
  left: -20%;
`;

// eslint-disable-next-line import/no-unused-modules
export const ExitWrapper = styled('div')``;
