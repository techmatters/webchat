type Token = string;
type ChannelSid = string;

// eslint-disable-next-line global-require
const { SERVERLESS_URL } = require('../../private/secret');

export const endChat = async (channelSid: ChannelSid, token: Token): Promise<Token> => {
  const body = { channelSid, Token: token };

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${SERVERLESS_URL}/endChat`, options);
  const responseJson = await response.json();

  if (!response.ok) {
    const option = responseJson.stack ? { cause: responseJson.stack } : null;
    console.log('Error:', option);
    throw new Error(responseJson.message);
  }

  if (response.status === 403) {
    throw new Error('Server responded with 403 status (Forbidden)');
  }

  return responseJson;
};
