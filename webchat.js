const defaultLanguage = 'en-US';
const webchatLanguage = defaultLanguage;

const appConfig = {
  accountSid:"ACd8a2e89748318adf6ddff7df6948deaf",
  flexFlowSid:"FO8c2d9c388e7feba8b08d06a4bc3f69d1",
  startEngagementOnInit: false,
  preEngagementConfig: {
    description: translations[webchatLanguage].PreEngagementDescription,
    fields:
      [{
        label: "What is your helpline?",
        type: "SelectItem",
        attributes:
        {
          name: "helpline",
          required: true,
          readOnly: false
        },
        options: [
          {
            value: "Select helpline",
            label: "Select helpline",
            selected: true
          },
          {
            value: "Fake Helpline",
            label: "Fake Helpline",
            selected: false
          },
        ]
      }],
    submitLabel: "Let's chat!"
  }
};

const mapHelplineLanguage = helpline => {
  switch (helpline) {
    case 'Fake Helpline':
      return 'dk';
    default:
      return defaultLanguage;
  }
}

Twilio.FlexWebChat.createWebChat(appConfig).then(webchat => {
  const { manager } = webchat;

  const twilioStrings = { ...manager.strings }; // save the originals
  const setNewStrings = newStrings => (manager.strings = { ...manager.strings, ...newStrings });
  const translationErrorMsg = 'Could not translate, using default';

  const changeLanguageWebChat = language => {
    try {
      if (language === defaultLanguage) {
        setNewStrings({ ...twilioStrings, ...translations[defaultLanguage] });
      } else {
        setNewStrings({ ...twilioStrings, ...translations[language] });
      }
      Twilio.FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage.body =
        (translations[language] && translations[language].BotGreeting) || translations[defaultLanguage].BotGreeting;
      console.log('Translation OK');
    } catch (err) {
      window.alert(translationErrorMsg);
      console.error(translationErrorMsg, err);
      changeLanguageWebChat(defaultLanguage)
    }
  }

  //Posting question from preengagement form as users first chat message
  Twilio.FlexWebChat.Actions.on("afterStartEngagement", (payload) => {
    const { question, helpline } = payload.formData;

    // here we might collect caller language (from a another preEngagement select)
    const helplineLanguage = mapHelplineLanguage(helpline);
    changeLanguageWebChat(helplineLanguage);

    if (!question)
      return;

    const { channelSid } = manager.store.getState().flex.session;
    manager
      .chatClient.getChannelBySid(channelSid)
      .then(channel => channel.sendMessage(question));
  });

  // Render WebChat
  webchat.init();
});