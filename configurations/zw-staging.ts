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

const accountSid = 'AC48d146ce2460184b8944cc7fdf8c5d25';
const flexFlowSid = 'FO7494aba81cf5899543d90aa1902a1064';
const defaultLanguage = 'en-US';
const captureIp = true;
const contactType: ContactType = 'ip';

const translations: Translations = {
  'en-US': {
    WelcomeMessage: 'Childline Zimbabwe',
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold:
      "Thank you very much for this information. We'll transfer you now. Please hold for a counsellor.",
    AutoFirstMessage: 'Incoming webchat contact from',
  },
};

const preEngagementConfig: LocalizedFormAttributes = {
  'en-US': {
    description:
      'Thank you for contacting Childline Zimbabwe. To chat with a counsellor, please type your name and select the Start Chat button.',
    fields: [
      {
        type: 'InputItem',
        label: 'What is your name?',
        attributes: {
          name: 'friendlyName',
          type: 'text',
          placeholder: 'Guest',
          required: true,
        },
      },
    ],
    submitLabel: 'Start Chat!',
  },
};

const mapHelplineLanguage: MapHelplineLanguage = (helpline) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (helpline) {
    default:
      return defaultLanguage;
  }
};

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Childline Zimbabwe Counsellor',
};

// eslint-disable-next-line import/no-unused-modules
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
