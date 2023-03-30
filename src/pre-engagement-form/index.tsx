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
import { connect } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

import { AseloWebchatState } from '../aselo-webchat-state';
import type { PreEngagementForm as PreEngagementFormDefinition } from './form-components/types';
import { generateForm } from './form-components';
import { LocalizationProvider, useLocalization } from './localization';
import SubmitButton from './form-components/submit-button';
import Title from './form-components/title';

const form: PreEngagementFormDefinition = {
  description: 'PreEngagementDescription',
  submitLabel: 'LetsChat',
  fields: [
    {
      type: 'input-text',
      name: 'firstName',
      label: 'First Name',
      placeholder: 'John',
      required: true,
    },
    {
      type: 'input-text',
      name: 'email',
      label: 'Email',
      required: 'Email is required',
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    },
    {
      type: 'select',
      name: 'continent',
      label: 'Continent',
      options: [
        { value: '', label: '' },
        { value: 'North America', label: 'North America' },
        { value: 'South America', label: 'South America' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Africa', label: 'Africa' },
        { value: 'Oceania', label: 'Oceania' },
        { value: 'Asia', label: 'Asia' },
      ],
    },
    {
      type: 'dependent-select',
      dependsOn: 'continent',
      name: 'country',
      label: 'Country',
      required: true,
      options: {
        'North America': [
          { value: '', label: '' },
          { value: 'Canada', label: 'Canada' },
          { value: 'USA', label: 'USA' },
          { value: 'Mexico', label: 'Mexico' },
        ],
        'South America': [
          { value: '', label: '' },
          { value: 'Chile', label: 'Chile' },
          { value: 'Argentina', label: 'Argentina' },
          { value: 'Brazil', label: 'Brazil' },
          { value: 'Colombia', label: 'Colombia' },
        ],
        Europe: [
          { value: '', label: '' },
          { value: 'Spain', label: 'Spain' },
          { value: 'Portugal', label: 'Portugal' },
          { value: 'France', label: 'France' },
          { value: 'Ireland', label: 'Ireland' },
          { value: 'UK', label: 'UK' },
          { value: 'Germany', label: 'Germany' },
          { value: 'Italy', label: 'Italy' },
        ],
        Africa: [
          { value: '', label: '' },
          { value: 'Nigeria', label: 'Nigeria' },
          { value: 'South Africa', label: 'South Africa' },
          { value: 'Egypt', label: 'Egypt' },
          { value: 'Ethiopia', label: 'Ethiopia' },
          { value: 'Zambia', label: 'Zambia' },
        ],
        Oceania: [
          { value: '', label: '' },
          { value: 'Australia', label: 'Australia' },
          { value: 'New Zealand', label: 'New Zealand' },
        ],
        Asia: [
          { value: '', label: '' },
          { value: 'Japan', label: 'Japan' },
          { value: 'China', label: 'China' },
          { value: 'South Korea', label: 'South Korea' },
        ],
      },
    },
  ],
};

type Props = {
  manager: FlexWebChat.Manager;
} & ReturnType<typeof mapStateToProps>;

const PreEngagementForm: React.FC<Props> = ({ preEngagementFormState, manager }) => {
  const methods = useForm({ defaultValues: preEngagementFormState, mode: 'onChange' });
  const { handleSubmit, formState } = methods;
  const { isValid } = formState;

  const onSubmit = handleSubmit((data) => {
    const payload = { formData: data };
    console.log({ payload });
    FlexWebChat.Actions.invokeAction('StartEngagement', payload);
  });

  return (
    <FormProvider {...methods}>
      <LocalizationProvider manager={manager}>
        <form className="Twilio-DynamicForm" onSubmit={onSubmit}>
          <Title title={form.description} />
          {generateForm(form.fields)}
          <SubmitButton label={form.submitLabel} disabled={!isValid} />
        </form>
      </LocalizationProvider>
    </FormProvider>
  );
};

const mapStateToProps = (state: AseloWebchatState) => ({ preEngagementFormState: state?.preEngagementForm });

export default connect(mapStateToProps)(PreEngagementForm);
