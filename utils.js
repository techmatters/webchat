const fs = require('fs');

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
 * Checks that CONFIG var corresponds to an existing file, and copies it to /src'.
 * Otherwise, throws an error.
 * @param {string} config
 */
function setConfigFile(config) {
  const src = `configurations/${config}.ts`;
  if (fs.existsSync(src)) {
    fs.copyFile(src, `src/config.ts`, (error) => {
      if (error) {
        throw error;
      } else {
        console.log(`src/config.ts filled with config file ${config}`);
      }
    });
  } else {
    throw new Error(`file config for ${config} not found!`);
  }
}

module.exports = {
  checkMODE,
  setConfigFile,
};
