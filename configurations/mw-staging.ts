import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'AC874af45ec4a696d5d4dca07b0036e2bf';
const flexFlowSid = 'FO7fb4e9816507d650ddc221f27d2d8927';
const defaultLanguage = 'en-US';
const captureIp = true;

const translations: Translations = {
  'en-US': {
    WelcomeMessage: 'Welcome to Childline Malawi',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold: 'Please hold for a counselor.',
    AutoFirstMessage: 'Incoming webchat contact from',
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description: "Let's get started",
  fields: [
    {
      label: 'Hidden Field',
      type: 'InputField',
      attributes: {
        name: '',
        readOnly: true,
      },
    },
  ],
  submitLabel: 'Start Chat!',
};

const mapHelplineLanguage: MapHelplineLanguage = helpline => {
  switch (helpline) {
    default:
      return defaultLanguage;
  }
}

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Counsellor',
}

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
