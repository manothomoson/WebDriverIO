const Page = require('./page');
const should = require('should');

class UserProfilePage extends Page {

  get userName() { return $('#ctl00_ContentPlaceHolder1_txtUsername'); }
  get password() { return $('#ctl00_ContentPlaceHolder1_txtPassword'); }
  get loginBtn() { return $('#ctl00_ContentPlaceHolder1_btnLogin'); }
  get userProfileBtn() { return $('a[href="/Portal/Profile/Profile.aspx"]'); }
  get updateFirstName() { return $('#ctl00_ContentPlaceHolder1_txtFirstName'); }
  get updateLastName() { return $('#ctl00_ContentPlaceHolder1_txtLastName'); }
  get updateEmailAddress() { return $('#ctl00_ContentPlaceHolder1_txtEmailAddress'); }
  get clickSaveBtn() { return $('#ctl00_ContentPlaceHolder1_btn_SaveProfile'); }
  get clickOkBtn() { return $('//span[contains(text(),"OK")]'); }

  clickUserProfileBtn() {
    this.userProfileBtn.waitForVisible();
    this.userProfileBtn.click();
  }

  verifyUserProfilePage() {
    this.userProfileBtn.waitForVisible();
    this.userProfileBtn.click();
    this.updateFirstName.waitForVisible();
    this.updateFirstName.isVisible().should.be.true('This is not User Profile page');
  }

  updateProfileInfoForFirstName() {
    this.updateFirstName.waitForVisible();
    this.updateFirstName.click();
    const currentFName = this.updateFirstName.getAttribute('value');
    const updateFName = `${currentFName  }1`;
    this.updateFirstName.setValue(updateFName);
    this.clickSaveBtn.click();
    browser.pause(2000);
    this.clickOkBtn.waitForVisible();
    this.clickOkBtn.click();
    browser.pause(2000);
    const updatedFirstName = this.updateFirstName.getAttribute('value');
    updatedFirstName.should.containEql(updateFName);

  }

  updateProfileInfoForLastName() {
    this.updateLastName.waitForVisible();
    this.updateLastName.click();
    const currentLName = this.updateLastName.getAttribute('value');
    const updateLName = `${currentLName  }1`;
    this.updateLastName.setValue(updateLName);
    this.clickSaveBtn.click();
    this.clickOkBtn.waitForVisible();
    this.clickOkBtn.click();
    browser.pause(2000);
    const updatedLastName = this.updateLastName.getAttribute('value');
    updatedLastName.should.containEql(updateLName);
  }

  updateProfileInfoForEmail() {
    this.updateEmailAddress.waitForVisible();
    this.updateEmailAddress.click();
    const currentEmail = this.updateEmailAddress.getAttribute('value');
    const updateEmail = `${currentEmail  }1`;
    this.updateEmailAddress.setValue(updateEmail);
    this.clickSaveBtn.click();
    this.clickOkBtn.waitForVisible();
    this.clickOkBtn.click();
    browser.pause(2000);
    const updatedEmail = this.updateEmailAddress.getAttribute('value');
    updatedEmail.should.containEql(updateEmail);
  }
}
export default new UserProfilePage();
