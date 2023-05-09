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

const accountSid = 'AC3ee873a0431086e5b1166db5f5e29860';
const flexFlowSid = 'FO0a4844fcc193072407dad94b76fcc94d';
const defaultLanguage = 'en-US';
const captureIp = true;
const checkOpenHours = true;
const contactType: ContactType = 'email';

const closedHours: PreEngagementFormDefinition = {
  description: "We're closed at the moment. Operating hours are 8am-6pm",
  fields: [],
};

const holidayHours: PreEngagementFormDefinition = {
  description: 'We are closed because it is a holiday. Please come back tomorrow',
  fields: [],
};

const preEngagementConfig: PreEngagementFormDefinition = {
  description: 'WelcomeMessage',
  submitLabel: 'StartChat',
  fields: [
    {
      type: 'input-text',
      name: 'firstName',
      label: 'Name',
      placeholder: 'Name',
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
      label: 'Age',
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
        },
        {
          value: "05",
          label: "5"
        },
        {
          value: "06",
          label: "6"
        },
        {
          value: "07",
          label: "7"
        },
        {
          value: "08",
          label: "8"
        },
        {
          value: "09",
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
          value: "26",
          label: "26"
        },
        {
          value: "27",
          label: "27"
        },
        {
          value: "28",
          label: "28"
        },
        {
          value: "29",
          label: "29"
        },
        {
          value: ">29",
          label: ">29"
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
        { value: '', label: '' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Non-binary', label: 'Non-binary' },
        { value: 'Unknown', label: 'Unknown' },
      ],
    },
    {
      type: 'checkbox',
      name: 'clientPrivacyStatement',
      label: 'I agree with the  the <a href="https://www.youthline.co.nz/client-privacy-statement.html">client privacy statement</a>',
      required: {
        value: true,
        message: 'You need to agree with our client privacy statement to start a chat ',
      },
    },
  ],
};

const translations: Translations = {
  'en-US': {
    WelcomeMessage: 'Welcome to Youthline',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold:
      "Thank you very much for this information. We'll transfer you now. Please hold for a practitioner.",
    AutoFirstMessage: 'Incoming webchat contact from',
    TypingIndicator: 'Counselor is typing',
    StartChat: 'Start Chat!',
    MessageCanvasTrayButton: 'Start New Chat',
    Email: 'Email',
    Age: 'What is your age?',
    Gender: 'What is your gender?',
  },
};

const memberDisplayOptions = {
  yourDefaultName: 'Usted',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Counselor',
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
