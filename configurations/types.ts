import { FormAttributes } from '@twilio/flex-ui-core';
import type { MemberDisplayOptions } from '@twilio/flex-ui-core/src/components/channel/MessagingCanvas';

type FormFieldAttributes = FormAttributes['fields'][number]['attributes'];

export type AselFormFieldMutations = {
  maxLength?: number;
};

type FormFieldAttributesOveride = FormFieldAttributes & AselFormFieldMutations;

export type FormFieldOverride = FormAttributes['fields'][number] & { attributes: FormFieldAttributesOveride };

export type PreEngagementConfig = {
  [K in keyof FormAttributes]: K extends 'fields' ? Array<FormFieldOverride> : FormAttributes[K];
};

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
};

export type OperatingHoursState = 'open' | 'closed' | 'holiday';
