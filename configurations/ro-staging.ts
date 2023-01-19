import {
  PreEngagementConfig,
  Translations,
  Configuration,
  MapHelplineLanguage,
  ContactType
} from '../types';

const accountSid = 'ACbeffd85714fecd060d38aa4d84c3fc03';
const flexFlowSid = 'FO1991160f1788af24f3c207be5b16f893';
const defaultLanguage = 'en-US';
const captureIp = true;
const contactType: ContactType = 'ip';

const translations: Translations = {
  'en-US': {
    MessageInputDisabledReasonHold:
      "We'll transfer you now. Please hold for a counsellor.",
    EntryPointTagLine: 'Chat with us',
    PreEngagementDescription: "Let's get started",
    Today: 'Today',
    InputPlaceHolder: 'Type Message',
    WelcomeMessage: 'Welcome to Telefonul Copilului!',
    Yesterday: 'Yesterday',
    TypingIndicator: 'Counselor is typing',
    MessageCanvasTrayButton: 'Start New Chat',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Incoming webchat contact from',
    StartChat: 'Start Chat!',
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

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Telefonul Copilului Counsellor',
}

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
  memberDisplayOptions,
  captureIp,contactType,
};
