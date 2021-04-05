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
  mapHelplineLanguage: MapHelplineLanguage;
  memberDisplayOptions?: MemberDisplayOptions;
  captureIp: boolean;
};
