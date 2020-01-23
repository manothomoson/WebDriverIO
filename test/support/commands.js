// commands
const path = require('path');
const faker = require('faker');

module.exports = {

  getScreenshot: function (step) {
    const scenario = step.scenario.name;
    const browser = this.desiredCapabilities.browserName;
    const screenshot = `${browser}.${scenario}.png`;
    const fileName = path.join(this.options.screenshotPath, screenshot);
    this.saveScreenshot(fileName);
  },

  faker: function() {
    const random = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      itemName: faker.lorem.words(4)
    };
    return random;
  }
};
