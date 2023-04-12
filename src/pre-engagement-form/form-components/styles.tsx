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
import { UseFormRegister } from 'react-hook-form';

import { PreEngagementFormState } from '../state';

const { styled } = FlexWebChat;

type Register = UseFormRegister<PreEngagementFormState>;

type Error = {
  error?: boolean;
};

type Props = Error & Partial<Register>;

export const StyledTitle = styled('h2')`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
`;

type LabelProps = {
  isCheckbox?: boolean;
};

export const Label = styled('label')<LabelProps>`
  margin-bottom: 20px;

  .label {
    display: block;
    margin-bottom: 10px;
  }

  .error {
    color: rgb(203, 50, 50);
  }

  ${(props) => props.isCheckbox && 'display: flex;'}
  ${(props) => props.isCheckbox && 'align-items: center;'}
`;

export const StyledInputText = styled('input')<Props>`
  display: block;
  width: 100%;
  font-size: 12px;
  color: #222222;
  line-height: 16px;
  border: 1px solid ${(props) => (props.error ? '#cb3232' : '#c6cad7')};
  padding: 7px 6px;
  box-sizing: border-box;
  box-shadow: none;
`;

export const StyledSelect = styled('select')<Props>`
  display: block;
  width: 100%;
  font-size: 12px;
  color: #222222;
  line-height: 16px;
  border: 1px solid ${(props) => (props.error ? '#cb3232' : '#c6cad7')};
  padding: 7px 6px;
  box-sizing: border-box;
  box-shadow: none;
`;

export const StyledCheckbox = styled('input')<Props>`
  height: 16px;
  width: 16px;
  margin-left: 0;
  margin-right: 5px;
`;

export const StyledButton = styled('button')`
  border: none;
  text-transform: uppercase;
  font-family: 'Open Sans';
  font-size: 10px;
  font-weight: 700;
  padding: 0 16px;
  height: 28px;
  letter-spacing: 2px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    background-blend-mode: color;
  }

  &:disabled {
    cursor: auto;
    opacity: 0.5;
  }
`;
