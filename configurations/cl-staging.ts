import {PreEngagementConfig,Translations,Configuration,MapHelplineLanguage} from './types'

const accountSid = 'AC6ca34b61e7bf2d7cf8b8ca24e7efe65f';
const flexFlowSid = 'FO11691bbc019d7c4c4b9229fedc77961d';
const defaultLanguage = 'es-ES';
const captureIp = true;

const preEngagementConfig: PreEngagementConfig = {
  description: "Comencemos",
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
  submitLabel: 'Comenzar Nuevo Chat!',
};

const translations: Translations = {
  'en-US': {
    WelcomeMessage: 'Welcome to the Te Guio Helplines',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold:
      "Thank you very much for this information. We'll transfer you now. Please hold for a practitioner.",
    AutoFirstMessage: 'Incoming webchat contact from',
    TypingIndicator: 'Counselor is typing',
    StartChat: 'Start Chat!',
    MessageCanvasTrayButton: 'Start New Chat',
  },
  'es-ES': {
    WelcomeMessage: "¡Bienvenido a Te Guío!",
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold:
      "Muchas gracias por la información. Lo transferiremos ahora. Por favor espere for un guía.",
    AutoFirstMessage: 'Nuevo contacto del webchat de',
    TypingIndicator: "{0} está escribiendo ... ",
    StartChat: 'Comienza a Chatear!',
    MessageCanvasTrayButton: "Comenzar Nuevo Chat",
    EntryPointTagline: "Chatea con nosotros",
    InvalidPreEngagementMessage: "Los formularios previos al compromiso no se han establecido y son necesarios para iniciar el chat web. Por favor configúrelos ahora en la configuración.",
    InvalidPreEngagementButton: "Aprende más",
    PredefinedChatMessageAuthorName: "Bot",
    PredefinedChatMessageBody: "¡Hola! ¿Cómo podemos ayudarte hoy?",
    InputPlaceHolder: "Escribe un mensaje",
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
    BotGreeting: "¿Cómo puedo ayudar?",


  }
};

const memberDisplayOptions = {
  yourDefaultName: 'Usted',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Guía',
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
