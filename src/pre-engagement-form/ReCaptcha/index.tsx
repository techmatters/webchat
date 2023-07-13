import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { RECAPTCHA_KEY } from '../../../private/secret';
import { validateUser } from './recaptchaValidation';

type Props = {
  bypassCaptcha: boolean | undefined;
  onRecaptchaChange: (verified: boolean) => void;
};

const ReCaptcha: React.FC<Props> = ({ bypassCaptcha, onRecaptchaChange }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onChange = (token: string | null) => {
    const verified = token !== null;
    onRecaptchaChange(verified);

    if (verified) {
      try {
        validateUser(token ?? '');
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (bypassCaptcha) {
    return null;
  }

  return <ReCAPTCHA sitekey={RECAPTCHA_KEY} size="normal" ref={recaptchaRef} onChange={onChange} />;
};

export default ReCaptcha;
