const page = require('../../src/pages/admin.page');

const { Given, When, Then } = require('cucumber');

When('Navigate to admin tab', () => {
  page.clickUserAdminTab();
});

Given('logged in as new created user {string}', (userGroup) => {
  page.loginNewUser(userGroup.replace(/"/g, ''));
});

Then('I have create new user {string}', (CreateNewUser) => {
  page.createNewUser(CreateNewUser.replace(/"/g, ''));
});

Then('I have lock user account {string}', (LockUserAccount) => {
  page.lockUserAccount(LockUserAccount.replace(/"/g, ''));
});

Then('I have unlock user account {string}', (UnlockUserAccount) => {
  page.unlockUserAccount(UnlockUserAccount.replace(/"/g, ''));
});

Then('I have remove a user account {string}', (RemoveUserAccount) => {
  page.removeUserAccount(RemoveUserAccount.replace(/"/g, ''));
});

When('I change admin result page size as {string}', (pageSize) => {
  page.changePageSize(pageSize.replace(/"/g, ''));
});

Then('I edit the user created {string}', (userNameToEdit) => {
  page.EditCreatedUser(userNameToEdit.replace(/"/g, ''));
});

Then('I signout from application', () => {
  page.signOut();
});

Then('assert password is encrypted', () => {
  page.assertPasswordEncrypts();
});

Then('save edit user information', () => {
  page.saveEditUserInfo();
});

Then('I update password from EditUserInfo page as {string}', (updatePassword) => {
  page.updatePasswordFromEditUserPage(updatePassword.replace(/"/g, ''));
});

When('Navigate to IP Admin from Admin tab', () => {
  page.clickIPAdminTab();
});

Then('I have create new ip address {string}', (IPAddress) => {
  page.enterIPAddress(IPAddress.replace(/"/g, ''));
});

Then('Verify the created IP address {string}', (IPAddress) => {
  page.verifyCreatedIPAddress(IPAddress.replace(/"/g, ''));
});

Then('Edit the created IP address {string}', (IPAddress) => {
  page.editCreatedIPAddress(IPAddress.replace(/"/g, ''));
});

Then('Verify the updated IP address {string}', (IPAddress) => {
  page.verifyEditedIPAddress(IPAddress.replace(/"/g, ''));
});

Then('Delete the created IP address {string}', (IPAddress) => {
  page.deleteCreatedIPAddress(IPAddress.replace(/"/g, ''));
});

Then('Verify the deleted IP address {string}', (IPAddress) => {
  page.verifyDeletedIPAddress(IPAddress.replace(/"/g, ''));
});

Then('Select Client administration as Publish Email Address', () => {
  page.clickPublishEmailAdd();
});

Then('I have insert publish email address {string}', (PublishEmailAddress) => {
  page.enterEmailAddress(PublishEmailAddress.replace(/"/g, ''));
});

Then('Verify the published email address {string}', (PublishEmailAddress) => {
  page.verifyEmailAddress(PublishEmailAddress.replace(/"/g, ''));
});

Then('Edit the published Email address {string}', (PublishEmailAddress) => {
  page.editCreatedEmailAddress(PublishEmailAddress.replace(/"/g, ''));
});

Then('Verify the edited Email published address {string}', (PublishEmailAddress) => {
  page.verifyEditedEmailAddress(PublishEmailAddress.replace(/"/g, ''));
});

Then('Delete the Email published address {string}', (PublishEmailAddress) => {
  page.deleteCreatedEmailAddress(PublishEmailAddress.replace(/"/g, ''));
});

Then('Verify the deleted Email published address {string}', (PublishEmailAddress) => {
  page.verifyDeletedEmailAddress(PublishEmailAddress.replace(/"/g, ''));
});
