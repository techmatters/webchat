import { Configuration } from './types';
import { config as zaStaging } from './za-staging';

const accountSid = 'AC988e78b713be4a04246b39835de37ad4';
const flexFlowSid = 'FOacabd43f752e8e0ca3d2466e90637095';

export const config: Configuration = {
  ...zaStaging,
  checkOpenHours: true,
  accountSid,
  flexFlowSid,
};
