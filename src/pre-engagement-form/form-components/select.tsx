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

/* eslint-disable react/require-default-props */
import React from 'react';
import { UseControllerProps } from 'react-hook-form';

import { StyledSelect } from './styles';
import FormComponent from './form-component';
import { useLocalization } from '../localization';

type Option = {
  value: any;
  label: string;
};

type OwnProps = {
  label: string;
  options: Option[];
};

type Props = OwnProps & UseControllerProps;

const Select: React.FC<Props> = ({ name, label, rules, options }) => {
  const { getLabel } = useLocalization();

  const buildOptions = () =>
    options.map((option) => (
      <option key={option.value} value={option.value}>
        {getLabel(option.label)}
      </option>
    ));

  return (
    <FormComponent name={name} label={label} rules={rules}>
      <StyledSelect disabled={false}>{buildOptions()}</StyledSelect>
    </FormComponent>
  );
};

export default Select;
