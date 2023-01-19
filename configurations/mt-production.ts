import { Configuration } from '../types';
import { config as mtStaging } from './mt-staging';

const accountSid = 'AC7854f6126459347434a8e659295ebb79';
const flexFlowSid = 'FO10f415b11f07012928cf198fac34f657';

export const config: Configuration = {
  ...mtStaging,
  accountSid,
  flexFlowSid,
};
