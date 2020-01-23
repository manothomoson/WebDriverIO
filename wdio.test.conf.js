
const { config } = require('./wdio.conf');

/**
 * custom options for test
 *
 * this file is for implementing and debugging locally
 *
 */

config.baseUrl = 'https://uat-superior.taylorcommunications.com/Portal/Signin.aspx';

// https://uat-superior.taylorcommunications.com/Portal/Signin.aspx
/**
 * path/to/.feature
 */

config.specs = [ './test/features/userProfile.feature',
  './test/features/admin.feature',
  './test/features/documentSearch.feature',
  './test/features/superiorEnergyAPI.feature'];

// config.specs = ['./test/features/documentSearch.feature'];

// , './test/features/marketingStatement.feature'
/**
 * selenium config
 *
 * browserName: browser we connect to, can be desktop browser or resolution by width
 * chromeOptions: Useful for setting browser configuration, EG: '--window-size=<width>,<height>'
 *
 */

config.services = ['selenium-standalone'];
config.seleniumLogs = './logs/selenium.log';
config.maxInstances = 1;

exports.config = config;
 