import { OperatingHoursState } from '../configurations/types';

export const getOperatingHours = async (): Promise<OperatingHoursState> => {
  const body = { channel: 'webchat' };

  const options = {
    method: 'POST',
    body: new URLSearchParams({ ...body }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  };

  const { SERVERLESS_URL } = require('../private/secret');
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
