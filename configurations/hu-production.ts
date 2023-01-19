import { Configuration } from '../types';
import { config as huStaging } from './hu-staging';

const accountSid = 'AC378f491732fc29691b4126a2287cea9a';
const flexFlowSid = 'FO3fe954827eb10fa9a9b907f5e5be9ae4';

export const config: Configuration = {
  ...huStaging,
  checkOpenHours: true,
  accountSid,
  flexFlowSid,
};
