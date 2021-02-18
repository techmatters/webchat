import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'ACd8a2e89748318adf6ddff7df6948deaf';
const flexFlowSid = 'FO8c2d9c388e7feba8b08d06a4bc3f69d1';
const defaultLanguage = 'en-US';

const translations: Translations = {
  'en-US': {
    WelcomeMessage: "Welcome to Aselo!",
    MessageCanvasTrayContent:"",
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
    MessageCanvasTrayContent:"",
  },
  'dk': {
    MessageCanvasTrayContent:"",
  }
};

const preEngagementConfig: PreEngagementConfig = {
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
};

const mapHelplineLanguage: MapHelplineLanguage = helpline => {
  switch (helpline) {
    case 'Fake Helpline':
      return 'dk';
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
};
