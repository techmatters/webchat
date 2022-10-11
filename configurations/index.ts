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
import { config as etProd } from './et-prod';
import { config as mwProd } from './mw-prod';
import { config as jmStaging } from './jm-staging';
import { config as jmProd } from './jm-prod';
import { config as caStaging } from './ca-staging';
import { config as ukStaging } from './uk-staging';
import { config as e2eDevelopment } from './e2e-dev';
import { config as coStaging } from './co-staging';
import { config as coProd } from './co-production';
import { config as roStaging } from './ro-staging';
import { config as ukrStaging } from './ukr-staging';
import { config as clStaging } from './cl-staging';
import { config as zwStaging } from './zw-staging'


const rawConfig = webpack.env.CONFIG;
checkCONFIG(rawConfig);

type PresetConfig = 'dev' | 'test-staging' | 'beta' | 'zm-staging' | 'zm-prod' | 'za-staging' | 'za-prod' | 'et-staging' | 'mw-staging' | 'et-prod' | 'mw-prod' | 'jm-staging' | 'jm-prod' | 'ca-staging' | 'uk-staging' | 'e2e-dev' | 'co-staging' | 'co-production' | 'ro-staging' | 'ukr-staging' | 'cl-staging' | 'zw-staging';
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
  'et-prod': etProd,
  'mw-prod': mwProd,
  'jm-staging': jmStaging,
  'jm-prod': jmProd,
  'ca-staging': caStaging,
  'uk-staging': ukStaging,
  'e2e-dev': e2eDevelopment,
  'co-staging': coStaging,
  'co-production': coProd,
  'ro-staging': roStaging,
  'ukr-staging': ukrStaging,
  'cl-staging': clStaging,
  'zw-staging': zwStaging,
  
};

export const getCurrentConfig = (): Configuration => configMap[config];
