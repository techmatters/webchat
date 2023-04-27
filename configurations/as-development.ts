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

import type { Translations, Configuration, MapHelplineLanguage } from '../types';
import { PreEngagementFormDefinition, EMAIL_PATTERN } from '../src/pre-engagement-form';

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
    PreEngagementDescription: `Let's get started`,
    WhatIsYourHelpline: 'What is your helpline?',
    SelectHelpline: 'Select helpline',
    FakeHelpline: 'Fake Helpline',
    LetsChat: "Let's chat!",
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

    // Needs to be translated
    WhatIsYourHelpline: 'What is your helpline?',
    SelectHelpline: 'Select helpline',
    FakeHelpline: 'Fake Helpline',
    LetsChat: "Let's chat!",

    WelcomeMessage: '¡Bienvenido a Aselo!',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: '',
  },
  dk: {
    MessageCanvasTrayContent: '',
    AutoFirstMessage: '',
  },
};

const preEngagementConfig: PreEngagementFormDefinition = {
  description: '<strong>A highlighted text</strong> and <a href="https://www.redpapaz.org/wp-content/uploads/2019/02/Politica_de_Tratamiento_de_Informacion_-_Red_PaPaz.pdf">terms and conditions</a>',
  submitLabel: 'LetsChat',
  fields: [
    {
      type: 'input-text',
      name: 'name',
      label: 'First Name',
      placeholder: 'John',
      required: true,
    },
    {
      type: 'input-text',
      name: 'email',
      label: 'Email',
      required: 'Email is required',
      pattern: EMAIL_PATTERN,
    },
    {
      type: 'select',
      name: 'continent',
      label: 'Continent',
      defaultValue: 'Europe',
      options: [
        { value: '', label: '' },
        { value: 'North America', label: 'North America' },
        { value: 'South America', label: 'South America' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Africa', label: 'Africa' },
        { value: 'Oceania', label: 'Oceania' },
        { value: 'Asia', label: 'Asia' },
      ],
    },
    {
      type: 'dependent-select',
      dependsOn: 'continent',
      name: 'country',
      label: 'Country',
      required: true,
      options: {
        'North America': [
          { value: '', label: '' },
          { value: 'Canada', label: 'Canada' },
          { value: 'USA', label: 'USA' },
          { value: 'Mexico', label: 'Mexico' },
        ],
        'South America': [
          { value: '', label: '' },
          { value: 'Chile', label: 'Chile' },
          { value: 'Argentina', label: 'Argentina' },
          { value: 'Brazil', label: 'Brazil' },
          { value: 'Colombia', label: 'Colombia' },
        ],
        Europe: [
          { value: '', label: '' },
          { value: 'Spain', label: 'Spain' },
          { value: 'Portugal', label: 'Portugal' },
          { value: 'France', label: 'France' },
          { value: 'Ireland', label: 'Ireland' },
          { value: 'UK', label: 'UK' },
          { value: 'Germany', label: 'Germany' },
          { value: 'Italy', label: 'Italy' },
        ],
        Africa: [
          { value: '', label: '' },
          { value: 'Nigeria', label: 'Nigeria' },
          { value: 'South Africa', label: 'South Africa' },
          { value: 'Egypt', label: 'Egypt' },
          { value: 'Ethiopia', label: 'Ethiopia' },
          { value: 'Zambia', label: 'Zambia' },
        ],
        Oceania: [
          { value: '', label: '' },
          { value: 'Australia', label: 'Australia' },
          { value: 'New Zealand', label: 'New Zealand' },
        ],
        Asia: [
          { value: '', label: '' },
          { value: 'Japan', label: 'Japan' },
          { value: 'China', label: 'China' },
          { value: 'South Korea', label: 'South Korea' },
        ],
      },
    },
  ],
};

const closedHours: PreEngagementFormDefinition = {
  description: "We're closed at the moment. Operating hours are 8am-6pm",
  fields: [],
};

const holidayHours: PreEngagementFormDefinition = {
  description: 'We are closed because it is a holiday. Please come back tomorrow',
  fields: [],
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
const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Counsellor',
};

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
  memberDisplayOptions
};
