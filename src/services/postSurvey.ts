
// eslint-disable-next-line global-require
const { SERVERLESS_URL } = require('../../private/secret');

type TaskSid = string;
type Token = string;
type ChannelSid = string;

export const postSurvey = async (channelSid: ChannelSid, taskSid: TaskSid, token: Token): Promise<Token> => {
  const body = { channelSid, taskSid, Token: token };

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${SERVERLESS_URL}/postSurveyInit`, options);
  const responseJson = await response.json();

  if (response.status === 403) {
    throw new Error('Server responded with 403 status (Forbidden)');
  }

  if (!response.ok) {
    const option = responseJson.stack ? { cause: responseJson.stack } : null;
    console.log('Error:', option);
    throw new Error(responseJson.message);
  }

  return responseJson;
};
