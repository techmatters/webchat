import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'ACc59300c7ca018e8652e4d6d86c2d50e6';
const flexFlowSid = 'FObb9dfe97f1c59f455ab01811bec74cd5';
const defaultLanguage = 'en-US';
const captureIp = true;

const translations: Translations = {
  'en-US': {
    WelcomeMessage: "Welcome to ChildLine Zambia!",
    MessageCanvasTrayContent: "<p>The counselor has left the chat. Thank you for reaching out. Please contact us again if you need more help.</p>",
    MessageInputDisabledReasonHold: "Please hold for a counselor.",
    AutoFirstMessage: "Incoming webchat contact",
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description: "Let's get started",
  fields:
    [
      {
        // shows nothing but forces the form to show up
        type: "",
        label: "",
        attributes: {
          name: "helpline",
          value: "ChildLine Zambia (ZM)",
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

export const config: Configuration = {
  accountSid,
  flexFlowSid,
  defaultLanguage,
  translations,
  preEngagementConfig,
  mapHelplineLanguage,
  captureIp,
};
