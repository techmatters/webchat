import { checkCONFIG } from '../utils';
import { Configuration } from './types';
import { config as asDevelopment } from './dev';
import { config as testStaging } from './test-staging';
import { config as asStaging } from './beta';
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
import { config as huStaging } from './hu-staging';
import { config as huProd } from './hu-prod';
import { config as clStaging } from './cl-staging';
import { config as zwStaging } from './zw-staging';
import { config as plStaging } from './pl-staging';
import { config as mtStaging } from './mt-staging';
import { config as mtProd } from './mt-prod';

const rawConfig = webpack.env.CONFIG;
checkCONFIG(rawConfig);

type PresetConfig =
  | 'as-development'
  | 'test-staging'
  | 'as-staging'
  | 'zm-staging'
  | 'zm-production'
  | 'za-staging'
  | 'za-production'
  | 'et-staging'
  | 'mw-staging'
  | 'et-production'
  | 'mw-production'
  | 'jm-staging'
  | 'jm-production'
  | 'ca-staging'
  | 'uk-staging'
  | 'e2e-development'
  | 'co-staging'
  | 'co-production'
  | 'ro-staging'
  | 'hu-staging'
  | 'hu-production'
  | 'cl-staging'
  | 'zw-staging'
  | 'pl-staging'
  | 'mt-staging'
  | 'mt-production';
const config = rawConfig as PresetConfig;

type ConfigMap = {
  [config in PresetConfig]: Configuration;
};

const configMap: ConfigMap = {
  'as-development': asDevelopment,
  'test-staging': testStaging,
  'as-staging': asStaging,
  'zm-staging': zmStaging,
  'zm-production': zmProd,
  'za-staging': zaStaging,
  'za-production': zaProd,
  'et-staging': etStaging,
  'mw-staging': mwStaging,
  'et-production': etProd,
  'mw-production': mwProd,
  'jm-staging': jmStaging,
  'jm-production': jmProd,
  'ca-staging': caStaging,
  'uk-staging': ukStaging,
  'e2e-development': e2eDevelopment,
  'co-staging': coStaging,
  'co-production': coProd,
  'ro-staging': roStaging,
  'hu-staging': huStaging,
  'hu-production': huProd,
  'cl-staging': clStaging,
  'zw-staging': zwStaging,
  'pl-staging': plStaging,
  'mt-staging': mtStaging,
  'mt-production': mtProd,
};

export const getCurrentConfig = (): Configuration => configMap[config];
