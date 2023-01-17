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
    'as-development',
    'test-staging',
    'as-staging',
    'zm-staging',
    'zm-production',
    'za-staging',
    'za-production',
    'et-staging',
    'mw-staging',
    'et-production',
    'mw-production',
    'jm-staging',
    'jm-production',
    'ca-staging',
    'uk-staging',
    'e2e-development',
    'co-staging',
    'co-productionuction',
    'ro-staging',
    'hu-staging',
    'hu-production',
    'cl-staging',
    'zw-staging',
    'pl-staging',
    'mt-staging',
    'mt-production',
  ];
  const isConfigSet = typeof config !== 'undefined' && presets.includes(config);

  if (!isConfigSet) {
    throw new Error(`Please set env var CONFIG to ${presets.join(', ')}`);
  }
}

module.exports = {
  checkMODE,
  checkCONFIG,
};
