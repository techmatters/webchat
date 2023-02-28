import React from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';
import { Provider } from 'react-redux';

import EmojiButton from './components/EmojiButton';
import EmojiPicker from './components/EmojiPicker';

export const renderEmojis = (manager: any) => {
  FlexWebChat.MessageInput.Content.add(
    <Provider store={manager.store as any} key="emojibtn-provider">
      <EmojiButton />
    </Provider>,
  );
  FlexWebChat.MessagingCanvas.Content.add(
    <Provider store={manager.store as any} key="emojipicker-provider">
      <EmojiPicker />
    </Provider>,
  );
};
