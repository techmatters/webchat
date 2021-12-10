import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'AC98b66f5541f81de7050c7254cf5c96c9';
const flexFlowSid = 'FO9dc6203414bd64ab7c39237ea3b8fe53';
const defaultLanguage = 'en-US';
const captureIp = true;

const translations: Translations = {
    'en-US': {
        WelcomeMessage: "PLACEHOLDER SAFERNET INTRO",
        MessageCanvasTrayContent: "",
        MessageInputDisabledReasonHold: "PLACEHOLDER SAFERNET HOLD",
        AutoFirstMessage: "PLACEHOLDER SAFERNET INCOMING",
    },
};

const preEngagementConfig: PreEngagementConfig = {
    description: "PLACEHOLDER SAFERNET DESCRIPTION",
    fields:
        [
            {
                type: "InputItem",
                label: "PLACEHOLDER SAFERNET INPUT LABEL",
                attributes: {
                    name: "friendlyName",
                    type: "text",
                    placeholder: "Guest",
                    required: true,
                }
            }
        ],
    submitLabel: "Start Chat!"
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
    mapHelplineLanguage,
    memberDisplayOptions,
    captureIp,
};