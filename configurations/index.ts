import { checkCONFIG } from '../utils';
import { Configuration } from './types';
import { config as dev } from './dev';
import { config as beta } from './beta';
import { config as zmStaging } from './zm-staging';
import { config as zmProd } from './zm-prod';

const rawConfig = webpack.env.CONFIG;
checkCONFIG(rawConfig);

type PresetConfig = 'dev' | 'beta' | 'zm-staging' | 'zm-prod';
const config = rawConfig as PresetConfig;

type ConfigMap = {
  [config in PresetConfig]: Configuration;
};

const configMap: ConfigMap = {
  'dev': dev,
  'beta': beta,
  'zm-staging': zmStaging,
  'zm-prod': zmProd,
};

export const getCurrentConfig = (): Configuration => configMap[config];
