import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'AC16dd71c6fd135ee250bd213ad1efa2e8';
const flexFlowSid = 'FOd655fd61e9e7ac6faf9d0be97a49863b';
const defaultLanguage = 'en-US';
const captureIp = true;
const checkOpenHours = false;

const translations: Translations = {
  'en-US': {
    WelcomeMessage: "Welcome to Childline SA’s Online Counselling Service",
    MessageCanvasTrayContent: "",
    MessageInputDisabledReasonHold: "Please hold for a counselor.",
    AutoFirstMessage: "Incoming webchat contact from",
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description: "Thank you for contacting Childline South Africa. To chat with a counsellor, please type your name and select the Start Chat button.",
  fields:
    [
      {
        type: "InputItem",
        label: "What is your name? (This may be just a screen name, or a nick name, if you are not comfortable giving us your real name) \n We are here Monday – Friday, 11am-1pm & 2pm-6pm. If you need to speak to a Counsellor urgently, call our 24 hour Tollfree Number on 116.",
        attributes: {
          name: "friendlyName",
          type: "text",
          placeholder: "Guest's name. Please enter only your name.",
          required: true,
        }
      }
    ],
  submitLabel: "Start Chat!"
};

const closedHours: PreEngagementConfig = {
  description: "Our counsellors are currently offline. We are here Monday – Friday, 11am-1pm & 2pm-6pm. If you need to speak to a Counsellor, call our 24 hour Tollfree Number on 116. If you feel you are in immediate danger, please call the Police on 10111.",
  fields:
    [
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
  description: "Our counsellors are currently offline for the Public Holiday today. We are here on normal working days: Monday – Friday, 11am-1pm & 2pm-6pm. Please note that messages sent on this platform out of these hours are not received by our team and if you need to speak to a Counsellor, call our 24 hour Tollfree Number on 116. If you feel you are in immediate danger, please call the Police on 10111.",
  fields:
    [
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

const mapHelplineLanguage: MapHelplineLanguage = helpline => {
  switch (helpline) {
    default:
      return defaultLanguage;
  }
}

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'Counsellor',
}

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
};
