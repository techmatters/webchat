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
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import * as FlexWebChat from '@twilio/flex-webchat-ui';
import ReCAPTCHA from 'react-google-recaptcha';

import { AseloWebchatState } from '../aselo-webchat-state';
import type { PreEngagementForm as PreEngagementFormDefinition } from './form-components/types';
import { generateForm } from './form-components';
import { LocalizationProvider } from './localization';
import SubmitButton from './form-components/submit-button';
import Title from './form-components/title';
import { resetForm } from './state';
import { PLACEHOLDER_PRE_ENGAGEMENT_CONFIG } from './placeholder-form';
import { overrideLanguageOnContext } from '../language';
import { RECAPTCHA_KEY } from '../../private/secret';
import { validateUser } from './recaptchaValidation';

export { PreEngagementFormDefinition, PLACEHOLDER_PRE_ENGAGEMENT_CONFIG };

export const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

type Props = {
  manager: FlexWebChat.Manager;
  enableRecaptcha?: boolean;
} & ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

const PreEngagementForm: React.FC<Props> = ({
  formState: defaultValues,
  formDefinition,
  manager,
  resetFormAction,
  enableRecaptcha,
  friendlyName,
}) => {
  const methods = useForm({ defaultValues, mode: 'onChange' });
  const { handleSubmit, formState } = methods;
  const { isValid } = formState;

  // State to keep track of whether the Recaptcha has been verified
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState<boolean>(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Function that overrides the friendlyName value on context
  const overrideFriendlyNameOnContext = () => {
    const appConfig = manager.configuration;

    const updateConfig = {
      ...appConfig,
      context: {
        ...appConfig.context,
        friendlyName,
      },
    };

    manager.updateConfig(updateConfig);
  };

  // Handler function for when the Recaptcha token changes
  const onChange = (token: string | null) => {
    setIsRecaptchaVerified(token !== null); // reflect whether the token is null or not - a valid sitekey will return a token along with recaptchaRef
  };

  const onSubmit = handleSubmit(async (data) => {
    const payload = { formData: data };

    /**
     * If 'language' is defined at the pre-engagement form
     * it should override the language value on Context.
     */
    if (data.language) {
      overrideLanguageOnContext(manager, data.language);
    }

    /**
     * If 'friendlyName' is defined at the pre-engagement form
     * it should override the friendlyName value on Context.
     */
    if (friendlyName) {
      overrideFriendlyNameOnContext();
    }

    if (enableRecaptcha) {
      try {
        const token: string = recaptchaRef?.current?.getValue() ?? '';
        validateUser(token);
        // If the token is valid, submit the form payload and reset the form
        await FlexWebChat.Actions.invokeAction('StartEngagement', payload);
        resetFormAction();
      } catch (error) {
        console.log(error);
      }
    } else {
      // when enableRecaptcha is not set
      await FlexWebChat.Actions.invokeAction('StartEngagement', payload);
      resetFormAction();
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
          {generateForm(formDefinition.fields)}
          {enableRecaptcha && (
            <ReCAPTCHA sitekey={RECAPTCHA_KEY} size="normal" ref={recaptchaRef} onChange={onChange} />
          )}
          {formDefinition.submitLabel && (
            <SubmitButton
              label={formDefinition.submitLabel}
              // disabled prop set to true if the form is invalid or the Recaptcha is not verified
              disabled={!isValid || ((enableRecaptcha ?? false) && !isRecaptchaVerified)}
            />
          )}
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
    friendlyName: formState.friendlyName,
  };
};

const mapDispatchToProps = {
  resetFormAction: resetForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreEngagementForm);
