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

import * as FlexWebChat from '@twilio/flex-webchat-ui';
import { FormAttributes } from '@twilio/flex-webchat-ui';

import { getChangeLanguageWebChat } from '../src/language';
import { Configuration } from '../types';
import { getCurrentConfig } from '../src/aselo-webchat';

jest.mock('@twilio/flex-webchat-ui', () => ({
  manager: {
    chatClient: jest.fn(),
    configuration: jest.fn(),
    store: jest.fn(),
    strings: jest.fn(),
    updateConfig: jest.fn(),
  },
}));

const appConfig: Configuration = {
  accountSid: 'test1',
  flexFlowSid: 'flow1',
  defaultLanguage: 'en-US',
  translations: {},
  preEngagementConfig: {
    description: 'PreEngagementDescription',
    fields: [
      {
        label: 'WhatIsYourHelpline',
        type: 'SelectItem',
        attributes: {
          name: 'helpline',
          required: true,
          readOnly: false,
        },
        options: [
          {
            value: 'Select helpline',
            label: 'SelectHelpline',
            selected: true,
          },
          {
            value: 'Fake Helpline',
            label: 'FakeHelpline',
            selected: false,
          },
        ],
      },
    ],
  },
  closedHours: undefined,
  holidayHours: undefined,
  mapHelplineLanguage(helpline: string): string {
    throw new Error('Function not implemented.');
  },
  captureIp: false,
  contactType: 'ip',
};

const translatedPreEngagement = { ...appConfig.preEngagementConfig };

describe('language translation', () => {
  test('should return translated preEngagementConfig', async () => {
    const webchat = await FlexWebChat.createWebChat(appConfig);
    const currentConfig = getCurrentConfig();

    const { manager } = webchat;
    expect(<jest.Mock>manager.updateConfig).toHaveBeenCalledWith({ preEngagementConfig: translatedPreEngagement });
  });
});
