import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'AC16dd71c6fd135ee250bd213ad1efa2e8';
const flexFlowSid = 'FOd655fd61e9e7ac6faf9d0be97a49863b';
const defaultLanguage = 'en-US';
const captureIp = true;

const translations: Translations = {
  'en-US': {
    WelcomeMessage: "Welcome to Aselo!",
    MessageCanvasTrayContent: "<p>The counselor has left the chat. Thank you for reaching out. Please contact us again if you need more help.</p>",
    MessageInputDisabledReasonHold: "Please hold for a counselor.",
    AutoFirstMessage: "Incoming webchat contact",
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description: "Thank you for contacting Childline. To chat with a counselor, please type your name and select the Start Chat button.",
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
      },
      {
        type: "",
        label: "",
        attributes: {
          name: "helpline",
          value: "ChildLine South Africa (SA)",
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
