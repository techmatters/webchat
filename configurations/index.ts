import { checkCONFIG } from '../utils';
import { Configuration } from './types';
import { config as dev } from './dev';
import { config as testStaging } from './test-staging';
import { config as beta } from './beta';
import { config as zmStaging } from './zm-staging';
import { config as zmProd } from './zm-prod';
import { config as zaStaging } from './za-staging';
import { config as zaProd } from './za-prod';
import { config as etStaging } from './et-staging';
import { config as mwStaging } from './mw-staging';

const rawConfig = webpack.env.CONFIG;
checkCONFIG(rawConfig);

type PresetConfig = 'dev' | 'test-staging' | 'beta' | 'zm-staging' | 'zm-prod' | 'za-staging' | 'za-prod' | 'et-staging' | 'mw-staging';
const config = rawConfig as PresetConfig;

type ConfigMap = {
  [config in PresetConfig]: Configuration;
};

const configMap: ConfigMap = {
  'dev': dev,
  'test-staging': testStaging,
  'beta': beta,
  'zm-staging': zmStaging,
  'zm-prod': zmProd,
  'za-staging': zaStaging,
  'za-prod': zaProd,
  'et-staging': etStaging,
  'mw-staging': mwStaging,
};

export const getCurrentConfig = (): Configuration => configMap[config];
