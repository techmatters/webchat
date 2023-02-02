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

import { Manager } from '@twilio/flex-webchat-ui';

import { Configuration, OperatingHoursResponse } from '../types';

const getOperatingHours = async (language: string): Promise<OperatingHoursResponse> => {
  const body = { channel: 'webchat', useV2: 'true', language };

  const options = {
    method: 'POST',
    body: new URLSearchParams(body),
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
      const operatingState = await getOperatingHours(config.defaultLanguage);

      /*
       * Support legacy function to avoid braking changes
       * TODO: remove once every account has been migrated
       */
      if (typeof operatingState === 'string') {
        if (operatingState === 'closed' && config.closedHours) {
          manager.updateConfig({ preEngagementConfig: config.closedHours });
        } else if (operatingState === 'holiday' && config.holidayHours) {
          manager.updateConfig({ preEngagementConfig: config.holidayHours });
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (operatingState.status === 'closed' && config.closedHours) {
          manager.updateConfig({ preEngagementConfig: { ...config.closedHours, description: operatingState.message } });
        } else if (operatingState.status === 'holiday' && config.holidayHours) {
          manager.updateConfig({
            preEngagementConfig: { ...config.holidayHours, description: operatingState.message },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};
