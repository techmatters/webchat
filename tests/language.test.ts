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

import { Configuration } from '../types';
import { getChangeLanguageWebChat } from '../src/language';

describe('getChangeLanguageWebChat', () => {
  const mockManager: any = {
    strings: {
      greeting: 'Hello',
      goodbye: 'Goodbye',
    },
    store: {
      getState: jest.fn().mockReturnValue({ flex: { config: { language: 'en-US' } } }),
    },
    updateConfig: jest.fn(),
  };

  const mockConfig: Configuration = {
    accountSid: 'test1',
    flexFlowSid: 'flow1',
    defaultLanguage: 'en-US',
    translations: {
      'en-US': {
        greeting: 'Hello',
        goodbye: 'Goodbye',
      },
      'fr-CA': {
        greeting: 'Bonjour',
        goodbye: 'Au revoir',
      },
    },
    preEngagementConfig: {
      description: 'Please fill out the form below',
      submitLabel: 'Submit',
      fields: [
        {
          type: 'InputItem',
          label: 'Name',
          attributes: { name: 'name', placeholder: 'Enter your name' },
        },
        {
          type: 'SelectItem',
          label: 'Language',
          attributes: { name: 'language' },
          options: [
            { label: 'English', value: 'en-US' },
            { label: 'French', value: 'fr-CA' },
          ],
        },
      ],
    },
    mapHelplineLanguage(helpline: string): string {
      throw new Error('Function not implemented.');
    },
    captureIp: false,
    contactType: 'ip',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set the default language when no language is provided', () => {
    const changeLanguage = getChangeLanguageWebChat(mockManager, mockConfig);
    changeLanguage('');

    expect(mockManager.store.getState().flex.config.language).toBe('en-US');
    expect(mockManager.strings.greeting).toBe('Hello');
    expect(mockManager.strings.goodbye).toBe('Goodbye');
    expect(mockManager.updateConfig).toHaveBeenCalledWith({ preEngagementConfig: mockConfig.preEngagementConfig });
  });

  it('should set a new language when a language is provided', () => {
    const changeLanguage = getChangeLanguageWebChat(mockManager, mockConfig);
    changeLanguage('fr-CA');

    expect(mockManager.store.getState().flex.config.language).toBe('fr-CA');
    expect(mockManager.strings.greeting).toBe('Bonjour');
    expect(mockManager.strings.goodbye).toBe('Au revoir');
    expect(mockManager.updateConfig).toHaveBeenCalledWith({ preEngagementConfig: expect.any(Object) });

    const updatedPreEngagementConfig = mockManager.updateConfig.mock.calls[0][0].preEngagementConfig;
    expect(updatedPreEngagementConfig.description).toBe('Please fill out the form below');
    expect(updatedPreEngagementConfig.submitLabel).toBe('Submit');
    expect(updatedPreEngagementConfig.fields[0].label).toBe('Name');
    expect(updatedPreEngagementConfig.fields[0].attributes.placeholder).toBe('Enter your name');
    expect(updatedPreEngagementConfig.fields[1].label).toBe('Language');
    expect(updatedPreEngagementConfig.fields[1].options[0].label).toBe('English');
    expect(updatedPreEngagementConfig.fields[1].options[1].label).toBe('French');
  });
});
