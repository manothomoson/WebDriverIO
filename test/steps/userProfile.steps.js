const page = require('../../src/pages/userProfile.page');
const { When, Then } = require('cucumber');

When('I navigate to Profile page', () => {
  page.verifyUserProfilePage();
});

Then('I update the user profile information for First Name', () => {
  page.updateProfileInfoForFirstName();
});

Then('I update the user profile information for Last Name', () => {
  page.updateProfileInfoForLastName();
});

Then('I update the user profile information for Email', () => {
  page.updateProfileInfoForEmail();
});
