import * as FlexWebChat from '@twilio/flex-webchat-ui';

export const WIDGET_EXPANDED_CLASS = 'AseloWidget-Expanded';

/**
 * This function adds/removes '.AseloWidget-Expanded' class to the widget's
 * floating button. On a mobile device, this class will hide the floating button.
 */
function addOrRemoveWidgetExpandedClass(manager: FlexWebChat.Manager) {
  const entryPointButton = document.querySelector<HTMLButtonElement>('button.Twilio-EntryPoint');
  console.log({ manager, entryPointButton });
  if (!entryPointButton) {
    return;
  }

  const { isEntryPointExpanded } = manager.store.getState().flex.session;

  if (isEntryPointExpanded) {
    entryPointButton.classList.add(WIDGET_EXPANDED_CLASS);
  } else {
    entryPointButton.classList.remove(WIDGET_EXPANDED_CLASS);
  }
}

export function addWidgetExpandedListener(manager: FlexWebChat.Manager) {
  /**
   * Calls addOrRemoveWidgetExpandedClass a first time to handle the scenario
   * where the chat is initially expanded
   */
  addOrRemoveWidgetExpandedClass(manager);

  /**
   * Calls addOrRemoveWidgetExpandedClass everytime the user toggles
   * the chat's visibility. This will make the button visible again
   * in case the chat is collapsed.
   */
  FlexWebChat.Actions.addListener('afterToggleChatVisibility', () => addOrRemoveWidgetExpandedClass(manager));
}
