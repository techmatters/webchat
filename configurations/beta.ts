import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'AC6b99858a6faf7af1b572c83988b50eb1';
const flexFlowSid = 'FO57c22d5dfc7a18dcada507aa70ca0cb3';
const defaultLanguage = 'en-US';
const captureIp = true;

const translations: Translations = {
  'ar': {
    MessageCanvasTrayContent: "<p dir='rtl'>المستشار غادر الدردشة. شكرا لك على التواصل. يرجى الاتصال بنا مرة أخرى إذا كنت بحاجة إلى مزيد من المساعدة.</p>"
  },
  'el': {
    MessageCanvasTrayContent: "<p>Ο σύμβουλος εγκατέλειψε τη συνομιλία. Σας ευχαριστούμε που επικοινωνήσατε. Παρακαλώ επικοινωνήστε μαζί μας ξανά εάν χρειάζεστε περισσότερη βοήθεια.</p>"
  },
  'en-US': {
    WelcomeMessage: "Welcome to Aselo!",
    MessageCanvasTrayContent: "<p>The counsellor has left the chat. Thank you for reaching out. Please contact us again if you need more help.</p>",
    MessageInputDisabledReasonHold: "Please hold for a counsellor.",
    AutoFirstMessage: "Incoming webchat contact from",
  },
  'es': {
    EntryPointTagline: "Chatea con nosotros",
    MessageCanvasTrayButton: "EMPEZAR NUEVO CHAT",
    InvalidPreEngagementMessage: "Los formularios previos al compromiso no se han establecido y son necesarios para iniciar el chat web. Por favor configúrelos ahora en la configuración.",
    InvalidPreEngagementButton: "Aprende más",
    PredefinedChatMessageAuthorName: "Bot",
    PredefinedChatMessageBody: "¡Hola! ¿Cómo podemos ayudarte hoy?",
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

    BotGreeting: "¿Cómo puedo ayudar?",
    WelcomeMessage: "¡Bienvenido a Aselo!",
    MessageCanvasTrayContent: "<p>El consejero abandonó el chat. Gracias por contactarnos. Por favor contáctenos nuevamente si necesita más ayuda.</p>",
  },
  'da': {
    MessageCanvasTrayContent: "<p>Rådgiveren har forladt chatten. Tak, fordi du nåede ud. Kontakt os igen, hvis du har brug for mere hjælp.</p>",
  },
  'it': {
    MessageCanvasTrayContent: "<p>Il consulente ha lasciato la chat. Grazie per averci contattato. Vi preghiamo di contattarci nuovamente se avete bisogno di ulteriore aiuto.</p>"
  },
  'km': {
    MessageCanvasTrayContent: "<p>អ្នកផ្តល់យោបល់បានចាកចេញពីការជជែក។ សូមអរគុណចំពោះការឈានទៅដល់។ សូមទាក់ទងមកយើងម្តងទៀតប្រសិនបើអ្នកត្រូវការជំនួយបន្ថែម។</p>"
  },
  'sv': {
    MessageCanvasTrayContent: "<p>Rådgivaren har lämnat chatten. Tack för att du når ut. Kontakta oss igen om du behöver mer hjälp.</p>"
  }
};

const preEngagementConfig: PreEngagementConfig = {
  description: "Let's get started",
  fields:
    [{
      label: "What is your helpline?",
      type: "SelectItem",
      attributes: {
        name: "helpline",
        required: true,
        readOnly: false
      },
      options: 
      [
        {
          value: "Select helpline",
          label: "Select helpline",
          selected: true
        },
        {
          value: "Børns Vilkår (DK)",
          label: "Børns Vilkår (DK)",
          selected: false
        },
        {
          value: "Childhelp (US)",
          label: "Childhelp (US)",
          selected: false
        },
        {
          value: "CHILDLINE India (IN)",
          label: "CHILDLINE India (IN)",
          selected: false
        },
        {
          value: "Childline South Africa (SA)",
          label: "Childline South Africa (SA)",
          selected: false
        },
        {
          value: "ChildLine Zambia (ZM)",
          label: "ChildLine Zambia (ZM)",
          selected: false
        },
        {
          value: "Child Helpline Cambodia (KH)",
          label: "Child Helpline Cambodia (KH)",
          selected: false
        },
        {
          value: "Jordan River 110 (JO)",
          label: "Jordan River 110 (JO)",
          selected: false
        },
        {
          value: "SMILE OF THE CHILD (GR)",
          label: "SMILE OF THE CHILD (GR)",
          selected: false
        },
        {
          value: "Telefono Azzurro (IT)",
          label: "Telefono Azzurro (IT)",
          selected: false
        },
        {
          value: "BRIS (SE)",
          label: "BRIS (SE)",
          selected: false
        },
        {
          value: "2NDFLOOR (US)",
          label: "2NDFLOOR (US)",
          selected: false
        },
        {
          value: "Palo Alto Testing (Text)",
          label: "Palo Alto Testing (Text)",
          selected: false
        }
      ]
    }],
  submitLabel: "Let's chat!"
};

const mapHelplineLanguage: MapHelplineLanguage = helpline => {
  switch (helpline) {
    case 'Børns Vilkår (DK)':
      return 'da';
    case 'BRIS (SE)':
      return 'sv';
    case 'Child Helpline Cambodia (KH)':
      return 'km';
    case 'Jordan River 110 (JO)':
      return 'ar';
    case 'Palo Alto Testing (Text)':
      return 'en-US';
    case 'SMILE OF THE CHILD (GR)':
      return 'el';
    case 'Telefono Azzurro (IT)':
      return 'it';
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
  captureIp,
};
