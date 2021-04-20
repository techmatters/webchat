import { PreEngagementConfig, Translations, Configuration, MapHelplineLanguage } from './types';

const accountSid = 'ACc59300c7ca018e8652e4d6d86c2d50e6';
const flexFlowSid = 'FObb9dfe97f1c59f455ab01811bec74cd5';
const defaultLanguage = 'Bemba';
const captureIp = true;

const translations: Translations = {
  'en-US': {
    MessageInputDisabledReasonHold: "We'll transfer you now. Please hold for a counsellor.",
    EntryPointTagLine: "Chat with us",
    PreEngagementDescription: "Let's get started",
    Today: "Today",
    InputPlaceHolder: "Type Message",
    WelcomeMessage: "Welcome to ChildLine Zambia!",
    Yesterday: "Yesterday",
    TypingIndicator: "Counselor is typing",
    MessageCanvasTrayButton: "Start New Chat",
    MessageCanvasTrayContent: "<p>The counselor has left the chat. Thank you for reaching out. Please contact us again if you need more help.</p>",
    AutoFirstMessage: "Incoming webchat contact",
    StartChat: "Start Chat!",
  },
  'Bemba': {
    MessageInputDisabledReasonHold: "Twalamutuma nomba kuli Chimbusa, pembeleni ichimpusa nomba.",
    EntryPointTagLine: "Landeni naifwe",
    PreEngagementDescription: "tiyeni twambeko ilyashi",
    Today: "Lelo",
    InputPlaceHolder: "Taipeni ilyashi",
    WelcomeMessage: "Mwaiseni kuli ChildLine Zambia!",
    Yesterday: "Mailo",
    TypingIndicator: "Ichimbusa chile taipa ilyashi",
    MessageCanvasTrayButton: "Yambeni kutaipa ilyashi imbi",
    MessageCanvasTrayContent: "<p>Ichimbusa chapwisha imilimo yakulanda.Twatotela pakutuma kuno.Mukatutumine nakabili nga mwafwaya ubwafwilisho kuli baifwe.</p>",
    StartChat: "Yambeni ukulanda mukwai!",
  },
  'Tonga': {
    MessageInputDisabledReasonHold: "Tulamuswaanganya lino asikuyumya-yumya/sikulaya. Amujatilile notucimuswaanganya.",
    EntryPointTagLine: "Amubandike andiswe",
    PreEngagementDescription: "Atukanke/atutalike",
    Today: "Sunu",
    InputPlaceHolder: "Lemba kang'wadi/kagwalo",
    WelcomeMessage: "Mwatambulwa ku ChildLine Zambia!",
    Yesterday: "Jilo",
    TypingIndicator: "Sikuyumyayumya watalika kulemba",
    MessageCanvasTrayButton: "Talika mubandi mupya",
    MessageCanvasTrayContent: "<p>Sikulaya/sikuyumyayumyawazwa lino amubandi. Twalumba kukwabana andiswe,Inga mwatuma lubo naa muciyanda lumbi lugwasyo.</p>",
    StartChat: "Atubandike!",
  },
  'Lunda': {
    MessageInputDisabledReasonHold: "Chuna kuitemesha ahembeleliku chanti kundi ankhong'u.",
    EntryPointTagLine: "Tuhanjiki mwani",
    PreEngagementDescription: "Tutachikiku",
    Today: "Lelu",
    InputPlaceHolder: "Sonekenu Muzhimbu",
    WelcomeMessage: "Shikenu mwani kuchota cha ChildLine Zambia!",
    Yesterday: "Haloshi",
    TypingIndicator: "Nkhong'u nakusoneka Muzhimbu",
    MessageCanvasTrayButton: "Tachikenu kuhanjika",
    MessageCanvasTrayContent: "<p>Ankhong'u adihu wanyi kusakililaku mwani, hakushika kudechu, mwani anachweshi kuchuma mpinji.</p>",
    StartChat: "Tachikenu kuhanjeka!",
  },
  'Nyanja': {
    MessageInputDisabledReasonHold: "Chonde tipeleka lamya lanu ku wa uphungu telo dikilani.",
    EntryPointTagLine: "Lankhulisanani nafe!",
    PreEngagementDescription: "Tiyeni tiyembe kulankhulisana",
    Today: "Lelo",
    InputPlaceHolder: "Lembani zimene zimene mufuna kulemba",
    WelcomeMessage: "Mwalandilidwa kuno ku ChildLine Zambia!",
    Yesterday: "Dzulo!",
    TypingIndicator: "Wauphungu alikulemba!",
    MessageCanvasTrayButton: "Yambani nkhani ina!",
    MessageCanvasTrayContent: "<p>Wauphungu achoka mkukambitsana nanu. Zikomo kwambili pa kukwanisa.</p>",
    StartChat: "Yambani kulankhula!",
  },
  'Kaonde': {
    MessageInputDisabledReasonHold: "Tusakwimi tuma pembelelai, pacheche ba nkwasho.",
    EntryPointTagLine: "Isambai natweba",
    PreEngagementDescription: "Twayayi tutatule",
    Today: "Lelo",
    InputPlaceHolder: "Lembayi mulubwe",
    WelcomeMessage: "Mwaiyayi mwani ku ChildLine Zambia!",
    Yesterday: "Kesha",
    TypingIndicator: "Nkwasho wena kunemba",
    MessageCanvasTrayButton: "Tatulayi kwisamba kipya kipya",
    MessageCanvasTrayContent: "<p>Nkwasho wafumapo twasanta pakufika kwiatweba, mwakonsha kutuma lamya.</p>",
    StartChat: "Twayayi twisambe!",
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description: "Let's get started",
  fields:
    [
      {
        // shows nothing but forces the form to show up
        type: "",
        label: "",
        attributes: {
          name: "helpline",
          value: "ChildLine Zambia (ZM)",
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

export const config: Configuration = {
  accountSid,
  flexFlowSid,
  defaultLanguage,
  translations,
  preEngagementConfig,
  mapHelplineLanguage,
  captureIp,
};
