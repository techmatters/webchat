import { Configuration } from '../types';
import { config as zmStaging } from './zm-staging';

const accountSid = 'ACf0b04d307d8f20074dc09cdb3b4f0a83';
const flexFlowSid = 'FO829659088caa86f844f010973cd06a1c';

export const config: Configuration = {
  ...zmStaging,
  accountSid,
  flexFlowSid,
};
