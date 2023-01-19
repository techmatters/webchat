import * as FlexWebChat from '@twilio/flex-webchat-ui';

import { getCurrentConfig } from '../aselo-webchat';

/**
 * If contentType is 'ip', we get contactIdentifier from the context.
 * Otherwise, we get contactIdentifier from the pre-engagement answers.
 */
function getContactIdentifier(manager: FlexWebChat.Manager, payload: any) {
  const { contactType } = getCurrentConfig();

  if (contactType === 'ip') {
    return manager.configuration.context.ip;
  }

  return payload.formData.contactIdentifier;
}

/**
 * Creates a new appConfig object based on the current one,
 * with these new properties at appConfig.context:
 *  - contactType
 *  - contactIdentifier
 */
function getUpdatedAppConfig(manager: FlexWebChat.Manager, contactIdentifier: string) {
  const { contactType } = getCurrentConfig();
  const appConfig = manager.configuration;

  // TODO: remove IP from context when possible
  return {
    ...appConfig,
    context: {
      ...appConfig.context,
      contactIdentifier,
      contactType,
    },
  };
}

/**
 * On 'beforeStartEngagement' event, adds to webchat context:
 *  - contactType
 *  - contactIdentifier
 */
export function addContactIdentifierToContext(manager: FlexWebChat.Manager) {
  FlexWebChat.Actions.addListener('beforeStartEngagement', async (payload) => {
    const contactIdentifier = getContactIdentifier(manager, payload);
    const updatedAppConfig = getUpdatedAppConfig(manager, contactIdentifier);

    manager.updateConfig(updatedAppConfig);
  });
}
