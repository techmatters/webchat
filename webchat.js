const defaultLanguage = 'en-US';

try {
  Twilio.FlexWebChat.createWebChat(appConfig).then(webchat => {
    const { manager } = webchat;

    const twilioStrings = { ...manager.strings }; // save the originals
    const setNewStrings = newStrings => (manager.strings = { ...manager.strings, ...newStrings });
    const translationErrorMsg = 'Could not translate, using default';

    const changeLanguageWebChat = language => {
      try {
        if (language !== defaultLanguage && translations[language]) {
          setNewStrings({ ...twilioStrings, ...translations[defaultLanguage], ...translations[language] });
        } else {
          setNewStrings({ ...twilioStrings, ...translations[defaultLanguage] });
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

    // configure the initial language if any
    if (typeof initialLanguage !== undefined && initialLanguage !== defaultLanguage) changeLanguageWebChat(initialLanguage)

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
} catch(err) {
  console.log(err)
  window.alert('ERROR WHILE LOADING CHAT')
}
