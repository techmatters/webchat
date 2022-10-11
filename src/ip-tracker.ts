import { API_KEY } from '../private/secret';

const url = `https://ipfind.co/me?auth=${API_KEY}`; // Free Tier is 100 requests/day

export const getUserIp = async (): Promise<string> => {
  const response = await fetch(url);
  const responseBody = await response.json();
  return responseBody.ip_address;
};
