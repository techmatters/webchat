import {PreEngagementConfig,Translations,Configuration,MapHelplineLanguage,ContactType} from '../types'

const accountSid = 'AC6ca34b61e7bf2d7cf8b8ca24e7efe65f';
const flexFlowSid = 'FO11691bbc019d7c4c4b9229fedc77961d';
const defaultLanguage = 'es-CL';
const captureIp = true;
const contactType: ContactType = 'email';

const preEngagementConfig: PreEngagementConfig = {
  description: "Bievenido a Línea Libre",
  fields:
    [
      {
        type: "InputItem",
        label: "Email",
        attributes: {
          name: "contactIdentifier",
          type: "email",
          placeholder: "Email",
          required: true,
        },

      },
      {
        type: "InputItem",
        label: "Edad",
        attributes: {
          name: "age",
          type: "text",
          placeholder: "Edad",
          required: true,
        },

      },
      {
        label: '¿Cuál es tu género?',
        type: 'SelectItem',
        attributes: {
          name: 'gender',
          required: true,
          readOnly: false,
        },
        options: [
          {
            value: 'Masculino',
            label: 'Masculino',
            selected: true,
          },
          {
            value: 'Femenino',
            label: 'Femenino',
            selected: false,
          },
          {
            value: 'Otro',
            label: 'Otro',
            selected: false,
          },
          {
            value: 'Prefiero no decir',
            label: 'Prefiero no decir',
            selected: false,
          },
        ],
      },
  ],
  submitLabel: 'Comenzar Nuevo Chat!',
};

const translations: Translations = {
  'en-US': {
    WelcomeMessage: 'Welcome to  Línea Libre',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold:
      "Thank you very much for this information. We'll transfer you now. Please hold for a practitioner.",
    AutoFirstMessage: 'Incoming webchat contact from',
    TypingIndicator: 'Counselor is typing',
    StartChat: 'Start Chat!',
    MessageCanvasTrayButton: 'Start New Chat',
  },
  'es-CL': {
    WelcomeMessage: "¡Bienvenido a Línea Libre!",
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold:
      "Muchas gracias por la información. Lo transferiremos ahora. Por favor espere for un agente.",
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
  contactType,
};
