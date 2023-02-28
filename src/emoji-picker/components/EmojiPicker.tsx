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

/* eslint-disable react/require-default-props */
import React, { useState, useEffect, useCallback } from 'react';
import Picker from '@emoji-mart/react';
import { connect } from 'react-redux';
import { Actions, ActionPayload } from '@twilio/flex-webchat-ui';

import { toggleEmojiPicker } from '../emoji-state';
import { AseloWebchatState } from '../../aselo-webchat-state';
import { Popup } from './emoji-styles';
import { blockedEmojis } from './BlockedEmojis';

const EmojiPicker = ({ channelSid, isPickerOpen, onToggleEmojiPicker }: Props) => {
  const [inputText, setInputText] = useState('');

  type onEmojiSelectPayload = {
    native: string;
  };

  const concatEmoji = (input: string, emoji: string) => {
    if (input.length === 0) {
      return emoji;
    }
    return `${inputText}${emoji}`;
  };

  const handleSelectEmoji = useCallback(
    (payload: onEmojiSelectPayload) => {
      const body = concatEmoji(inputText, payload.native);

      Actions.invokeAction('SetInputText', {
        channelSid,
        body,
      });

      toggleEmojiPicker();
    },
    [inputText, channelSid],
  );

  /**
   * Adds listener on Action.SetInputText to track the InputText value
   */
  useEffect(() => {
    const inputTextListener = (event: ActionPayload) => {
      setInputText(event.body);
    };
    Actions.addListener('afterSetInputText', inputTextListener);

    Actions.addListener('afterSendMessage', () => {
      setInputText('');
    });

    return () => {
      Actions.removeListener('afterSetInputText', inputTextListener);
    };
  }, [inputText]);

  return (
    <>
      {isPickerOpen && (
        <Popup>
          <Picker
            perLine={6}
            emojiButtonSize={22}
            emojiSize={18}
            onClickOutside={onToggleEmojiPicker}
            onEmojiSelect={handleSelectEmoji}
            exceptEmojis={blockedEmojis}
          />
        </Popup>
      )}
    </>
  );
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const mapStateToProps = (state: AseloWebchatState) => {
  const { channelSid } = state?.flex?.session ?? {};
  return {
    channelSid,
    isPickerOpen: state?.emoji?.isPickerOpen,
  };
};

const mapDispatchToProps = {
  onToggleEmojiPicker: toggleEmojiPicker,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmojiPicker);
