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
const contactType: ContactType = 'email';

const preEngagementConfig: PreEngagementFormDefinition = {
  description: 'WelcomeMessage',
  submitLabel: 'StartChat',
  fields: [
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
      type: 'input-text',
      name: 'age',
      label: 'Edad',
      placeholder: 'Edad',
      required: true,
    },
    {
      type: 'select',
      name: 'gender',
      label: 'Gender',
      defaultValue: 'Masculino',
      required: true,
      options: [
        { value: 'Masculino', label: 'Masculino' },
        { value: 'Femenino', label: 'Femenino' },
        { value: 'Otro', label: 'Otro' },
        { value: 'Prefiero no decir', label: 'PrefieroNoDecir' },
      ],
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
    Edad: 'Edad',

    // Needs to be translated
    Gender: '¿Cuál es tu género?',
    Masculino: 'Masculino',
    Femenino: 'Femenino',
    Otro: 'Otro',
    PrefieroNoDecir: 'Prefiero no decir',
  },
  'es-CL': {
    WelcomeMessage: '¡Bienvenido a Línea Libre!',
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

    // NEEDS TO BE TRANSLATED
    Email: 'Email',
    Edad: 'Edad',
  },
};

const memberDisplayOptions = {
  yourDefaultName: 'Usted',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Guía',
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
