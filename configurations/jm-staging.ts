import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'ACbc27263c18e621f3deb57cf1998a4e04';
const flexFlowSid = 'FOfe4a6c70afb6460dff8a7c2b1503b7aa';
const defaultLanguage = 'en-US';
const captureIp = true;

const translations: Translations = {
  'en-US': {
    WelcomeMessage: 'Welcome to SafeSpot',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold: 'Please hold for a counselor.',
    AutoFirstMessage: 'Incoming webchat contact from',
    MessageInputDisabledReasonHold:
      "Thank you very much for this information. We'll transfer you now. Please hold for a counsellor.",
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
  theirDefaultName: 'SafeSpot Counsellor',
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
