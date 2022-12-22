import {
  PreEngagementConfig,
  Translations,
  Configuration,
  MapHelplineLanguage,
  ContactType
} from './types';

const accountSid = 'ACfb0ccf10880289d67f5c4e85ae26402b';
const flexFlowSid = 'FOd69e1f3020fd621d4bd9d4be833d8a19';
const defaultLanguage = 'en-US';
const captureIp = true;
const contactType: ContactType = 'ip';

const translations: Translations = {
  'en-US': {
    MessageInputDisabledReasonHold:
      "We'll transfer you now. Please hold for a support mentor.",
    EntryPointTagLine: 'Chat with us',
    PreEngagementDescription: "Let's get started",
    Today: 'Today',
    InputPlaceHolder: 'Type Message',
    WelcomeMessage: 'Welcome to Kellimni!',
    Yesterday: 'Yesterday',
    TypingIndicator: 'Support mentor is typing',
    MessageCanvasTrayButton: 'Start New Chat',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Incoming webchat contact from',
    StartChat: 'Start Chat!',
  },
  'mt-MT': {
    MessageInputDisabledReasonHold:
      "Ha nittrasferuk lil wieħed mis-Support Mentors tagħna.",
    EntryPointTagLine: 'Chat magħna',
    PreEngagementDescription: "Ejja nibdew",
    Today: 'Illum',
    InputPlaceHolder: 'Tip Messaġġ',
    WelcomeMessage: 'Merħba lil Kellimni!',
    Yesterday: 'Ilbieraħ',
    TypingIndicator: 'Il support mentor qed jittajpja',
    MessageCanvasTrayButton: 'Ibda Chat Ġdida',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Incoming webchat contact from',
    StartChat: 'Ibda Chat!',
  },
  'ukr-MT': {
      MessageInputDisabledReasonHold:
        'Зв\'яжемо тебе із нашим консультантом, з яким ти зможеш поговорити.',
      EntryPointTagLine: 'Поспілкуйся з нами в чаті',
      PreEngagementDescription: 'Давайте розпочнемо',
      Today: 'Сьогодні',
      InputPlaceHolder: "Введіть повідомлення",
      WelcomeMessage: 'Привіт, це Блакитна Лінія!',
      Yesterday: 'вчора',
      TypingIndicator: 'набір тексту...',
      MessageCanvasTrayButton: 'Почати чат',
      MessageCanvasTrayContent: '',
      AutoFirstMessage: 'Вхідний чат',
      StartChat: 'Почати чат!',
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
          value: 'mt-MT',
          label: '2. Maltese',
          selected: false,
        },
        {
          value: 'ukr-MT',
          label: '3. Ukrainian',
          selected: false,
        },
      ],
    },
    {
        type: "InputItem",
        label: "Nickname/Laqam/нікнейм",
        attributes: {
          name: "friendlyName",
          type: "text",
          placeholder: "Guest's name. Please enter only your name.",
          required: true,
        }
    },
  ],
  submitLabel: 'Start Chat!',
};

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Support Mentor',
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
  captureIp,contactType
};
