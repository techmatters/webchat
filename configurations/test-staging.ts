import { Configuration } from './types';
import { config as dev } from './za-staging';

const accountSid = 'AC4446284f2248744526e50cb3f135dd7e';
const flexFlowSid = 'FO464670e049a4da4c18939fce0515aa74';

export const config: Configuration = {
  ...dev,
  accountSid,
  flexFlowSid,
};