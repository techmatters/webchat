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
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import * as FlexWebChat from '@twilio/flex-webchat-ui';
import ReCAPTCHA from 'react-google-recaptcha';

import { validateUser } from './recaptchaValidation';
import { RECAPTCHA_SITE_KEY } from '../../private/secret';
import { AseloWebchatState } from '../aselo-webchat-state';
import type { PreEngagementForm as PreEngagementFormDefinition } from './form-components/types';
import { generateForm } from './form-components';
import { LocalizationProvider } from './localization';
import SubmitButton from './form-components/submit-button';
import Title from './form-components/title';
import { resetForm } from './state';

export { PreEngagementFormDefinition };

export const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

type Props = {
  manager: FlexWebChat.Manager;
} & ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

const PreEngagementForm: React.FC<Props> = ({ formState: defaultValues, formDefinition, manager, resetFormAction }) => {
  const methods = useForm({ defaultValues, mode: 'onChange' });
  const { handleSubmit, formState } = methods;
  const { isValid } = formState;

  const recaptchaRef = useRef<any>();
  const onSubmit = handleSubmit(async (data) => {
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    try {
      const response = await validateUser(token);
      console.log('>>> await validateUser(token)', response);
  
      if (response) {
        // reCAPTCHA validation succeeded
        const payload = { formData: data };
        await FlexWebChat.Actions.invokeAction('StartEngagement', payload);
        resetFormAction();
      } else {
        // reCAPTCHA validation failed
      }
    } catch (error) {
      console.log(error);
    }
  });

  if (formDefinition === undefined) {
    return null;
  }

  return (
    <FormProvider {...methods}>
      <LocalizationProvider manager={manager}>
        <form className="Twilio-DynamicForm" onSubmit={onSubmit}>
          <Title title={formDefinition.description} />
          <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} size="invisible" ref={recaptchaRef}>
            {generateForm(formDefinition.fields)}
          </ReCAPTCHA>
          {formDefinition.submitLabel && <SubmitButton label={formDefinition.submitLabel} disabled={!isValid} />}
        </form>
      </LocalizationProvider>
    </FormProvider>
  );
};

const mapStateToProps = (state: AseloWebchatState) => {
  const {
    preEngagementForm: { formDefinition, formState },
  } = state;

  return {
    formDefinition,
    formState,
  };
};

const mapDispatchToProps = {
  resetFormAction: resetForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreEngagementForm);
