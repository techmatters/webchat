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
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

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
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>('6Ld9E4ElAAAAAPwByxFPxCucSopHboogCI6Os7tR');

  // v3 implementation
  const generateCaptchaToken = async () => {
    const siteKey = '6Ld9E4ElAAAAAPwByxFPxCucSopHboogCI6OstR';
    console.log('>>> generateCaptchaToken');
    const token = await grecaptcha.execute(siteKey, { action: 'submit' });
    // const token = '6Ld9E4ElAAAAANwj6thHuJkpgq_qYBQu8mUkKaP9'
    console.log('>>> executed and not ready - await grecaptcha.executen token', token);

    // setRecaptchaToken(token)

    /*
     * grecaptcha.ready(function() {
     *   grecaptcha.execute(siteKey, {action: 'submit'}).then(function(token) {
     *     // submit to serverless
     *     console.log('>>> token', token)
     *     setRecaptchaToken(token)
     *   });
     * });
     */
  };

  const methods = useForm({ defaultValues, mode: 'onChange' });
  const { handleSubmit, formState } = methods;
  const { isValid } = formState;

  const onSubmit = handleSubmit(async (data) => {
    // generateCaptchaToken();

    /*
     * v2 implementation
     * const recaptchaResponse = document.getElementById('g-recaptcha-response')?.value;
     * const recaptchaResponse = '6LfrE4ElAAAAAFH4CPX-nb0hZZOpQ6Yj1wQCiGXE'
     */
    const recaptchaResponse = document.getElementById('g-recaptcha-response');
    console.log('>>> recaptchaResponse', recaptchaResponse);

    /*
     * if (!recaptchaResponse) {
     *   alert('Please complete the reCAPTCHA challenge before submitting the form.');
     *   return;
     * }
     */

    const payload = { formData: { ...data, recaptchaToken } };
    console.log('>>>> onSubmit', payload);
    await FlexWebChat.Actions.invokeAction('StartEngagement', payload);
    resetFormAction();
  });

  if (formDefinition === undefined) {
    return null;
  }

  useEffect(() => {
    generateCaptchaToken();
  }, [recaptchaToken, formState]);

  return (
    <FormProvider {...methods}>
      {/* v2 checkbox implementation */}
      <div
        className="g-recaptcha"
        data-sitekey="6LfrE4ElAAAAAEQWb0CXszWNFBET_skTMik9A0lU"
        data-size="invisible"
        data-callback="recaptchaCallback"
      >
        {/* v2 invisible implementation */}
        {/* <div className="g-recaptcha" data-sitekey="6LfrE4ElAAAAAEQWb0CXszWNFBET_skTMik9A0lU" data-size="invisible"
  data-callback="recaptchaCallback"></div> */}
        <LocalizationProvider manager={manager}>
          <form className="Twilio-DynamicForm" onSubmit={onSubmit}>
            <Title title={formDefinition.description} />
            {generateForm(formDefinition.fields)}
            {formDefinition.submitLabel && <SubmitButton label={formDefinition.submitLabel} disabled={!isValid} />}
          </form>
        </LocalizationProvider>
      </div>
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
