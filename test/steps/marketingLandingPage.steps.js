const page = require('../../src/pages/marketingLandingPage.page');

const { Given, When, Then } = require('cucumber');

When('Click the Landing page tab', () => {
  page.clickLandingPageTab();
});

When('I preview a message from Landing page result table', () => {
  page.clickPreviewIconFromLandingPageTab();
});

When('I navigate to Landing page', () => {
  page.navigateToLandingPage();
});


When('I select a message code {string} from landingPage results', (msgCode) => {
  page.selectMessageCodeFromLandingPage(msgCode.replace(/"/g, ''));
});
