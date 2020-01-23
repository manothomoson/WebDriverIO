const path = require('path');
const mkdirp = require('mkdirp');
const glob = require('glob').sync;
const commands = require('./test/support/commands');
const users = require('./test/resources/users');
const data = require('./test/resources/data');
const pathToDownload = path.resolve('chromeDownloads');

exports.config = {
  //

  specs: [
    // './test/features/loginFunctionality.feature',
    './test/features/documentSearch.feature'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 5,
  //
  users: users,
  data: data,

  capabilities: [{

    browserName: 'chrome',
    chromeOptions: {
      prefs: {

        "download.prompt_for_download": "false",

        "download.default_directory": pathToDownload,

        "download.directory_upgrade": "true",

        "download.extensions_to_open": "",

      }
    }
    // browserName: '414px',
    // isMobile: true,
    // chromeOptions: {
    // args: ['--window-size=414,736']
    //   }
  }],

  sync: true,
  //

  logLevel: 'error',
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './results/screenshots/',
  //
  // Set a base URL in order to shorten url command calls. If your url
  // parameter starts with "/", then the base url gets prepended.
  baseUrl: 'https://staging.standardregister.com/NIH/Login.aspx',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 30000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  services: ['selenium-standalone'],

  framework: 'cucumber',

  cucumberOpts: {
    compiler: ['js:babel-core/register'],
    timeout: 120000,
    require: glob(path.join(__dirname, '/test/steps/*.steps.js')),
    ignoreUndefinedDefinitions: false,
    snippetSyntax: 'synchronous',
    snippets: false
  },
  reporters: [
    'spec', 'allure'
    // 'junit', 'dot', 'allure'
  ],
  reporterOptions: {
    junit: {
      outputDir: './results/junit'
    },
    allure: {
      outputDir: 'allure-results'
    }
  },

  /**
    * hooks
    */
  before: () => {
    mkdirp.sync(browser.options.screenshotPath);
    browser.addCommand('getScreenshot', commands.getScreenshot.bind(browser));
    browser.addCommand('faker', commands.faker.bind(browser));
    browser.timeouts('implicit', 5000);
  },

  beforeScenario: () => {
    browser.url('/');

  },

  afterStep: (result) => {
    if (result.status === 'failed') {
      browser.getScreenshot(result.step);
      browser.reload();
    }
  }

};
