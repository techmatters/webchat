import { Configuration } from './types';
import { config as mtStaging } from './mt-staging';

const accountSid = 'AC7854f6126459347434a8e659295ebb79';
const flexFlowSid = 'FO46d948dc907e2e5d36b07a63bd1f0052';

export const config: Configuration = {
  ...mtStaging,
  accountSid,
  flexFlowSid,
};
