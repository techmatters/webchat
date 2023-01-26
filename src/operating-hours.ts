import { Manager } from '@twilio/flex-webchat-ui';

import { Configuration, OperatingHoursState } from '../types';

const getOperatingHours = async (): Promise<OperatingHoursState> => {
  const body = { channel: 'webchat' };

  const options = {
    method: 'POST',
    body: new URLSearchParams({ ...body }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  };

  const { SERVERLESS_URL } = require('../private/secret'); // eslint-disable-line global-require
  const response = await fetch(`${SERVERLESS_URL}/operatingHours`, options);

  if (response.status === 403) {
    throw new Error('Server responded with 403 status (Forbidden)');
  }

  const responseJson = await response.json();

  if (!response.ok) {
    const option = responseJson.stack ? { cause: responseJson.stack } : null;
    console.log('Error:', option);
    throw new Error(responseJson.message);
  }

  return responseJson;
};

export const displayOperatingHours = async (config: Configuration, manager: Manager) => {
  // If a helpline has operating hours configuration set, the pre engagement config will show alternative canvas during closed or holiday times/days
  if (config.checkOpenHours) {
    try {
      const operatingState = await getOperatingHours();
      if (operatingState === 'closed' && config.closedHours) {
        manager.updateConfig({ preEngagementConfig: config.closedHours });
      } else if (operatingState === 'holiday' && config.holidayHours) {
        manager.updateConfig({ preEngagementConfig: config.holidayHours });
      }
    } catch (error) {
      console.log(error);
    }
  }
};
