import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'ACbdbee34ef7d099e71cf095d540ff3270';
const flexFlowSid = 'FO9d20dbe99abbc3b9ad7709f961b0fe95';
const defaultLanguage = 'hu-HU';
const captureIp = false;

const translations: Translations = {
    'en-US': {
      MessageInputDisabledReasonHold:
        "We'll transfer you now. Please hold for a counsellor.",
      EntryPointTagLine: 'Chat with us',
      PreEngagementDescription: "Let's get started",
      Today: 'Today',
      InputPlaceHolder: 'Type Message',
      WelcomeMessage: 'Welcome to ChildLine Zambia!',
      Yesterday: 'Yesterday',
      TypingIndicator: 'Counselor is typing',
      MessageCanvasTrayButton: 'Start New Chat',
      MessageCanvasTrayContent: '',
      AutoFirstMessage: 'Incoming webchat contact from',
      StartChat: 'Start Chat!',
    },
    'hu-HU': {
      MessageInputDisabledReasonHold:
        'Továbbítunk egy ügyelőhöz, akivel beszélgetni tudsz.',
      EntryPointTagLine: 'Csetelj velünk',
      PreEngagementDescription: 'Kezdjük el',
      Today: 'Ma',
      InputPlaceHolder: 'Taipeni ilyashi',
      WelcomeMessage: 'Szia, ez itt a Kék Vonal!',
      Yesterday: 'Tegnap',
      TypingIndicator: 'gépelés...',
      MessageCanvasTrayButton: 'Chat indítása',
      MessageCanvasTrayContent: '',
      AutoFirstMessage: 'Bejövő chat',
      StartChat: 'Chat indítása!',
    },
    'ukr-HU': {
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
    'ru-HU': {
      MessageInputDisabledReasonHold:
        "Свяжем тебя с нашим консультантом, с которым ты сможешь поговорить.",
      EntryPointTagLine: 'Пообщайся с нами в чате',
      PreEngagementDescription: 'Давайте начнем',
      Today: 'Сегодня',
      InputPlaceHolder: 'Введите сообщение',
      WelcomeMessage: 'Привет, это Синяя Линия!',
      Yesterday: 'Вчерашний день',
      TypingIndicator: "набор текста...",
      MessageCanvasTrayButton: 'Привет, это Синяя Линия!',
      MessageCanvasTrayContent: '',
      AutoFirstMessage: 'Входящий чат',
      StartChat: 'Начать чат!',
    }
  };

const preEngagementConfig: PreEngagementConfig = {
    description: "Kezdjük el",
    fields: [
      {
        label: 'Válaszd ki a nyelved',
        type: 'SelectItem',
        attributes: {
          name: 'language',
          required: true,
          readOnly: false,
        },
        options: [
          {
            value: 'hu-HU',
            label: '1. Magyar',
            selected: true,
          },
          {
            value: 'ukr-HU',
            label: '2. Ukrán',
            selected: false,
          },
          {
            value: 'ru-HU',
            label: '3. Orosz',
            selected: false,
          }
        ],
      },
    ],
    submitLabel: 'Chat indítása',
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
  theirDefaultName: 'Kék Vonal',
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
