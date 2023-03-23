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
  ContactType
} from '../types';

const accountSid = 'ACfb0ccf10880289d67f5c4e85ae26402b';
const flexFlowSid = 'FOd69e1f3020fd621d4bd9d4be833d8a19';
const defaultLanguage = 'en-MT';
const captureIp = true;
const contactType: ContactType = 'ip';

const translations: Translations = {
  'en-MT': {
    MessageInputDisabledReasonHold:
      "We'll transfer you now. Please hold for a support mentor.",
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
    MessageInputDisabledReasonHold:
      "Ha nittrasferuk lil wieħed mis-Support Mentors tagħna.",
    EntryPointTagLine: 'Chat magħna',
    PreEngagementDescription: "Ejja nibdew",
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
      MessageInputDisabledReasonHold:
        'Зв\'яжемо тебе із нашим консультантом, з яким ти зможеш поговорити.',
      EntryPointTagLine: 'Поспілкуйся з нами в чаті',
      PreEngagementDescription: 'Давайте розпочнемо',
      Today: 'Сьогодні',
      InputPlaceHolder: "Введіть повідомлення",
      WelcomeMessage: 'Привіт, це Блакитна Лінія!',
      Yesterday: 'вчора',
      TypingIndicator: 'набір тексту...',
      MessageCanvasTrayButton: 'Почати чат',
      MessageCanvasTrayContent: '',
      AutoFirstMessage: 'Вхідний чат',
      StartChat: 'Почати чат!',
  },
};

const preEngagementConfig: PreEngagementConfig = {
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
        type: "InputItem",
        label: "Nickname/Laqam/нікнейм",
        attributes: {
          name: "nickname",
          type: "text",
          placeholder: "Guest's name. Please enter only your name.",
          required: true,
        }
    },
    {
      label: 'Select your Age/Età/літа',
      type: 'SelectItem',
      attributes: {
        name: 'age',
        required: true,
        readOnly: false,
      },
      options: [
        {
          value: "",
          label: ""
        },
        {
          value: "Unborn",
          label: "Unborn"
        },
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        },
        {
          value: "6",
          label: "6"
        },
        {
          value: "7",
          label: "7"
        },
        {
          value: "8",
          label: "8"
        },
        {
          value: "9",
          label: "9"
        },
        {
          value: "10",
          label: "10"
        },
        {
          value: "11",
          label: "11"
        },
        {
          value: "12",
          label: "12"
        },
        {
          value: "13",
          label: "13"
        },
        {
          value: "14",
          label: "14"
        },
        {
          value: "15",
          label: "15"
        },
        {
          value: "16",
          label: "16"
        },
        {
          value: "17",
          label: "17"
        },
        {
          value: "18",
          label: "18"
        },
        {
          value: "19",
          label: "19"
        },
        {
          value: "20",
          label: "20"
        },
        {
          value: "21",
          label: "21"
        },
        {
          value: "22",
          label: "22"
        },
        {
          value: "23",
          label: "23"
        },
        {
          value: "24",
          label: "24"
        },
        {
          value: "25",
          label: "25"
        },
        {
          value: ">25",
          label: ">25"
        },
        {
          value: "Unknown",
          label: "Unknown"
        },
        {
          value: "Other",
          label: "Other"
        }
      ],
    },
    {
      label: 'Select your gender/sess/Стать',
      type: 'SelectItem',
      attributes: {
        name: 'gender',
        required: true,
        readOnly: false,
      },
      options: [
        {
          value: 'female',
          label: 'Female/Mara/Жінка',
          selected: false,
        },
        {
          value: 'male',
          label: 'Male/Raġel/Чоловік',
          selected: false,
        },
        {
          value: 'other',
          label: 'Others/Oħrajn/Інші',
          selected: false,
        },
        {
          value: 'notSay',
          label: 'Rather not say/Ma nixtieqx naghti risposta/Не хочу відповідати',
          selected: false,
        },
      ],
    },
    {
      label: 'How are you feeling/tħossok/почуття',
      type: 'SelectItem',
      attributes: {
        name: 'gender',
        required: true,
        readOnly: false,
      },
      options: [
        {
          value: 'happy',
          label: 'Happy/Ferħan/Щасливий',
          selected: false,
        },
        {
          value: 'confused',
          label: 'Confused/Konfuż/Збентежений',
          selected: false,
        },
        {
          value: 'angry',
          label: 'Angry/Rrabjat/Злий',
          selected: false,
        },
        {
          value: 'shocked',
          label: 'Shocked/Ixxukkjat/Шокований',
          selected: false,
        },
        {
          value: 'scared',
          label: 'Scared/Begħzan/Переляканий',
          selected: false,
        },
        {
          value: 'uncertain',
          label: 'Uncertain/Inċert/Розгублений',
          selected: false,
        },
      ],
    },
  ],
  submitLabel: 'Start Chat!',
};

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Support Mentor',
}

const mapHelplineLanguage: MapHelplineLanguage = helpline => {
  switch (helpline) {
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
  memberDisplayOptions,
  captureIp,contactType
};
