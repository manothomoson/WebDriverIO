const Page = require('./page');

class LoginPage extends Page {

  get userName() { return $('#ctl00_ContentPlaceHolder1_txtUsername'); }
  get password() { return $('#ctl00_ContentPlaceHolder1_txtPassword'); }
  get loginBtn() { return $('#ctl00_ContentPlaceHolder1_btnLogin'); }
  get warningMsg() { return $('#ctl00_ContentPlaceHolder1_MsgBox1_btnOk'); }
  get userProfileTab() { return $('a[href="/NIH/Profile/Profile.aspx"]'); }
  get changePwdLink() { return $('#ctl00_ContentPlaceHolder1_lnkBtnChangePassword'); }
  get chgPwdWindow() { return $('#RadWindowWrapper_ctl00_RadWindow1'); }
  get oldPwd() { return $('#ctl00_ContentPlaceHolder1_txtOldPass'); }
  get newPwd() { return $('#ctl00_ContentPlaceHolder1_txtNewPass'); }
  get confirmNewPwd() { return $('#ctl00_ContentPlaceHolder1_txtNewPassConfirm'); }
  get clickSaveBtn() { return $('#ctl00_ContentPlaceHolder1_OkButton'); }
  get okBtn() { return $('#ctl00_ContentPlaceHolder1_MsgBox1_btnOk'); }
  get clickCancelBtn() { return $('#ctl00_ContentPlaceHolder1_btnCancel'); }
  get documentSearchBtn() { return $('a[href^="/NIH/Search/Search.aspx"]'); }
  get signOutBtn() { return $('//a[@href="/Portal/LogOut.aspx"]'); }

  constructor() {
    super();
    this.href = '';
  }

  trait() {
    super.trait(this.href);
  }

  navigate() {
    super.navigate(this.href);
    this.trait();
  }

  login(username) {
    this.navigate();
    const users = browser.options.users[username];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    this.userName.setValue(this.user.username);
    this.password.setValue(this.user.password);
    this.loginBtn.click();
  }

  incorrectPassword(userGroup) {
    this.navigate();
    const users = browser.options.users[userGroup];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    this.userName.waitForVisible();
    this.userName.setValue(this.user.username);
    this.password.setValue(this.user.password);
    this.loginBtn.click();
    browser.pause(5000);
  }

  assertWarningMessage(){
    this.warningMsg.waitForVisible();
    this.warningMsg.isVisible().should.not.be.false('Warning message did not appear for incorrect password');
    this.warningMsg.click();
  }

  verifyHomePage(){
    this.documentSearchBtn.waitForVisible();
    this.documentSearchBtn.isVisible().should.be.true('Document Search button is not available');
  }

  goUserProfileTab(){
    this.userProfileTab.waitForVisible();
    this.userProfileTab.click();
  }

  changePassword(ChangePassword) {
    const users = browser.options.users[ChangePassword];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    this.changePwdLink.waitForVisible();
    this.changePwdLink.click();
    this.chgPwdWindow.click();
    browser.frame('RadWindow1');
    this.oldPwd.setValue(this.user.password);
    this.newPwd.setValue(this.user.newPwd);
    this.confirmNewPwd.setValue(this.user.confirmNewPwd);
    this.clickSaveBtn.click();
    this.okBtn.waitForVisible();
    browser.pause(2000);
    this.okBtn.click();
  }

  signOut(){
    const windwHandles = browser.windowHandles();
    browser.window(windwHandles.value[0]);
    this.signOutBtn.waitForVisible();
    this.signOutBtn.click();
  }

}

export default new LoginPage();
