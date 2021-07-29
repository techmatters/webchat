import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'ACfd932bd76669f9cc2145e67e6c3e03ea';
const flexFlowSid = 'FOe37919dd07e25959ef5c480519270d91';
const defaultLanguage = 'en-US';
const captureIp = true;

const translations: Translations = {
  'en-US': {
    WelcomeMessage: 'Welcome to Childline Ethiopia',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold: 'Please hold for a counselor.',
    AutoFirstMessage: 'Incoming webchat contact from',
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description: 'Thank you for contacting Childline Ethiopia. To chat with a counsellor, please select the Start Chat button.',
  fields: [
    {
      type: "InputItem",
      label: "What is your name? (This may be just a screen name, or a nick name, if you are not comfortable giving us your real name)",
      attributes: {
        name: "friendlyName",
        type: "text",
        placeholder: "Guest",
        required: true,
      }
    }
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
