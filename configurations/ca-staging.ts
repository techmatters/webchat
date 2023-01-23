import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage, ContactType } from './types';

const accountSid = 'ACeb335f4685aa874fddf00cdd7c2946bd';
const flexFlowSid = 'FO45c6ac308207b8b17bd990eadf5246fe';
const defaultLanguage = 'en-US';
const captureIp = false;
const checkOpenHours = false;
const contactType: ContactType = 'ip';
const translations: Translations = {
  'en-US': {
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
      type: 'InputItem',
      attributes: {
        name: 'age',
        type: 'text',
        required: true,
      },
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
          label: 'Small city/town (1,000 to 29,999 people)',
          selected: false,
        },
        {
          value: 'Medium city',
          label: 'Medium city (30,000 to 99,999 people)',
          selected: false,
        },
        {
          value: 'Large city/urban centre',
          label: 'Large city/urban centre (100,000 people or more)',
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
          value: 'Youth in care',
          label: 'Youth in care',
          selected: false,
        },
        {
          value: 'Foster home',
          label: 'Foster home',
          selected: false,
        },
        {
          value: 'Group home',
          label: 'Group home',
          selected: false,
        },
        {
          value: 'In custody or on conditional release',
          label: 'In custody or on conditional release',
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
};
