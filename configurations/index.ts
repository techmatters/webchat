import { checkCONFIG } from '../utils';
import { Configuration } from './types';
import { config as dev } from './dev';
import { config as beta } from './beta';
import { config as zmStaging } from './zm-staging';
import { config as zmProd } from './zm-prod';
import { config as zaStaging } from './za-staging';
import { config as zaProd } from './za-prod';

const rawConfig = webpack.env.CONFIG;
checkCONFIG(rawConfig);

type PresetConfig = 'dev' | 'beta' | 'zm-staging' | 'zm-prod' | 'za-staging' | 'za-prod';
const config = rawConfig as PresetConfig;

type ConfigMap = {
  [config in PresetConfig]: Configuration;
};

const configMap: ConfigMap = {
  'dev': dev,
  'beta': beta,
  'zm-staging': zmStaging,
  'zm-prod': zmProd,
  'za-staging': zaStaging,
  'za-prod': zaProd,
};

export const getCurrentConfig = (): Configuration => configMap[config];
