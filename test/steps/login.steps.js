const page = require('../../src/pages/login.page');

const { Given, When, Then } = require('cucumber');

Given('I have logged in as {string}', (userGroup) => {
  page.login(userGroup.replace(/"/g, ''));
});



Given('I have logged in with incorrect password {string}', (IncorrectPassword) => {
  page.incorrectPassword(IncorrectPassword.replace(/"/g, ''));
});

When('Navigate to Profile tab', () => {
  page.goUserProfileTab();
});

Then('I change new password as {string}', (newPassword) => {
  page.changePassword(newPassword.replace(/"/g, ''));
});

Then('I have no access to the site', () => {
  page.assertWarningMessage();
});

Then('I have access to the site', () => {
  page.verifyHomePage();
});

Then('Signout application', () => {
  page.signOut();
});
