/**
 * This file unfortunatelly can't be in typescript, since it's being used
 * in webpack.config.js, and this happens before we translate typescript files.
 * Maybe we can improve this in the future.
 */

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
  const presets = ['dev', 'beta', 'zm-staging', 'zm-prod', 'za-staging', 'za-prod'];
  const isConfigSet = typeof config !== 'undefined' && presets.includes(config);

  if (!isConfigSet) {
    throw new Error(`Please set env var CONFIG to ${presets.join(', ')}`);
  }
}

module.exports = {
  checkMODE,
  checkCONFIG
};
