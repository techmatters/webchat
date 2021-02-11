import * as FlexWebChat from '@twilio/flex-webchat-ui';
import { Channel } from 'twilio-chat/lib/channel';
import { getUserIp } from './ip-tracker';

getUserIp();

type Translations = {
  [language: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  'en-US': {
    WelcomeMessage: "Welcome to Aselo!",
    MessageCanvasTrayContent: "",
    MessageInputDisabledReasonHold: "Please hold for a counselor.",
    AutoFirstMessage: "Incoming webchat contact",
  },
  'es': {
    EntryPointTagline: "Chatea con nosotros",
    MessageCanvasTrayButton: "EMPEZAR NUEVO CHAT",
    InvalidPreEngagementMessage: "Los formularios previos al compromiso no se han establecido y son necesarios para iniciar el chat web. Por favor configúrelos ahora en la configuración.",
    InvalidPreEngagementButton: "Aprende más",
    InputPlaceHolder: "Escribe un mensaje",
    TypingIndicator: "{0} está escribiendo ... ",
    Read: "Visto",
    MessageSendingDisabled: "El envío de mensajes ha sido desactivado",
    Today: "HOY",
    Yesterday: "AYER",
    Save: "GUARDAR",
    Reset: "RESETEAR",
    MessageCharacterCountStatus: "{{currentCharCount}} / {{maxCharCount}}",
    SendMessageTooltip: "Enviar Mensaje",
    FieldValidationRequiredField: "Campo requerido",
    FieldValidationInvalidEmail: "Por favor provea una dirección válida de email",

    PreEngagementDescription: "Comencemos",

    WelcomeMessage: "¡Bienvenido a Aselo!",
    MessageCanvasTrayContent: "",
  },
  'dk': {
    MessageCanvasTrayContent: "",
  }
}

const defaultLanguage = 'en-US';
const initialLanguage = defaultLanguage;

const appConfig = {
  accountSid:"ACd8a2e89748318adf6ddff7df6948deaf",
  flexFlowSid:"FO8c2d9c388e7feba8b08d06a4bc3f69d1",
  startEngagementOnInit: false,
  preEngagementConfig: {
    description: "Let's get started",
    fields:
      [{
        label: "What is your helpline?",
        type: "SelectItem",
        attributes:
        {
          name: "helpline",
          required: true,
          readOnly: false
        },
        options: [
          {
            value: "Select helpline",
            label: "Select helpline",
            selected: true
          },
          {
            value: "Fake Helpline",
            label: "Fake Helpline",
            selected: false
          },
        ]
      }],
    submitLabel: "Let's chat!"
  }
};

const mapHelplineLanguage = (helpline: string) => {
  switch (helpline) {
    case 'Fake Helpline':
      return 'dk';
    default:
      return defaultLanguage;
  }
}

const getChangeLanguageWebChat = (manager: FlexWebChat.Manager) => (language: string) => {
  const twilioStrings = { ...manager.strings }; // save the originals
  const setNewStrings = (newStrings: FlexWebChat.Strings) => (manager.strings = { ...manager.strings, ...newStrings });
  const translationErrorMsg = 'Could not translate, using default';
  
  try {
    if (language !== defaultLanguage && translations[language]) {
      setNewStrings({ ...twilioStrings, ...translations[defaultLanguage], ...translations[language] });
    } else {
      setNewStrings({ ...twilioStrings, ...translations[defaultLanguage] });
    }

    console.log('Translation OK');
  } catch (err) {
    window.alert(translationErrorMsg);
    console.error(translationErrorMsg, err);
    getChangeLanguageWebChat(manager)(defaultLanguage);
  }
}

type ChannelAndManagerFn = (channel: Channel, manager: FlexWebChat.Manager) => void;

const doWithChannel = (callback: ChannelAndManagerFn) => (manager: FlexWebChat.Manager) => {
  const { channelSid } = manager.store.getState().flex.session;
    manager
      .chatClient.getChannelBySid(channelSid)
      .then(channel => {
        callback(channel, manager);
      });
}

const unlockInput = (manager: FlexWebChat.Manager) => {
  const { user } = manager.chatClient;
  const { lockInput, ...attributes } = user.attributes as any;
  user.updateAttributes(attributes);
}

// TODO: we shouldn't need to cast a Channel to EventEmitter
type EventEmitter = {
  once: (eventName: string, listener: Function) => void;
};

const setListenerToUnlockInput = async (channel: Channel, manager: FlexWebChat.Manager) => {
  if (!channel) return;

  const cb = () => {
    // Re-enable input
    unlockInput(manager)
  }

  // User is not alone in the channel (possible cause to enter this case is page reload)
  const membersCount = await channel.getMembersCount();
  if (membersCount > 1) {
    cb();
    return;
  }
  
  // Adds an event listener that will run only once
  (channel as Channel & EventEmitter).once("memberJoined", () => {
    cb();
  });
}

const setChannelOnCreateWebChat = doWithChannel(setListenerToUnlockInput);

const setChannelAfterStartEngagement = doWithChannel((channel: Channel, manager: FlexWebChat.Manager) => {
  setListenerToUnlockInput(channel, manager);

  // Generate task by sending empty message (hidden from the UI above)
  channel.sendMessage(translations[initialLanguage].AutoFirstMessage);
})

export const initWebchat = () => FlexWebChat.createWebChat(appConfig).then(webchat => {
  const { manager } = webchat;
  if (manager.chatClient) console.log('>>>> User Attributes: ', { attributes : manager.chatClient.user.attributes });
  const changeLanguageWebChat = getChangeLanguageWebChat(manager);

  changeLanguageWebChat(initialLanguage);

  // If caller is waiting for a counselor to connect, disable input (default language)
  if (manager.chatClient) setChannelOnCreateWebChat(manager);

  // Disable greeting message as chatbot already includes one
  FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = undefined;

  // Set caller name to be 'You'  
  FlexWebChat.MessagingCanvas.defaultProps.memberDisplayOptions = {
    yourDefaultName: 'You',
    yourFriendlyNameOverride: false,
    theirFriendlyNameOverride: true,
  };

  // Hide message input and send button if disabledReason is not undefined
  FlexWebChat.MessageInput.Content.remove('textarea', {
    // if: props => manager.chatClient.user.attributes.lockInput,
    if: props => typeof FlexWebChat.MessagingCanvas.defaultProps.inputDisabledReason !== 'undefined',
  });

  // Hide first message ("AutoFirstMessage", sent to create a new task)
  FlexWebChat.MessageList.Content.remove('0');

  // Posting question from preengagement form as users first chat message
  FlexWebChat.Actions.on("afterStartEngagement", (payload) => {
    const { question, helpline } = payload.formData;

    // Here we might collect caller language (from a another preEngagement select)
    const helplineLanguage = mapHelplineLanguage(helpline);
    changeLanguageWebChat(helplineLanguage);

    setChannelAfterStartEngagement(manager);
  });

  // Render WebChat
  webchat.init();
});
