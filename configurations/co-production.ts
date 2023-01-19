import { Configuration } from '../types';
import { config as coStaging } from './co-staging';

const accountSid = 'AC520ec62dcfa4ab4105c2f5850caf52b0';
const flexFlowSid = 'FOf1ace264485595c61b9d926657c105c0';

export const config: Configuration = {
  ...coStaging,
  checkOpenHours: true,
  accountSid,
  flexFlowSid,
};