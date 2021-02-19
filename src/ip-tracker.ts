import { API_KEY } from '../private/secret';

const url = 'https://ipfind.co/me?auth=' + API_KEY; // Free Tier is 100 requests/day

export const getUserIp = async () => {
  const response = await fetch(url);
  const responseBody = await response.json();
};