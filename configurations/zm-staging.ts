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
  LocalizedFormAttributes,
} from '../types';

const accountSid = 'ACc59300c7ca018e8652e4d6d86c2d50e6';
const flexFlowSid = 'FObb9dfe97f1c59f455ab01811bec74cd5';
const defaultLanguage = 'en-US';
const captureIp = true;
const contactType = 'ip';

const translations: Translations = {
  'en-US': {
    MessageInputDisabledReasonHold: "We'll transfer you now. Please hold for a counsellor.",
    EntryPointTagLine: 'Chat with us',
    PreEngagementDescription: "Let's get started",
    Today: 'Today',
    InputPlaceHolder: 'Type Message',
    WelcomeMessage: 'Welcome to ChildLine Zambia!',
    Yesterday: 'Yesterday',
    TypingIndicator: 'Counselor is typing',
    MessageCanvasTrayButton: 'Start New Chat',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Incoming webchat contact from',
    StartChat: 'Start Chat!',
  },
  Bemba: {
    MessageInputDisabledReasonHold: 'Twalamutuma nomba kuli Chimbusa, pembeleni ichimpusa nomba.',
    EntryPointTagLine: 'Landeni naifwe',
    PreEngagementDescription: 'tiyeni twambeko ilyashi',
    Today: 'Lelo',
    InputPlaceHolder: 'Taipeni ilyashi',
    WelcomeMessage: 'Mwaiseni kuli ChildLine Zambia!',
    Yesterday: 'Mailo',
    TypingIndicator: 'Ichimbusa chile taipa ilyashi',
    MessageCanvasTrayButton: 'Yambeni kutaipa ilyashi imbi',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: '',
    StartChat: 'Yambeni ukulanda mukwai!',
  },
  Tonga: {
    MessageInputDisabledReasonHold: 'Tulamuswaanganya lino asikuyumya-yumya/sikulaya. Amujatilile notucimuswaanganya.',
    EntryPointTagLine: 'Amubandike andiswe',
    PreEngagementDescription: 'Atukanke/atutalike',
    Today: 'Sunu',
    InputPlaceHolder: 'Lemba',
    WelcomeMessage: 'Mwatambulwa ku ChildLine Zambia!',
    Yesterday: 'Jilo',
    TypingIndicator: 'Sikuyumyayumya watalika kulemba',
    MessageCanvasTrayButton: 'Talika mubandi mupya',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: '',
    StartChat: 'Atubandike!',
  },
  Lunda: {
    MessageInputDisabledReasonHold: "Chuna kuitemesha ahembeleliku chanti kundi ankhong'u.",
    EntryPointTagLine: 'Tuhanjiki mwani',
    PreEngagementDescription: 'Tutachikiku',
    Today: 'Lelu',
    InputPlaceHolder: 'Sonekenu Muzhimbu',
    WelcomeMessage: 'Shikenu mwani kuchota cha ChildLine Zambia!',
    Yesterday: 'Haloshi',
    TypingIndicator: "Nkhong'u nakusoneka Muzhimbu",
    MessageCanvasTrayButton: 'Tachikenu kuhanjika',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: '',
    StartChat: 'Tachikenu kuhanjeka!',
  },
  Nyanja: {
    MessageInputDisabledReasonHold: 'Chonde tipeleka lamya lanu ku wa uphungu telo dikilani.',
    EntryPointTagLine: 'Lankhulisanani nafe!',
    PreEngagementDescription: 'Tiyeni tiyembe kulankhulisana',
    Today: 'Lelo',
    InputPlaceHolder: 'Lembani zimene mufuna kulemba',
    WelcomeMessage: 'Mwalandilidwa kuno ku ChildLine Zambia!',
    Yesterday: 'Dzulo!',
    TypingIndicator: 'Wauphungu alikulemba!',
    MessageCanvasTrayButton: 'Yambani nkhani ina!',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: '',
    StartChat: 'Yambani kulankhula!',
  },
  Kaonde: {
    MessageInputDisabledReasonHold: 'Tusakwimi tuma pembelelai, pacheche ba nkwasho.',
    EntryPointTagLine: 'Isambai natweba',
    PreEngagementDescription: 'Twayayi tutatule',
    Today: 'Lelo',
    InputPlaceHolder: 'Lembayi mulubwe',
    WelcomeMessage: 'Mwaiyayi mwani ku ChildLine Zambia!',
    Yesterday: 'Kesha',
    TypingIndicator: 'Nkwasho wena kunemba',
    MessageCanvasTrayButton: 'Tatulayi kwisamba kipya kipya',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: '',
    StartChat: 'Twayayi twisambe!',
  },
  Lozi: {
    MessageInputDisabledReasonHold: 'Luka kuisa ku mwelezi, u libelele hanyani.',
    EntryPointTagLine: 'Alukalise kwa mbola',
    PreEngagementDescription: 'A lukaliseni kwa mbola',
    Today: 'Lelo',
    InputPlaceHolder: 'Nola linusa',
    WelcomeMessage: 'Wamuhezwi ku ba ChildLine Zambia!',
    Yesterday: 'Mabani',
    TypingIndicator: 'Mwelezi wa nola',
    MessageCanvasTrayButton: 'Alukalise kwa mbola',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Incoming webchat contact from', // TODO: should this really be English?
    StartChat: 'Alukalise kwa mbola!',
  },
};

const preEngagementConfig: LocalizedFormAttributes = {
  'en-US': {
    description: "Let's get started",
    fields: [
      {
        label: 'Select your language',
        type: 'SelectItem',
        attributes: {
          name: 'language',
          required: true,
          readOnly: false,
        },
        options: [
          {
            value: 'English',
            label: '1. English',
            selected: true,
          },
          {
            value: 'Bemba',
            label: '2. Bemba',
            selected: false,
          },
          {
            value: 'Tonga',
            label: '3. Tonga',
            selected: false,
          },
          {
            value: 'Lunda',
            label: '4. Lunda',
            selected: false,
          },
          {
            value: 'Nyanja',
            label: '5. Nyanja',
            selected: false,
          },
          {
            value: 'Kaonde',
            label: '6. Kaonde',
            selected: false,
          },
          {
            value: 'Lozi',
            label: '7. Lozi',
            selected: false,
          },
        ],
      },
    ],
    submitLabel: 'Start Chat!',
  },
};

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'ChildLine Zambia Counsellor',
};

const mapHelplineLanguage: MapHelplineLanguage = (helpline) => {
  switch (helpline) {
    default:
      return defaultLanguage;
  }
};

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
