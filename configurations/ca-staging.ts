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

    PreEngagementConfigDescription:
      'Welcome to Kids Help Phone. To help us serve you better, please answer the following questions.',
    LabelNickname: 'Nickname (please do not share your real name)',
    NameNickname: 'nickname',
    Guest: 'Guest',
    HowOldAreYou: 'How old are you?',
    Age: 'age',
    FiveOrYounger: '5 or younger',
    PreferNotToAnswer: 'Prefer not to answer',
    DoYouConsiderYourselfToBe: 'Do you consider yourself to be:',
    Gender: 'gender',
    Agender: 'Agender',
    CisMaleMan: 'Cis Male/Man',
    CisFemaleWoman: 'Cis Female/Woman',
    NonBinaryGenderqueerGenderFluid: 'Non-Binary/Genderqueer/Gender fluid',
    TwoSpirit: 'Two-Spirit',
    TransFemaleWoman: 'Trans Female/Woman',
    TransMaleMan: 'Trans Male/Man',
    SexualOrientation: 'sexualOrientation',
    Asexual: 'Asexual',
    BisexualOrPansexual: 'Bisexual or Pansexual',
    GayOrLesbian: 'Gay or Lesbian',
    Queer: 'Queer',
    HeterosexualOrStraight: 'Heterosexual or Straight',
    QuestioningOrUnsure: 'Questioning or Unsure',
    Other: 'Other',
    LabelNewcomer:
      'Are you a newcomer (i.e., Arrived in Canada within 5 years or less), recent immigrant, and/or refugee?',
    NameNewcomer: 'Newcomer',
    Yes: 'Yes',
    No: 'No',
    LabelProvince: 'What province or territory do you live in?',
    NameProvince: 'province',
    Alberta: 'Alberta',
    BritishColumbia: 'British Columbia',
    Inuvialuit: 'Inuvialuit',
    Manitoba: 'Manitoba',
    NewBrunswick: 'New Brunswick',
    NewfoundlandAndLabrador: 'Newfoundland and Labrador',
    NorthwestTerritories: 'Northwest Territories',
    NovaScotia: 'Nova Scotia',
    Nunavat: 'Nunavat',
    Nunavik: 'Nunavik',
    Nunatsiavut: 'Nunatsiavut',
    Ontario: 'Ontario',
    PrinceEdwardIsland: 'Prince Edward Island',
    Quebec: 'Québec',
    Saskatchewan: 'Saskatchewan',
    Yukon: 'Yukon',
    ContactingOutsideCanada: 'Contacting us from outside of Canada',
    TellMoreAboutLive: 'Tell us more about where you live…',
    Region: 'region',
    RuralArea: 'Rural area (less than 1,000 people)',
    SmallCityTown: 'Small city/town (approximately 1,000 to 29,999 people)',
    MediumCity: 'Medium city (approximately 30,000 to 99,999 people)',
    LargeCityUrbanCentre: 'Large city/urban centre (approximately 100,000 people or more)',
    FirstNationsreserve: 'First Nations reserve',
    LabelScale: 'On a scale of 1 to 7, how upset are you right now?',
    Upset: 'upset',
    NotVery: 'Not Very',
    Very: 'Very',
    Ethnicity: 'ethnicity',
    BlackEthnicity: 'Black (e.g., African, Afro-Caribbean, African Canadian descent)',
    EastAsian: 'East Asian (e.g., East Asian descent; Korean, Chinese, Japanese, etc.)',
    IndigenousToNorthAmerica: 'Indigenous (To North America)',
    FirstNationsToNorthAmerica: 'First Nations [sub-category of Indigenous (To North America)]',
    MetisToNorthAmerica: 'Métis [sub-category of Indigenous (To North America)]',
    Inuit: 'Inuit [sub-category of Indigenous (To North America)]',
    IndigenousNonSpecified: 'Indigenous (non-specified) [sub-category of Indigenous (To North America)]',
    IndigenousNotToNorthAmerica: 'Indigenous (Not to North America)',
    LatinAmerican: 'Latin American (e.g., Latin American, Hispanic descent)',
    MiddleEastern:
      'Middle Eastern (e.g., Arab, Persian, West Asian descent; Egyptian, Iranian, Lebanese, Turkish, etc.)',
    SoutheastAsian:
      'Southeast Asian (e.g., Southeast Asian descent; Cambodian, Filipino, Indonesian, Laotian, Vietnamese, etc.)',
    SouthAsian: 'South Asian (e.g., South Asian descent; East Indian, Afghan, Pakistani, Sri Lankan, etc.)',
    WhiteEuropeanDescent: 'White (e.g., European descent)',
    LabelSchool: 'We would like to learn more about you and if you are currently a student. Do you attend...?',
    School: 'school',
    ElementarySchool: 'Elementary School',
    MiddleschoolJuniorHigh: 'Middle school/Junior High',
    HighSchool: 'High School',
    AlternativeEducationSchoolProgram: 'Alternative Education School/Program',
    College: 'College',
    University: 'University',
    HomeSchool: 'Home School',
    NotAStudent: 'Not a student',
    LabelLivingSituation: 'Which of these best describes your current living situation?:',
    NameLivingSituation: 'livingSituation',
    LivingWithFamilyMembersGuardians: 'Living with family members/guardians',
    MemberMilitaryFamily: 'Member of a military family',
    LivingIndependentlyWithPeers: 'Living independently/with peers',
    LivingSchoolResidence: 'Living in a School residence',
    InHospital: 'In hospital',
    TreatmentCentre: 'Treatment centre',
    RecoveryHome: 'Recovery home',
    AssistedLivingCentre: 'Assisted living centre',
    Homeless: 'Homeless (living in a shelter, on the streets or staying with people temporarily)',
    InCare: 'In care',
  },
  'fr-CA': {
    WelcomeMessage: "Bienvenue à Jeunesse, J'écoute",
    MessageCanvasTrayContent: '',
    MessageInputDisabledReasonHold:
      "Je vous remercie beaucoup pour l'info. Nous allons le transférer maintenant. Veuillez attendre un agent.",
    AutoFirstMessage: 'Nouveau contact de web',
    TypingIndicator: '{0} est écrit ... ',
    StartChat: 'Démarrer la chat!',
    MessageCanvasTrayButton: 'Démarrer une nouvelle chat',
    EntryPointTagline: 'Discute avec nous',
    InvalidPreEngagementMessage:
      "Les formulaires de pré-engagement n'ont pas été établis et sont nécessaires pour démarrer le chat Web. Veuillez les configurer maintenant dans les paramètres.",
    InvalidPreEngagementButton: 'Apprendre encore plus',
    PredefinedChatMessageAuthorName: 'Bot',
    PredefinedChatMessageBody: "Salut! Que peut-on faire pour vous aider aujourd'hui?",
    InputPlaceHolder: 'Écrire un message',
    Read: 'Vu',
    MessageSendingDisabled: "L'envoi de messages a été désactivé",
    Today: "Aujourd'hui",
    Yesterday: 'Hier',
    Save: 'Sauvegarder',
    Reset: 'RÉINITIALISER',
    MessageCharacterCountStatus: '{{currentCharCount}} / {{maxCharCount}}',
    SendMessageTooltip: 'Envoyer un message',
    FieldValidationRequiredField: 'Champs requis',
    PreEngagementDescription: 'Commençons',
    BotGreeting: 'Comment je peux aider?',

    PreEngagementConfigDescription:
      "Bienvenue à Kids Help Phone. J'écoute. Pour nous aider à mieux vous servir, veuillez répondre aux questions suivantes.",
    LabelNickname: 'Pseudonyme (Veuillez ne pas partager votre vrai nom)',
    NameNickname: 'nickname',
    Guest: 'Guest',
    HowOldAreYou: 'Quel âge as-tu?',
    Age: 'age',
    FiveOrYounger: '5 ans ou moins',
    PreferNotToAnswer: 'Je préfère ne pas répondre',
    DoYouConsiderYourselfToBe: 'Te considères-tu comme étant:',
    Gender: 'gender',
    Agender: 'Agenre',
    CisMaleMan: 'Garçon/homme cis',
    CisFemaleWoman: 'Fille/femme cis',
    NonBinaryGenderqueerGenderFluid: 'Non-binaire/genre fluide',
    TwoSpirit: 'Bispirituel',
    TransFemaleWoman: 'Fille/femme trans',
    TransMaleMan: 'Garçon/homme trans',
    SexualOrientation: 'sexualOrientation',
    Asexual: 'Asexuel',
    BisexualOrPansexual: 'Bisexuel ou pansexuel',
    GayOrLesbian: 'Gai ou lesbienne',
    Queer: 'Queer',
    HeterosexualOrStraight: 'Hétérosexuel',
    QuestioningOrUnsure: 'En questionnement ou incertain',
    Other: 'Autre',
    LabelNewcomer:
      'Es-tu un nouvel arrivant (c.-à-d. au Canada depuis 5 ans ou moins) un immigrant récent ou un réfugié?',
    NameNewcomer: 'Newcomer',
    Yes: 'Oui',
    No: 'Non',
    LabelProvince: 'Dans quelle province ou quel territoire habites-tu?',
    NameProvince: 'province',
    Alberta: 'Alberta',
    BritishColumbia: 'Colombie-Britannique',
    Inuvialuit: 'Inuvialuit',
    Manitoba: 'Manitoba',
    NewBrunswick: 'Nouveau-Brunswick',
    NewfoundlandAndLabrador: 'Terre-Neuve-et-Labrador',
    NorthwestTerritories: 'Territoires du Nord-Ouest',
    NovaScotia: 'Nouvelle-Écosse',
    Nunavat: 'Nunavat',
    Nunavik: 'Nunavik',
    Nunatsiavut: 'Nunatsiavut',
    Ontario: 'Ontario',
    PrinceEdwardIsland: 'Île-du-Prince-Édouard',
    Quebec: 'Québec',
    Saskatchewan: 'Saskatchewan',
    Yukon: 'Yukon',
    ContactingOutsideCanada: 'Contacting us from outside of Canada',
    TellMoreAboutLive: 'Dis nous la grandeur de la place où tu habites?',
    Region: 'region',
    RuralArea: 'Région rurale (moins de 1 000 habitants)',
    SmallCityTown: 'Petite ville ou municipalité (environ 1 000 à 29 999 habitants)',
    MediumCity: 'Ville moyenne (environ 30 000 à 99 999 habitants)',
    LargeCityUrbanCentre: 'Grande ville ou centre urbain (environ 100 000 habitants ou plus)',
    FirstNationsreserve: 'Réserve des Premières Nations',
    LabelScale: 'Sur une échelle de 1 à 7, à quel point es-tu bouleversé en ce moment?',
    Upset: 'upset',
    NotVery: 'Pas tellement',
    Very: 'Extrêmement',
    Ethnicity: 'ethnicity',
    BlackEthnicity: 'Noir (p. ex., Africain, Afro-Antillais, Canadien d’origine africaine)',
    EastAsian: 'Asiatique de l’Est (p. ex., originaire de l’Asie de l’Est, Coréen, Chinois, Japonais)',
    IndigenousToNorthAmerica: 'Indigène (de l’Amérique du Nord)',
    FirstNationsToNorthAmerica: 'Premières Nations',
    MetisToNorthAmerica: 'Métis',
    Inuit: 'Inuit',
    IndigenousNonSpecified: 'Autochtone (non spécifié)',
    IndigenousNotToNorthAmerica: 'Indigène (provenant d’ailleurs que l’Amérique du Nord)',
    LatinAmerican: 'Latino-américain (p. ex., Latino-Américain, d’origine hispanique)',
    MiddleEastern:
      'Provenant du Moyen-Orient (p. ex., d’origine Arabe, Perse ou d’Asie de l’Ouest; Égyptien, Iranien, Libanais, Turque)',
    SoutheastAsian:
      'Asiatique du Sud-Est (p. ex., originaire de l’Asie du Sud-Est, Cambodgien, Philippin, Indonésien, Laotien, Vietnamien)',
    SouthAsian: 'Asiatique du Sud (p. ex., originaire de l’Asie du Sud, Indien d’Asie, Pakistanais, Sri Lankais)',
    WhiteEuropeanDescent: 'Blanc (p. ex., d’origine européenne)',
    LabelSchool:
      'Nous aimerions en apprendre plus sur toi et savoir si tu es actuellement aux études. Es-tu présentement...?',
    School: 'school',
    ElementarySchool: 'À l’école primaire',
    MiddleschoolJuniorHigh: 'Au secondaire (premier cycle)',
    HighSchool: 'Au secondaire',
    AlternativeEducationSchoolProgram: 'Dans une école/un programme de formation alternative',
    College: 'Au collège/cégep',
    University: 'À l’université',
    HomeSchool: 'Scolarisé à la maison',
    NotAStudent: 'Pas aux études',
    LabelLivingSituation:
      'Qu’est-ce qui décrit le mieux ta situation actuelle? (Choisir toutes les réponses qui s’appliquent.):',
    NameLivingSituation: 'livingSituation',
    LivingWithFamilyMembersGuardians: 'Vivant avec les membres de la famille/tuteurs',
    MemberMilitaryFamily: 'Membre d’une famille militaire',
    LivingIndependentlyWithPeers: 'Vivant seul/avec des pairs',
    LivingSchoolResidence: 'Vivant dans une résidence scolaire',
    InHospital: 'Hospitalisé',
    TreatmentCentre: 'centre de désintoxication',
    RecoveryHome: 'Centre de rétablissement',
    AssistedLivingCentre: 'Centre avec services de soutien',
    Homeless: 'Sans-abri (p. ex., vivant dans un refuge, dans la rue, temporairement chez quelqu’un d’autre)',
    InCare: 'Dans les soins',
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description: 'PreEngagementConfigDescription',
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
          label: 'PreferNotToAnswer',
          selected: false,
        },
      ],
    },
    {
      label: 'DoYouConsiderYourselfToBe',
      type: 'SelectItem',
      attributes: {
        name: 'Gender',
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
          label: 'CisMaleMan',
          selected: false,
        },
        {
          value: 'Cis Female/Woman',
          label: 'CisFemaleWoman',
          selected: false,
        },
        {
          value: 'Non-Binary/Genderqueer/Gender fluid',
          label: 'NonBinaryGenderqueerGenderFluid',
          selected: false,
        },
        {
          value: 'Two-Spirit',
          label: 'TwoSpirit',
          selected: false,
        },
        {
          value: 'Trans Female/Woman',
          label: 'TransFemaleWoman',
          selected: false,
        },
        {
          value: 'Trans Male/Man',
          label: 'TransMaleMan',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'PreferNotToAnswer',
          selected: false,
        },
      ],
    },
    {
      label: 'DoYouConsiderYourselfToBe',
      type: 'SelectItem',
      attributes: {
        name: 'SexualOrientation',
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
          label: 'BisexualOrPansexual',
          selected: false,
        },
        {
          value: 'Gay or Lesbian',
          label: 'GayOrLesbian',
          selected: false,
        },
        {
          value: 'Queer',
          label: 'Queer',
          selected: false,
        },
        {
          value: 'Heterosexual or Straight',
          label: 'HeterosexualOrStraight',
          selected: false,
        },
        {
          value: 'Questioning or Unsure',
          label: 'QuestioningOrUnsure',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'PreferNotToAnswer',
          selected: false,
        },
      ],
    },
    {
      label: 'LabelNewcomer',
      type: 'SelectItem',
      attributes: {
        name: 'NameNewcomer',
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
          label: 'PreferNotToAnswer',
          selected: false,
        },
      ],
    },
    {
      label: 'What province or territory do you live in?',
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
          label: 'BritishColumbia',
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
          label: 'NewBrunswick',
          selected: false,
        },
        {
          value: 'Newfoundland and Labrador',
          label: 'NewfoundlandAndLabrador',
          selected: false,
        },
        {
          value: 'Northwest Territories',
          label: 'NorthwestTerritories',
          selected: false,
        },
        {
          value: 'Nova Scotia',
          label: 'NovaScotia',
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
          label: 'PrinceEdwardIsland',
          selected: false,
        },
        {
          value: 'Québec',
          label: 'Quebec',
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
          label: 'ContactingOutsideCanada',
          selected: false,
        },
        {
          value: 'Did not disclose/Did not ask',
          label: 'PreferNotToAnswer',
          selected: false,
        },
      ],
    },
    {
      label: 'TellMoreAboutLive',
      type: 'SelectItem',
      attributes: {
        name: 'Region',
        required: true,
      },
      options: [
        {
          value: 'Rural area',
          label: 'RuralArea',
          selected: true,
        },
        {
          value: 'Small city/town',
          label: 'SmallCityTown',
          selected: false,
        },
        {
          value: 'Medium city',
          label: 'MediumCity',
          selected: false,
        },
        {
          value: 'Large city/urban centre',
          label: 'LargeCityUrbanCentre',
          selected: false,
        },
        {
          value: 'First Nations reserve',
          label: 'FirstNationsreserve',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'PreferNotToAnswer',
          selected: false,
        },
      ],
    },
    {
      label: 'LabelScale',
      type: 'SelectItem',
      attributes: {
        name: 'Upset',
        required: true,
      },
      options: [
        {
          value: '1',
          label: '1 - NotVery',
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
      label: 'DoYouConsiderYourselfToBe',
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
          label: 'BlackEthnicity',
          selected: false,
        },
        {
          value: 'East Asian',
          label: 'EastAsian',
          selected: false,
        },
        {
          value: 'Indigenous',
          label: 'IndigenousToNorthAmerica',
          selected: false,
        },
        {
          value: 'First Nations',
          label: 'FirstNationsToNorthAmerica',
          selected: false,
        },
        {
          value: 'Métis',
          label: 'MetisToNorthAmerica',
          selected: false,
        },
        {
          value: 'Inuit',
          label: 'Inuit',
          selected: false,
        },
        {
          value: 'Indigenous (non-specified)',
          label: 'IndigenousNonSpecified',
          selected: false,
        },
        {
          value: 'Indigenous (Not to North America)',
          label: 'IndigenousNotToNorthAmerica',
          selected: false,
        },
        {
          value: 'Latin American',
          label: 'LatinAmerican',
          selected: false,
        },
        {
          value: 'Middle Eastern',
          label: 'MiddleEastern',
          selected: false,
        },
        {
          value: 'Southeast Asian',
          label: 'SoutheastAsian',
          selected: false,
        },
        {
          value: 'South Asian',
          label: 'SouthAsian',
          selected: false,
        },
        {
          value: 'White',
          label: 'WhiteEuropeanDescent',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'PreferNotToAnswer',
          selected: false,
        },
      ],
    },
    {
      label: 'LabelSchool',
      type: 'SelectItem',
      attributes: {
        name: 'School',
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
          label: 'ElementarySchool',
          selected: false,
        },
        {
          value: 'Middle school/Junior High',
          label: 'MiddleschoolJuniorHigh',
          selected: false,
        },
        {
          value: 'High School',
          label: 'HighSchool',
          selected: false,
        },
        {
          value: 'Alternative Education School/Program',
          label: 'AlternativeEducationSchoolProgram',
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
          label: 'HomeSchool',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Not a student',
          label: 'NotAStudent',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'PreferNotToAnswer',
          selected: false,
        },
      ],
    },
    {
      label: 'LabelLivingSituation',
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
          label: 'LivingWithFamilyMembersGuardians',
          selected: false,
        },
        {
          value: 'Member of a military family',
          label: 'MemberMilitaryFamily',
          selected: false,
        },
        {
          value: 'Living independently/with peers',
          label: 'LivingIndependentlyWithPeers',
          selected: false,
        },
        {
          value: 'Living in a School residence',
          label: 'LivingSchoolResidence',
          selected: false,
        },
        {
          value: 'In hospital',
          label: 'InHospital',
          selected: false,
        },
        {
          value: 'Treatment centre',
          label: 'TreatmentCentre',
          selected: false,
        },
        {
          value: 'Recovery home',
          label: 'RecoveryHome',
          selected: false,
        },
        {
          value: 'Assisted living centre',
          label: 'AssistedLivingCentre',
          selected: false,
        },
        {
          value: 'Homeless',
          label: 'Homeless',
          selected: false,
        },
        {
          value: 'In care',
          label: 'InCare',
          selected: false,
        },
        {
          value: 'Other',
          label: 'Other',
          selected: false,
        },
        {
          value: 'Unknown',
          label: 'PreferNotToAnswer',
          selected: false,
        },
      ],
    },
  ],
  submitLabel: 'StartChat',
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
