/**
 * Copyright (C) 2021-2023 Technology Matters
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */

import { Translations, Configuration, MapHelplineLanguage, ContactType } from '../types';
import { PreEngagementFormDefinition, EMAIL_PATTERN } from '../src/pre-engagement-form';

const accountSid = 'AC6ca34b61e7bf2d7cf8b8ca24e7efe65f';
const flexFlowSid = 'FO005120845e65f5d54a17b8ab6d0bf3f3';
const defaultLanguage = 'es-CL';
const captureIp = true;
const checkOpenHours = true;
const contactType: ContactType = 'email';

const closedHours: PreEngagementFormDefinition = {
  description:
    'Hola, bienvenid@ a Línea Libre. Gracias por escribirnos. Recibimos tu mensaje exitosamente. En estos comentos nos encontramos fuera del horario de atención. Te recordamos que éste es de lunes a viernes entre las 10:00 y las 22:00 hrs. Nuestr@s psicólog@s estarán disponibles para ti una vez iniciada la jornada. En caso de tener alguna emergencia, te sugerimos llamar a: Salud Responde 600 360 7777 - Fono niñ@s 147 - Fono familia 149.',
  fields: [],
};

const holidayHours: PreEngagementFormDefinition = {
  description: 'Hola, bienvenid@ a Línea Libre. Gracias por escribirnos. Recibimos tu mensaje exitosamente. Por ser feriado legal, nuestros psicólog@s no se encuentran atendiendo, pero estarán disponibles para ti una vez que retomemos el horario habitual. Te recordamos que éste es de lunes a viernes entre las 10:00 y las 22:00 hrs. En caso de tener alguna emergencia, te sugerimos llamar a: Salud Responde 600 360 7777 - Fono niñ@s 147 - Fono familia 149.',
  fields: [],
};

const preEngagementConfig: PreEngagementFormDefinition = {
  description: 'WelcomeMessage',
  submitLabel: 'StartChat',
  fields: [
    {
      type: 'input-text',
      name: 'friendlyName',
      label: 'Nickname',
      placeholder: 'Nickname',
      required: true,
    },
    {
      type: 'input-text',
      name: 'contactIdentifier',
      label: 'Email',
      required: true,
      placeholder: 'Email',
      pattern: {
        value: EMAIL_PATTERN,
        message: 'FieldValidationInvalidEmail',
      },
    },
    {
      label: 'Edad',
      type: 'select',
      name: 'age',
      required: true,
      defaultValue: '',
       options: [
         {
          value: "",
          label: ""
        },
        {
          value: "<5",
          label: "<5"
        }
       ],
     },  
    {
      type: 'select',
      name: 'gender',
      label: 'Gender',
      defaultValue: '',
      required: true,
      options: [
        { value: 'Masculino', label: 'Masculino' },
        { value: 'Femenino', label: 'Femenino' },
        { value: 'Otro', label: 'Otro' },
        { value: 'Prefiero no decir', label: 'PrefieroNoDecir' },
      ],
    },
    {
      type: 'checkbox',
      name: 'termsAndConditions',
      label: 'He leído y acepto los <a href="https://www.linealibre.cl/wp-content/uploads/2020/11/TERMINOS-Y-CONDICIONES-DE-USO-Y-POLITICA-DE-PRIVACIDAD-LL.pdf">términos y condiciones</a>',
      required: {
        value: true,
        message: 'You need to accept the terms and conditions',
      },
    },
  ],
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
    Email: 'Email',
    Edad: 'Age',
    Gender: 'What is your gender',
    Masculino: 'Male',
    Femenino: 'Female',
    Otro: 'Other',
    PrefieroNoDecir: 'Prefer not to say',
    Nickname: 'Nickname',
  },
  'es-CL': {
    WelcomeMessage: '¡Bienvenid@ a Línea Libre!',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold:
      'Muchas gracias por la información. Lo transferiremos ahora. Por favor espere for un agente.',
    AutoFirstMessage: 'Nuevo contacto del webchat de',
    TypingIndicator: '{0} está escribiendo ... ',
    StartChat: 'Comenzar Nuevo Chat!',
    MessageCanvasTrayButton: 'Comenzar Nuevo Chat',
    EntryPointTagline: 'Chatea con nosotros',
    InvalidPreEngagementMessage:
      'Los formularios previos al compromiso no se han establecido y son necesarios para iniciar el chat web. Por favor configúrelos ahora en la configuración.',
    InvalidPreEngagementButton: 'Aprende más',
    PredefinedChatMessageAuthorName: 'Bot',
    PredefinedChatMessageBody: '¡Hola! ¿Cómo podemos ayudarte hoy?',
    InputPlaceHolder: 'Escribe un mensaje',
    Read: 'Visto',
    MessageSendingDisabled: 'El envío de mensajes ha sido desactivado',
    Today: 'HOY',
    Yesterday: 'AYER',
    Save: 'GUARDAR',
    Reset: 'RESETEAR',
    MessageCharacterCountStatus: '{{currentCharCount}} / {{maxCharCount}}',
    SendMessageTooltip: 'Enviar Mensaje',
    FieldValidationRequiredField: 'Campo requerido',
    FieldValidationInvalidEmail: 'Por favor provea una dirección válida de email',
    PreEngagementDescription: 'Comencemos',
    BotGreeting: '¿Cómo puedo ayudar?',
    Gender: '¿Cuál es tu género?',
    Masculino: 'Masculino',
    Femenino: 'Femenino',
    Otro: 'Otro',
    PrefieroNoDecir: 'Prefiero no decir',
    Email: 'Email',
    Edad: 'Edad',
    Nickname: 'Nickname',
  },
};

const memberDisplayOptions = {
  yourDefaultName: 'Usted',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Psicólog@',
};

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
