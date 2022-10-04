type Token = string;

export const endChat = async (token: Token): Promise<Token> => {
  const body = { Token: token };

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // eslint-disable-next-line global-require
  const { SERVERLESS_URL } = require('../../private/secret');
  const response = await fetch(`${SERVERLESS_URL}/endChat`, options)
  const responseJson = await response.json();
  
  if (response.status === 403) {
    throw new Error('Server responded with 403 status (Forbidden)');
  }
  
  if (!response.ok) {
    const option = responseJson.stack ? { cause: responseJson.stack } : null;
    console.log('Error:', option);
    throw new Error(responseJson.message);
  }
  
  console.log('>responseJson', responseJson)
  return responseJson;
};
