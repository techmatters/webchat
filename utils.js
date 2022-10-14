/**
 * Checks that MODE var is 'development' or 'production'.
 * Otherwise, throws an error.
 * @param {string} mode
 */
function checkMODE(mode) {
  const isModeSet = mode === 'development' || mode === 'production';

  if (!isModeSet) {
    throw new Error('Please set env var MODE to development or production');
  }
}

/**
 * Checks that CONFIG var is 'dev', 'beta' or 'zm-staging'.
 * Otherwise, throws an error.
 * @param {string} config
 */
function checkCONFIG(config) {
  const presets = [
    'dev',
    'test-staging',
    'beta',
    'zm-staging',
    'zm-prod',
    'za-staging',
    'za-prod',
    'et-staging',
    'mw-staging',
    'et-prod',
    'mw-prod',
    'jm-staging',
    'jm-prod',
    'ca-staging',
    'uk-staging',
    'e2e-dev',
    'co-staging',
    'co-production',
    'ro-staging',
    'hu-staging',
    'hu-prod',
    'cl-staging',
    'zw-staging',
    'pl-staging'
  ];
  const isConfigSet = typeof config !== 'undefined' && presets.includes(config);

  if (!isConfigSet) {
    throw new Error(`Please set env var CONFIG to ${presets.join(', ')}`);
  }
}

module.exports = {
  checkMODE,
  checkCONFIG
};
