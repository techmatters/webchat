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

import {
  PreEngagementConfig,
  Translations,
  Configuration,
  MapHelplineLanguage,
  ContactType,
  LocalizedFormAttributes,
} from '../types';

const accountSid = 'ACfb0ccf10880289d67f5c4e85ae26402b';
const flexFlowSid = 'FOd69e1f3020fd621d4bd9d4be833d8a19';
const defaultLanguage = 'en-MT';
const captureIp = true;
const contactType: ContactType = 'ip';

const translations: Translations = {
  'en-MT': {
    MessageInputDisabledReasonHold: "We'll transfer you now. Please hold for a support mentor.",
    EntryPointTagLine: 'Chat with us',
    PreEngagementDescription: "Let's get started",
    Today: 'Today',
    InputPlaceHolder: 'Type Message',
    WelcomeMessage: 'Welcome to Kellimni!',
    Yesterday: 'Yesterday',
    TypingIndicator: 'Support mentor is typing',
    MessageCanvasTrayButton: 'Start New Chat',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Incoming webchat contact from',
    StartChat: 'Start Chat!',
  },
  'mt-MT': {
    MessageInputDisabledReasonHold: 'Ha nittrasferuk lil wieħed mis-Support Mentors tagħna.',
    EntryPointTagLine: 'Chat magħna',
    PreEngagementDescription: 'Ejja nibdew',
    Today: 'Illum',
    InputPlaceHolder: 'Tip Messaġġ',
    WelcomeMessage: 'Merħba lil Kellimni!',
    Yesterday: 'Ilbieraħ',
    TypingIndicator: 'Il support mentor qed jittajpja',
    MessageCanvasTrayButton: 'Ibda Chat Ġdida',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Incoming webchat contact from',
    StartChat: 'Ibda Chat!',
  },
  'ukr-MT': {
    MessageInputDisabledReasonHold: "Зв'яжемо тебе із нашим консультантом, з яким ти зможеш поговорити.",
    EntryPointTagLine: 'Поспілкуйся з нами в чаті',
    PreEngagementDescription: 'Давайте розпочнемо',
    Today: 'Сьогодні',
    InputPlaceHolder: 'Введіть повідомлення',
    WelcomeMessage: 'Привіт, це Блакитна Лінія!',
    Yesterday: 'вчора',
    TypingIndicator: 'набір тексту...',
    MessageCanvasTrayButton: 'Почати чат',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Вхідний чат',
    StartChat: 'Почати чат!',
  },
};

const preEngagementConfig: LocalizedFormAttributes = {
  'en-MT': {
    description: "Let's get started",
    fields: [
      {
        label: 'Select your language',
        type: 'SelectItem',
        attributes: {
          name: 'language',
          required: true,
          readOnly: false,
        },
        options: [
          {
            value: 'en-MT',
            label: '1. English',
            selected: true,
          },
          {
            value: 'mt-MT',
            label: '2. Maltese',
            selected: false,
          },
          {
            value: 'ukr-MT',
            label: '3. Ukrainian',
            selected: false,
          },
        ],
      },
      {
        type: 'InputItem',
        label: 'Nickname/Laqam/нікнейм',
        attributes: {
          name: 'nickname',
          type: 'text',
          placeholder: "Guest's name. Please enter only your name.",
          required: true,
        },
      },
    ],
    submitLabel: 'Start Chat!',
  },
};

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Support Mentor',
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
