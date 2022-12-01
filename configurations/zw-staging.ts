import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'AC48d146ce2460184b8944cc7fdf8c5d25';
const flexFlowSid = 'FO7494aba81cf5899543d90aa1902a1064';
const defaultLanguage = 'en-US';
const captureIp = true;

const translations: Translations = {
  'en-US': {
    WelcomeMessage: 'Childline Zimbabwe',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold:
      "Thank you very much for this information. We'll transfer you now. Please hold for a counsellor.",
    AutoFirstMessage: 'Incoming webchat contact from',
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description:
    'Thank you for contacting SafeSpot. To chat with a counsellor, please type your name and select the Start Chat button.',
  fields: [
    {
      type: 'InputItem',
      label: 'What is your name?',
      attributes: {
        name: 'friendlyName',
        type: 'text',
        placeholder: 'Guest',
        required: true,
      },
    },
  ],
  submitLabel: 'Start Chat!',
};

const mapHelplineLanguage: MapHelplineLanguage = (helpline) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (helpline) {
    default:
      return defaultLanguage;
  }
};

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Childline Zimbabwe Counsellor',
};

export const config: Configuration = {
  accountSid,
  flexFlowSid,
  defaultLanguage,
  translations,
  preEngagementConfig,
  mapHelplineLanguage,
  memberDisplayOptions,
  captureIp,
};
