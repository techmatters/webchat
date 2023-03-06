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

export type { PreEngagementConfig };

export type Translations = {
  [language: string]: {
    [key: string]: string;
  };
};

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
