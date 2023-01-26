import { Configuration } from '../types';
import { config as etStaging } from './et-staging';

const accountSid = 'AC16aa1fb9123860efd3bdde74de556e21';
const flexFlowSid = 'FOb18e8dca4c6322d2abe701d159ea77eb';

export const config: Configuration = {
  ...etStaging,
  accountSid,
  flexFlowSid,
};
