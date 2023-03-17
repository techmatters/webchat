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

import { FormAttributes as PreEngagementConfig } from '@twilio/flex-ui-core';
import type { MemberDisplayOptions } from '@twilio/flex-ui-core/src/components/channel/MessagingCanvas';

// eslint-disable-next-line import/no-unused-modules
export type { PreEngagementConfig };

export type Translations = {
  [language: string]: {
    [key: string]: string;
  };
};

type FormField = {
  label: string;
  type: string;
  attributes: { name: string; required: true; readOnly: false };
  options: ({ value: string; label: string; selected: true } | { value: string; label: string; selected: false })[];
};

// eslint-disable-next-line import/no-unused-modules
export interface FormAttribute {
  [locale: string]: {
    description: string;
    fields: {
      label: string;
      type: string;
      attributes: {
        name: string;
        required?: boolean;
        readOnly?: boolean;
      };
      options?: {
        value: string;
        label: string;
        selected?: boolean;
      }[];
    }[];
    submitLabel: string;
  };
}

// eslint-disable-next-line import/no-unused-modules
export interface LocalizedFormAttribute {
  [language: string]: {
    type?: string;
    name?: string;
    hideMessage?: boolean;
    fields: Array<FormField>;
    submitLabel?: string;
    description?: string;
    message?: string;
    disabled?: boolean;
    readOnly?: boolean;
  } & PreEngagementConfig;
}

// eslint-disable-next-line import/no-unused-modules
export type LocalizedFormAttributes = {
  [language: string]: PreEngagementConfig;
} & PreEngagementConfig;

export type MapHelplineLanguage = (helpline: string) => string;

export type Configuration = {
  accountSid: string;
  flexFlowSid: string;
  defaultLanguage: string;
  translations: Translations;
  preEngagementConfig: PreEngagementConfig;
  closedHours?: PreEngagementConfig;
  holidayHours?: PreEngagementConfig;
  mapHelplineLanguage: MapHelplineLanguage;
  memberDisplayOptions?: MemberDisplayOptions;
  captureIp: boolean;
  checkOpenHours?: boolean;
  contactType: ContactType;
  showEmojiPicker?: boolean;
  blockedEmojis?: string[];
};

type OperatingHoursStatus = 'open' | 'closed' | 'holiday';
export type OperatingHoursResponse = OperatingHoursStatus | { status: OperatingHoursStatus; message: string };

export type ContactType = 'ip' | 'email';
