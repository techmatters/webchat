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

import { Configuration, FormField } from '../types';
import standardTranslations from './translations';

/**
 * Loads the 'standard' translations for a language based on the keys in 'standardTranslations'.
 * If it is an ISO code (e.g. es-AR) it will first look for a module named after the language code only in our example 'es'
 * If found it will load these translations, if not, create an empty object. Then it will look for a key named specifically for the culture, 'es-AR' in our example
 * If it finds one, it will merge the translations into those already loaded from just the language, overwriting any with the same code.
 * If the supplied language does NOT follow this format, i.e. 'Bemba', it will only look for a module named after the language and return those keys
 * If none of what it searches for are found, if will just return an empty map ({})
 * @param language
 */
const standardTranslationsForLanguage = (language: string): Record<string, string> => {
  const [languageOnlyCode] = language.split('-');
  const languageTranslations = standardTranslations[languageOnlyCode] ?? {};
  const cultureSpecificTranslations = (languageOnlyCode !== language ? standardTranslations[language] : {}) ?? {};
  return { ...languageTranslations, ...cultureSpecificTranslations };
};

export const getChangeLanguageWebChat = (manager: FlexWebChat.Manager, config: Configuration) => {
  const { defaultLanguage, translations: configTranslations, preEngagementConfig } = config;
  const setNewLanguage = (language: string) => {
    const twilioStrings = { ...manager.strings }; // save the originals
    const defaultLanguageTranslations = standardTranslationsForLanguage(defaultLanguage);
    // eslint-disable-next-line no-shadow
    const setConfigLanguage = (language: string) => (manager.store.getState().flex.config.language = language);
    const setNewStrings = (newStrings: FlexWebChat.Strings) =>
      (manager.strings = { ...manager.strings, ...newStrings });

    if (language && language !== defaultLanguage) {
      const languageTranslations = standardTranslationsForLanguage(language);
      setConfigLanguage(language);
      setNewStrings({
        ...twilioStrings,
        ...defaultLanguageTranslations,
        ...configTranslations[defaultLanguage],
        ...languageTranslations,
        ...configTranslations[language],
      });
    } else {
      setConfigLanguage(defaultLanguage);
      setNewStrings({ ...twilioStrings, ...defaultLanguageTranslations, ...configTranslations[defaultLanguage] });
    }
  };

  return (language: string) => {
    try {
      // Checks if key exists in manager.string and returns the key in manager.string or the initial key if undefined.
      const lookupTranslation = (key: string) => {
        return (manager.strings as Record<string, string>)[key] ?? key;
      };

      const translatePreEngagement = () => {
        const translatedPreEngagement = { ...preEngagementConfig };

        translatedPreEngagement.description = lookupTranslation(preEngagementConfig.description as string);

        translatedPreEngagement.submitLabel = lookupTranslation(preEngagementConfig.submitLabel as string);

        translatedPreEngagement.fields.forEach((field: FormField, index) => {
          field.label = lookupTranslation(preEngagementConfig.fields[index].label ?? '');

          /*
           * For some reason, the FormAttributes type in @twilio/flex-ui-core wasn't optimize to check for all properties in fields.
           * Had to caste fields properties to 'any' in other check for missing fields types.
           */
          if (field.type === 'InputItem') {
            const inputAttributes = field.attributes as any;
            inputAttributes.placeholder = lookupTranslation(
              (preEngagementConfig.fields[index].attributes as any).placeholder,
            );
          }

          if (field.type === 'SelectItem') {
            const inputOptions = field.options as any[];
            inputOptions.forEach((option, optionIndex) => {
              option.label = lookupTranslation(
                (preEngagementConfig.fields[index] as any).options[optionIndex].label ?? '',
              );
            });
          }
        });

        manager.updateConfig({ preEngagementConfig: translatedPreEngagement });
      };

      // eslint-disable-next-line sonarjs/no-use-of-empty-return-value
      console.log('translatePreEngagement()', translatePreEngagement(), manager);

      setNewLanguage(language);
      translatePreEngagement();
    } catch (err) {
      const translationErrorMsg = 'Could not translate, using default';
      window.alert(translationErrorMsg);
      console.error(translationErrorMsg, err);
      setNewLanguage(defaultLanguage);
    }
  };
};
