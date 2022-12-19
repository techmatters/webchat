import * as FlexWebChat from '@twilio/flex-webchat-ui';

export const WIDGET_EXPANDED_CLASS = 'AseloWidget-Expanded';

/**
 * This listener adds/removes '.AseloWidget-Expanded' class to the widget's
 * floating button. On a mobile device, this class will hide the floating button.
 */
export function addWidgetExpandedListener(manager: FlexWebChat.Manager) {
  FlexWebChat.Actions.addListener('afterToggleChatVisibility', () => {
    const entryPointButton = document.querySelector<HTMLButtonElement>('button.Twilio-EntryPoint');
    if (!entryPointButton) {
      return;
    }

    const { isEntryPointExpanded } = manager.store.getState().flex.session;

    if (isEntryPointExpanded) {
      entryPointButton.classList.add(WIDGET_EXPANDED_CLASS);
    } else {
      entryPointButton.classList.remove(WIDGET_EXPANDED_CLASS);
    }
  });
}
