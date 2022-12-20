import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'ACbdbee34ef7d099e71cf095d540ff3270';
const flexFlowSid = 'FO9d20dbe99abbc3b9ad7709f961b0fe95';
const defaultLanguage = 'ukr-HU';
const captureIp = false;
const checkOpenHours = false;

const translations: Translations = {
    'en-US': {
      MessageInputDisabledReasonHold:
        "We'll transfer you now. Please hold for a counsellor.",
      EntryPointTagLine: 'Chat with us',
      PreEngagementDescription: "Let's get started",
      Today: 'Today',
      InputPlaceHolder: 'Type Message',
      WelcomeMessage: 'Welcome to Kék Vonal!',
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
      PreEngagementDescription: 'Kezdjük el-ok',
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
    description: "Kezdjük el-ok",
    fields: [
      {
        label: 'Válaszd ki a nyelved-ok',
        type: 'SelectItem',
        attributes: {
          name: 'language',
          required: true,
          readOnly: false,
        },
        options: [
          {
            value: 'ukr-HU',
            label: '1. Ukrán',
            selected: false,
          },
          {
            value: 'ru-HU',
            label: '2. Orosz',
            selected: false,
          }
        ],
      },
    ],
    submitLabel: 'Chat indítása',
  };

  const closedHours: PreEngagementConfig = {
  description: "Привіт, це Kék Vonal. Наразі усі наші оператори зайняті. Спілкуватися українською чи російською мовами ти можеш у вівторок і четвер з 16:00 до 20:00. Чекаємо твого дзвінка! \n\nПривет, это Kék Vonal. На данный момент все наши операторы заняты. Общаться на украинском или русском языке ты можешь во вторник и четверг с 16:00 до 20:00. Ждем твоего звонка!",
  fields: [
    {
      label: 'Hidden Field',
      type: 'InputField',
      attributes: {
        name: '',
        required: true,
        readOnly: true,
      },
    },
  ],

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
  checkOpenHours,
  closedHours,
};
