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

import {PreEngagementConfig,Translations,Configuration,MapHelplineLanguage, ContactType} from '../types'

const accountSid = 'AC542ee9a6613ce5ff976d075a3e3bd38d';
const flexFlowSid = 'FOfe2df2f82dd40be24d41347fff7c6f1c';
const defaultLanguage ='en-GB';
const captureIp = true;
const contactType: ContactType = 'ip';

const preEngagementConfig: PreEngagementConfig = {
  description: "Welcome to the Revenge Porn and Report Harmful Content Helplines.",
  fields: [
    {
      label: 'Select the service',
      type: 'SelectItem',
      attributes: {
        name: 'helpline',
        required: true,
        readOnly: false,
      },
      options: [
        {
          value: 'RevengePorn',
          label: 'Revenge Porn Helpline',
          selected: true,
        },
        {
          value: 'RHC',
          label: 'Report Harmful Content Helpline',
          selected: false,
        }
      ],
    },
  ],
  submitLabel: 'Start Chat!',
};

const translations: Translations = {
  'en-GB': {
    WelcomeMessage: 'Thank you for reaching out.',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold: 
      "Thank you very much for this information. We'll transfer you now. Please hold for a practitioner.",
    AutoFirstMessage: 'Incoming webchat contact from',
    TypingIndicator: 'Counselor is typing',
    StartChat: 'Start Chat!',
    MessageCanvasTrayButton: 'Start New Chat',
  },
};

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Counsellor',
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
  captureIp,contactType,
};
