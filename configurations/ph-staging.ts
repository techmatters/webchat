import {
  PreEngagementConfig,
  Translations,
  Configuration,
  MapHelplineLanguage,
} from './types';

const accountSid = 'ACa10989d583df770649051aee1430fce9';
const flexFlowSid = 'FO9c46399151d1c7161208997b94b8f488';
const defaultLanguage = 'en-US';
const captureIp = true;

const translations: Translations = {
  'en-US': {
    MessageInputDisabledReasonHold:
      "We'll transfer you now. Please hold for a counsellor.",
    EntryPointTagLine: 'Chat with us',
    PreEngagementDescription: "Let's get started",
    Today: 'Today',
    InputPlaceHolder: 'Type Message',
    WelcomeMessage: 'Welcome to eProtectKids!',
    Yesterday: 'Yesterday',
    TypingIndicator: 'Counselor is typing',
    MessageCanvasTrayButton: 'Start New Chat',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Incoming webchat contact from',
    StartChat: 'Start Chat!',
  },
  Filipino: {
    MessageInputDisabledReasonHold:
      'Ita-transfer ka namin sa isang helpline responder. Maaring pakihintay',
    EntryPointTagLine: 'Makipag-usap ka sa amin',
    PreEngagementDescription: 'Magsimula na tayo',
    Today: 'ngayon',
    InputPlaceHolder: 'I-type ang Mensahe',
    WelcomeMessage: 'welcome sa eProtectKids!',
    Yesterday: 'kahapon',
    TypingIndicator: 'Ang responder ay nagta-type',
    MessageCanvasTrayButton: 'Magsimula ng Bagong Chat',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: '',
    StartChat: 'Simulan ang Chat!',
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description: "Let's get started",
  fields: [
    {
      label: 'Select your language',
      type: 'SelectItem',
      attributes: {
        name: 'language',
        required: true,
        readOnly: false,
      },
      options: [
        {
          value: 'English',
          label: '1. English',
          selected: true,
        },
        {
          value: 'Filipino',
          label: '2. Filipino',
          selected: false,
        }
      ],
    },
  ],
  submitLabel: 'Start Chat!',
};

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'eProtectKids',
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
