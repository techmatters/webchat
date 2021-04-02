import { FormAttributes as PreEngagementConfig } from '@twilio/flex-ui-core';

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
  mapHelplineLanguage: MapHelplineLanguage;
  captureIp: boolean;
};
