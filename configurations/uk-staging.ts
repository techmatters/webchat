import {PreEngagementConfig,Translations,Configuration,MapHelplineLanguage} from './types'

const accountSid = 'AC542ee9a6613ce5ff976d075a3e3bd38d';
const flexFlowSid = 'FOfe2df2f82dd40be24d41347fff7c6f1c';
const defaultLanguage ='en-GB';
const captureIp = true;

const preEngagementConfig: PreEngagementConfig = {
  description: "Thank you for contacting us. To chat with a practitioner, please select the Start Chat button.",
  submitLabel: "Start Chat!"
};

const translations: Translations = {
  'en-GB': {
    WelcomeMessage: 'Welcome to the Revenge Porn and Report Harmful Content Helplines',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold: 
      "Thank you very much for this information. We'll transfer you now. Please hold for a practitioner.",
    AutoFirstMessage: 'Incoming webchat contact from',
    TypingIndicator: 'Counselor is typing',
    StartChat: 'Start Chat!',
    MessageCanvasTrayButton: 'Start New Chat',
  },
};

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Counsellor',
}

const mapHelplineLanguage: MapHelplineLanguage = (helpline) => {
  switch (helpline) {
    default:
      return defaultLanguage;
  }
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
