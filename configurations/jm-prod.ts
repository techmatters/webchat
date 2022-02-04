import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'AC9fd261078d40fcfa06f0e374921af7a5';
const flexFlowSid = 'FOf5d659a7c19c6af218de8be79b3bfd49';
const defaultLanguage = 'en-US';
const captureIp = true;

const translations: Translations = {
  'en-US': {
    WelcomeMessage: 'Welcome to SafeSpot',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold: 
      "Thank you very much for this information. We'll transfer you now. Please hold for a counsellor.",
    AutoFirstMessage: 'Incoming webchat contact from',
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description: "Thank you for contacting SafeSpot. To chat with a counsellor, please type your name and select the Start Chat button.",
  fields:
    [
      {
        type: "InputItem",
        label: "What is your name?",
        attributes: {
          name: "friendlyName",
          type: "text",
          placeholder: "Guest",
          required: true,
        }
      }
    ],
  submitLabel: "Start Chat!"
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
