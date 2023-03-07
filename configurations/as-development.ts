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

import type { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from '../types';

const accountSid = 'ACd8a2e89748318adf6ddff7df6948deaf';
const flexFlowSid = 'FO8c2d9c388e7feba8b08d06a4bc3f69d1';
const defaultLanguage = 'en-US';
const captureIp = true;
const checkOpenHours = true;
const contactType = 'ip';
const showEmojiPicker = true;

const translations: Translations = {
  'en-US': {
    WelcomeMessage: 'Welcome to Aselo!',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold: 'Please hold for a counselor.',
    AutoFirstMessage: 'Incoming webchat contact from',
  },
  es: {
    EntryPointTagline: 'Chatea con nosotros',
    MessageCanvasTrayButton: 'EMPEZAR NUEVO CHAT',
    InvalidPreEngagementMessage:
      'Los formularios previos al compromiso no se han establecido y son necesarios para iniciar el chat web. Por favor configúrelos ahora en la configuración.',
    InvalidPreEngagementButton: 'Aprende más',
    InputPlaceHolder: 'Escribe un mensaje',
    TypingIndicator: '{0} está escribiendo ... ',
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

    WelcomeMessage: '¡Bienvenido a Aselo!',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: '',
  },
  dk: {
    MessageCanvasTrayContent: '',
    AutoFirstMessage: '',
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description: "Let's get started",
  fields: [
    {
      label: 'What is your helpline?',
      type: 'SelectItem',
      attributes: {
        name: 'helpline',
        required: true,
        readOnly: false,
      },
      options: [
        {
          value: 'Select helpline',
          label: 'Select helpline',
          selected: true,
        },
        {
          value: 'Fake Helpline',
          label: 'Fake Helpline',
          selected: false,
        },
      ],
    },
  ],
  submitLabel: "Let's chat!",
};

const closedHours: PreEngagementConfig = {
  description: "We're closed at the moment. Operating hours are 8am-6pm",
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

const holidayHours: PreEngagementConfig = {
  description: 'We are closed because it is a holiday. Please come back tomorrow',
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

const mapHelplineLanguage: MapHelplineLanguage = (helpline) => {
  switch (helpline) {
    case 'Fake Helpline':
      return 'dk';
    default:
      return defaultLanguage;
  }
};

const blockedEmojis = [
  'beer',
  'beers',
  'wine_glass',
  'cocktail',
  'tropical_drink',
  'tumbler_glass',
  'smoking',
  'middle_finger',
  'wink',
  'stuck_out_tongue_winking_eye',
  'kissing_heart',
  'kissing',
  'kissing_closed_eyes',
  'kissing_smiling_eyes',
  'tongue',
  'eggplant',
  'peach',
  'dancers',
  'men-with-bunny-ears-partying',
  'women-with-bunny-ears-partying',
  'syringe',
  'pill',
];

export const config: Configuration = {
  accountSid,
  flexFlowSid,
  defaultLanguage,
  translations,
  preEngagementConfig,
  closedHours,
  holidayHours,
  checkOpenHours,
  mapHelplineLanguage,
  captureIp,
  contactType,
  showEmojiPicker,
  blockedEmojis,
};
