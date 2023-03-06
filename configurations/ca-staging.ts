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

import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage, ContactType } from '../types';

const accountSid = 'ACeb335f4685aa874fddf00cdd7c2946bd';
const flexFlowSid = 'FO45c6ac308207b8b17bd990eadf5246fe';
const defaultLanguage = 'en-CA';
const captureIp = false;
const checkOpenHours = false;
const contactType: ContactType = 'ip';
const translations: Translations = {
  'en-CA': {
    MessageInputDisabledReasonHold: 'Thank you! Please hold for a counsellor.',
    EntryPointTagLine: 'Chat with us',
    PreEngagementDescription: "Let's get started",
    Today: 'Today',
    InputPlaceHolder: 'Type Message',
    WelcomeMessage: 'Welcome to Kids Help Phone. ',
    Yesterday: 'Yesterday',
    TypingIndicator: 'Counsellor is typing',
    MessageCanvasTrayButton: 'Start New Chat',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Incoming webchat contact from',
    StartChat: 'Start Chat!',
  },
  'fr-CA': {
    WelcomeMessage: "Bienvenue à Jeunesse, J'écoute",
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold:
      "Je vous remercie beaucoup pour l'info. Nous allons le transférer maintenant. Veuillez attendre un agent.",
    AutoFirstMessage: 'Nouveau contact de web',
    TypingIndicator: "{0} est écrit ... ",
    StartChat: 'Démarrer la chat!',
    MessageCanvasTrayButton: "Démarrer une nouvelle chat",
    EntryPointTagline: "Discute avec nous",
    InvalidPreEngagementMessage: "Les formulaires de pré-engagement n'ont pas été établis et sont nécessaires pour démarrer le chat Web. Veuillez les configurer maintenant dans les paramètres.",
    InvalidPreEngagementButton: "Apprendre encore plus",
    PredefinedChatMessageAuthorName: "Bot",
    PredefinedChatMessageBody: "Salut! Que peut-on faire pour vous aider aujourd'hui?",
    InputPlaceHolder: "Écrire un message",
    Read: "Vu",
    MessageSendingDisabled: "L'envoi de messages a été désactivé",
    Today: "Aujourd'hui",
    Yesterday: "Hier",
    Save: "Sauvegarder",
    Reset: "RÉINITIALISER",
    MessageCharacterCountStatus: "{{currentCharCount}} / {{maxCharCount}}",
    SendMessageTooltip: "Envoyer un message",
    FieldValidationRequiredField: "Champs requis",
    PreEngagementDescription: "Commençons",
    BotGreeting: "Comment je peux aider?",
  }
};

const preEngagementConfig: PreEngagementConfig = {
  description: 'Welcome to Kids Help Phone. To help us serve you better, please answer the following questions.',
  fields: [
    {
      type: 'InputItem',
      label: 'Nickname (please do not share your real name)',
      attributes: {
        name: 'nickname',
        type: 'text',
        placeholder: 'Guest',
        required: true,
      },
    },
    {
      label: 'How old are you?',
      type: 'SelectItem',
      attributes: {
        name: 'age',
        required: true,
        readOnly: false,
      },
      options: [
        {
          value: '5 or younger',
          label: '5 or younger',
          selected: true,
        },
        {
          value: '06',
          label: '6',
          selected: false,
        },
        {
          value: '07',
          label: '7',
          selected: false,
        },
        {
          value: '08',
          label: '8',
          selected: false,
        },
        {
          value: '09',
          label: '9',
          selected: false,
        },
        {
          value: '10',
          label: '10',
          selected: false,
        },
        {
          value: '11',
          label: '11',
          selected: false,
        },
        {
          value: '12',
          label: '12',
          selected: false,
        },
        {
          value: '13',
          label: '13',
          selected: false,
        },
        {
          value: '14',
          label: '14',
          selected: false,
        },
        {
          value: '15',
          label: '15',
          selected: false,
        },
        {
          value: '16',
          label: '16',
          selected: false,
        },
        {
          value: '17',
          label: '17',
          selected: false,
        },
        {
          value: '18',
          label: '18',
          selected: false,
        },
        {
          value: '19',
          label: '19',
          selected: false,
        },
        {
          value: '20',
          label: '20',
          selected: false,
        },
        {
          value: '21',
          label: '21',
          selected: false,
        },
        {
          value: '22',
          label: '22',
          selected: false,
        },
        {
          value: '23',
          label: '23',
          selected: false,
        },
        {
          value: '24',
          label: '24',
          selected: false,
        },
        {
          value: '25',
          label: '25',
          selected: false,
        },
        {
          value: '26',
          label: '26',
          selected: false,
        },
        {
          value: '27',
          label: '27',
          selected: false,
        },
        {
          value: '28',
          label: '28',
          selected: false,
        },
        {
          value: '29',
          label: '29',
          selected: false,
        },
        {
          value: '>30',
          label: '>30',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'Prefer not to answer',
          selected: false,
        },
      ],
    },
    {
      label: 'Do you consider yourself to be:',
      type: 'SelectItem',
      attributes: {
        name: 'gender',
        required: true,
        readOnly: false,
      },
      options: [
        {
          value: 'Agender',
          label: 'Agender',
          selected: true,
        },
        {
          value: 'Cis Male/Man',
          label: 'Cis Male/Man',
          selected: false,
        },
        {
          value: 'Cis Female/Woman',
          label: 'Cis Female/Woman',
          selected: false,
        },
        {
          value: 'Non-Binary/Genderqueer/Gender fluid"',
          label: 'Non-Binary/Genderqueer/Gender fluid"',
          selected: false,
        },
        {
          value: 'Two-Spirit',
          label: 'Two-Spirit',
          selected: false,
        },
        {
          value: 'Trans Female/Woman',
          label: 'Trans Female/Woman',
          selected: false,
        },
        {
          value: 'Trans Male/Man',
          label: 'Trans Male/Man',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'Prefer not to answer',
          selected: false,
        },
      ],
    },
    {
      label: 'Do you consider yourself to be:',
      type: 'SelectItem',
      attributes: {
        name: 'sexualOrientation',
        required: true,
        readOnly: false,
      },
      options: [
        {
          value: 'Asexual',
          label: 'Asexual',
          selected: true,
        },
        {
          value: 'Bisexual or Pansexual',
          label: 'Bisexual or Pansexual',
          selected: false,
        },
        {
          value: 'Gay or Lesbian',
          label: 'Gay or Lesbian',
          selected: false,
        },
        {
          value: 'Queer',
          label: 'Queer',
          selected: false,
        },
        {
          value: 'Heterosexual or Straight',
          label: 'Heterosexual or Straight',
          selected: false,
        },
        {
          value: 'Questioning or Unsure',
          label: 'Questioning or Unsure',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'Prefer not to answer',
          selected: false,
        },
      ],
    },
    {
      label: 'Are you a newcomer (i.e., Arrived in Canada within 5 years or less), recent immigrant, and/or refugee?',
      type: 'SelectItem',
      attributes: {
        name: 'Newcomer',
        required: true,
      },
      options: [
        {
          value: 'yes',
          label: 'Yes',
          selected: true,
        },
        {
          value: 'no',
          label: 'No',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'Prefer not to answer',
          selected: false,
        },
      ],
    },
    {
      label: 'What province or territory do you live in? ',
      type: 'SelectItem',
      attributes: {
        name: 'province',
        required: true,
      },
      options: [
        {
          value: 'Alberta',
          label: 'Alberta',
          selected: true,
        },
        {
          value: 'British Columbia',
          label: 'British Columbia',
          selected: false,
        },
        {
          value: 'Inuvialuit',
          label: 'Inuvialuit',
          selected: false,
        },
        {
          value: 'Manitoba',
          label: 'Manitoba',
          selected: false,
        },
        {
          value: 'New Brunswick',
          label: 'New Brunswick',
          selected: false,
        },
        {
          value: 'Newfoundland and Labrador',
          label: 'Newfoundland and Labrador',
          selected: false,
        },
        {
          value: 'Northwest Territories',
          label: 'Northwest Territories',
          selected: false,
        },
        {
          value: 'Nova Scotia',
          label: 'Nova Scotia',
          selected: false,
        },
        {
          value: 'Nunavat',
          label: 'Nunavat',
          selected: false,
        },
        {
          value: 'Nunavik',
          label: 'Nunavik',
          selected: false,
        },
        {
          value: 'Nunatsiavut',
          label: 'Nunatsiavut',
          selected: false,
        },
        {
          value: 'Ontario',
          label: 'Ontario',
          selected: false,
        },
        {
          value: 'Prince Edward Island',
          label: 'Prince Edward Island',
          selected: false,
        },
        {
          value: 'Québec',
          label: 'Québec',
          selected: false,
        },
        {
          value: 'Saskatchewan',
          label: 'Saskatchewan',
          selected: false,
        },
        {
          value: 'Yukon',
          label: 'Yukon',
          selected: false,
        },
        {
          value: 'Contacting us from outside of Canada',
          label: 'Contacting us from outside of Canada',
          selected: false,
        },
        {
          value: 'Did not disclose/Did not ask',
          label: 'Prefer not to answer',
          selected: false,
        },
      ],
    },
    {
      label: 'Tell us more about where you live…',
      type: 'SelectItem',
      attributes: {
        name: 'region',
        required: true,
      },
      options: [
        {
          value: 'Rural area',
          label: 'Rural area (less than 1,000 people)',
          selected: true,
        },
        {
          value: 'Small city/town',
          label: 'Small city/town (approximately 1,000 to 29,999 people)',
          selected: false,
        },
        {
          value: 'Medium city',
          label: 'Medium city (approximately 30,000 to 99,999 people)',
          selected: false,
        },
        {
          value: 'Large city/urban centre',
          label: 'Large city/urban centre (approximately 100,000 people or more)',
          selected: false,
        },
        {
          value: 'First Nations reserve',
          label: 'First Nations reserve',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'Prefer not to answer',
          selected: false,
        },
      ],
    },
    {
      label: 'On a scale of 1 to 7, how upset are you right now?',
      type: 'SelectItem',
      attributes: {
        name: 'upset',
        required: true,
      },
      options: [
        {
          value: '1',
          label: '1 - Not Very',
          selected: true,
        },
        {
          value: '2',
          label: '2',
          selected: false,
        },
        {
          value: '3',
          label: '3',
          selected: false,
        },
        {
          value: '4',
          label: '4',
          selected: false,
        },
        {
          value: '5',
          label: '5',
          selected: false,
        },
        {
          value: '6',
          label: '6',
          selected: false,
        },
        {
          value: '7',
          label: '7 - Very',
          selected: false,
        },
      ],
    },
    {
      label: 'Do you consider yourself to be:',
      type: 'SelectItem',
      attributes: {
        name: 'ethnicity',
        required: false,
      },
      options: [
        {
          value: '',
          label: '',
          selected: true,
        },
        {
          value: 'Black',
          label: 'Black (e.g., African, Afro-Caribbean, African Canadian descent)',
          selected: false,
        },
        {
          value: 'East Asian',
          label: 'East Asian (e.g., East Asian descent; Korean, Chinese, Japanese, etc.)',
          selected: false,
        },
        {
          value: 'Indigenous',
          label: 'Indigenous (To North America',
          selected: false,
        },
        {
          value: 'First Nations',
          label: 'First Nations [sub-category of Indigenous (To North America)]',
          selected: false,
        },
        {
          value: 'Métis',
          label: 'Métis [sub-category of Indigenous (To North America)]',
          selected: false,
        },
        {
          value: 'Inuit',
          label: 'Inuit [sub-category of Indigenous (To North America)]',
          selected: false,
        },
        {
          value: 'Indigenous (non-specified)',
          label: 'Indigenous (non-specified) [sub-category of Indigenous (To North America)]',
          selected: false,
        },
        {
          value: 'Indigenous (Not to North America)',
          label: 'Indigenous (Not to North America)',
          selected: false,
        },
        {
          value: 'Latin American',
          label: 'Latin American (e.g., Latin American, Hispanic descent)',
          selected: false,
        },
        {
          value: 'Middle Eastern',
          label: 'Middle Eastern (e.g., Arab, Persian, West Asian descent; Egyptian, Iranian, Lebanese, Turkish, etc.)',
          selected: false,
        },
        {
          value: 'Southeast Asian',
          label:
            'Southeast Asian (e.g., Southeast Asian descent; Cambodian, Filipino, Indonesian, Laotian, Vietnamese, etc.)',
          selected: false,
        },
        {
          value: 'South Asian',
          label: 'South Asian (e.g., South Asian descent; East Indian, Afghan, Pakistani, Sri Lankan, etc.)',
          selected: false,
        },
        {
          value: 'White',
          label: 'White (e.g., European descent)',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'Prefer not to answer',
          selected: false,
        },
      ],
    },
    {
      label: 'We would like to learn more about you and if you are currently a student. Do you attend...?',
      type: 'SelectItem',
      attributes: {
        name: 'school',
        required: false,
      },
      options: [
        {
          value: '',
          label: '',
          selected: true,
        },
        {
          value: 'Elementary School',
          label: 'Elementary School',
          selected: false,
        },
        {
          value: 'Middle school/Junior High',
          label: 'Middle school/Junior High',
          selected: false,
        },
        {
          value: 'High School',
          label: 'High School',
          selected: false,
        },
        {
          value: 'Alternative Education School/Program',
          label: 'Alternative Education School/Program',
          selected: false,
        },
        {
          value: 'College',
          label: 'College',
          selected: false,
        },
        {
          value: 'University',
          label: 'University',
          selected: false,
        },
        {
          value: 'Home School',
          label: 'Home School',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Not a student',
          label: 'Not a student',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'Prefer not to answer',
          selected: false,
        },
      ],
    },
    {
      label: 'Which of these best describes your current living situation?:',
      type: 'SelectItem',
      attributes: {
        name: 'livingSituation',
        required: false,
      },
      options: [
        {
          value: '',
          label: '',
          selected: true,
        },
        {
          value: 'Living with family members/guardians',
          label: 'Living with family members/guardians',
          selected: false,
        },
        {
          value: 'Member of a military family',
          label: 'Member of a military family',
          selected: false,
        },
        {
          value: 'Living independently/with peers',
          label: 'Living independently/with peers',
          selected: false,
        },
        {
          value: 'Living in a School residence',
          label: 'Living in a School residence',
          selected: false,
        },
        {
          value: 'In hospital',
          label: 'In hospital',
          selected: false,
        },
        {
          value: 'Treatment centre',
          label: 'Treatment centre',
          selected: false,
        },
        {
          value: 'Recovery home',
          label: 'Recovery home',
          selected: false,
        },
        {
          value: 'Assisted living centre',
          label: 'Assisted living centre',
          selected: false,
        },
        {
          value: 'Homeless',
          label: 'Homeless (living in a shelter, on the streets or staying with people temporarily)',
          selected: false,
        },
        {
          value: 'In care',
          label: 'In care',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'Prefer not to answer',
          selected: false,
        },
      ],
    },
  ],
  submitLabel: 'Start Chat!',
};

const closedHours: PreEngagementConfig = {
  description:
    "We're sorry, but Live Chat is currently closed. :( \nTo reach a Kids Help Phone counsellor, call us anytime at 1-800-668-6868. \nBe well, \nThe Kids Help Phone Team",
  fields: [
    {
      label: 'Hidden Field',
      type: 'InputField',
      attributes: {
        name: '',
        required: true,
        readOnly: true,
      },
    },
  ],
};

const holidayHours: PreEngagementConfig = {
  description:
    "We're sorry, but Live Chat is currently closed. :( \nTo reach a Kids Help Phone counsellor, call us anytime at 1-800-668-6868. \nBe well, \nThe Kids Help Phone Team",
  fields: [
    {
      label: 'Hidden Field',
      type: 'InputField',
      attributes: {
        name: '',
        required: true,
        readOnly: true,
      },
    },
  ],
};

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Counsellor',
};

const mapHelplineLanguage: MapHelplineLanguage = (helpline) => {
  switch (helpline) {
    default:
      return defaultLanguage;
  }
};

const blockedEmojis = [
  'beer',
  'beers',
  'wine_glass',
  'cocktail',
  'tropical_drink',
  'tumbler_glass',
  'smoking',
  'middle_finger',
  'wink',
  'stuck_out_tongue_winking_eye',
  'kissing_heart',
  'kissing',
  'kissing_closed_eyes',
  'kissing_smiling_eyes',
  'tongue',
  'eggplant',
  'peach',
  'dancers',
  'men-with-bunny-ears-partying',
  'women-with-bunny-ears-partying',
  'syringe',
  'pill',
];

export const config: Configuration = {
  accountSid,
  flexFlowSid,
  defaultLanguage,
  translations,
  preEngagementConfig,
  closedHours,
  holidayHours,
  checkOpenHours,
  mapHelplineLanguage,
  memberDisplayOptions,
  captureIp,
  contactType,
  blockedEmojis,
};
