import { Configuration } from './types';
import { config as jmStaging } from './jm-staging';

const accountSid = 'AC9fd261078d40fcfa06f0e374921af7a5';
const flexFlowSid = 'FOf5d659a7c19c6af218de8be79b3bfd49';

export const config: Configuration = {
  ...jmStaging,
  accountSid,
  flexFlowSid,
};
