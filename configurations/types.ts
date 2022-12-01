import { FormAttributes as PreEngagementConfig } from '@twilio/flex-ui-core';
import type { MemberDisplayOptions } from '@twilio/flex-ui-core/src/components/channel/MessagingCanvas';

export type { PreEngagementConfig };

export type PreEngagementFormMutations = {
  name: string;
  attributes: { qualifiedName: string; value: string }[];
}[];

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
  preEngagementFormMutations?: PreEngagementFormMutations;
  closedHours?: PreEngagementConfig;
  holidayHours?: PreEngagementConfig;
  mapHelplineLanguage: MapHelplineLanguage;
  memberDisplayOptions?: MemberDisplayOptions;
  captureIp: boolean;
  checkOpenHours?: boolean;
};

export type OperatingHoursState = 'open' | 'closed' | 'holiday';
