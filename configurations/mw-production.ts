import { Configuration } from '../types';
import { config as mwStaging } from './mw-staging';

const accountSid = 'AC926d9077405d7f5b4c7129d3087d7814';
const flexFlowSid = 'FO5eca21a7735084a19970ed9e2306a409';

export const config: Configuration = {
  ...mwStaging,
  accountSid,
  flexFlowSid,
};
