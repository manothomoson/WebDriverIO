const Page = require('./page');
const loginPage = require('./login.page');
const should = require('should');
var fs = require("fs");
var rndmMessageCode;

class AdminPage extends Page {

  get adminTab() { return $('//span[contains(text(),"Admin")]'); }
  get userAdmin() { return $ ('//span[contains(text(),"User Admin")]'); }
  get ipAdmin() { return $ ('//span[contains(text(),"IP Admin")]'); }
  get createUserAccBtn() { return $ ('//span[contains(text(),"Create User Account")]'); }
  get chgPwdWindow() { return $('#RadWindowWrapper_ctl00_RadWindow1'); }
  get userName() { return $('#ctl00_ContentPlaceHolder1_txtUName'); }
  get firstName() { return $('#ctl00_ContentPlaceHolder1_txtFName'); }
  get lastName() { return $('#ctl00_ContentPlaceHolder1_txtLName'); }
  get role() { return $('#ctl00_ContentPlaceHolder1_ddlLevels_Input'); }
  get wfoAdminRole() { return $('//li[contains(text(),"WFOAdmin")]'); }
  get workFlowOneApproverRole() { return $('//li[contains(text(),"WorkFlowOne Approver")]'); }
  get systemAdminRole() { return $('//li[contains(text(),"System Administrator")]'); }
  get itAdminRole() { return $('//li[contains(text(),"IT Administrator")]'); }
  get marketingAdminRole() { return $('//li[contains(text(),"Marketing Administrator")]'); }
  get reviewerRole() { return $('//li[contains(text(),"Reviewer")]'); }
  get basicRole() { return $('//li[contains(text(),"Basic")]'); }
  get password() { return $('#ctl00_ContentPlaceHolder1_txtPassword'); }
  get confirmPassword() { return $('#ctl00_ContentPlaceHolder1_txtConfPass'); }
  get email() { return $('#ctl00_ContentPlaceHolder1_txtEmail'); }
  get accLockedCheckBoxBtn() { return $('#ctl00_ContentPlaceHolder1_acctLocked'); }
  get saveBtn() { return $('#ctl00_ContentPlaceHolder1_btn_Save'); }
  // get okBtn() { return $ ('#RadToolTipWrapper_ctl00_ContentPlaceHolder1_MsgBox1_radToolTipMsgBox #ctl00_ContentPlaceHolder1_MsgBox1_btnOk'); }
  get okBtn() { return $ ('//span[contains(text(),"OK")]'); }
  get closeBtn() { return $('//span[contains(text(),"Close")]'); }
  get pageSize() { return $('#ctl00_ContentPlaceHolder1_UsersGrid_ctl00_ctl03_ctl01_ChangePageSizeTextBox'); }
  get changePageSizeBtn() { return $('#ctl00_ContentPlaceHolder1_UsersGrid_ctl00_ctl03_ctl01_ChangePageSizeLinkButton'); }
  get okBtnforRemoveUser() { return $('//span[contains(text(),"OK")]'); }
  get yesBtn() { return $('//span[contains(text(),"Yes")]'); }
  get cancelBtnforRemoveUser() { return $('//span[contains(text(),"Cancel")]'); }
  get signOutBtn() { return $('a[href*="LogOut"]'); }
  get signInBtn() { return $('#ctl00_ContentPlaceHolder1_btnLogin'); }

  generateRandomNumber() {
    rndmMessageCode = (Math.floor((Math.random() * 10000) + 101));
    return rndmMessageCode;
  }

  updatePasswordFromEditUserPage(updatePassword){
    const users = browser.options.users[updatePassword];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    browser.frame('RadWindow1');
    this.password.setValue(this.user.newPwd);
    this.confirmPassword.setValue(this.user.confirmNewPwd);
    this.saveBtn.click();
    this.okBtn.waitForVisible();
    this.okBtn.click();
    browser.frameParent();
  }

  assertPasswordEncrypts(){
    browser.frame('RadWindow1');
    const pwdTxt = this.password.getAttribute('value');
    pwdTxt.length.should.be.above(50, 'Password is not encrypted Or Encrypted Password length is below 50');
    browser.frameParent();
  }

  saveEditUserInfo(){
    browser.frame('RadWindow1');
    this.saveBtn.click();
    this.okBtn.click();
    browser.frameParent();
    browser.pause(2000);
  }

  signOut(){
    this.signOutBtn.waitForVisible();
    this.signOutBtn.click();
    this.signInBtn.waitForVisible();
    this.signInBtn.isVisible().should.be.true('Failed to sign out');
  }

  // changePageSize(pageSize){
  //   this.pageSize.waitForVisible();
  //   this.pageSize.setValue(pageSize);
  //   this.changePageSizeBtn.click();
  //   browser.pause(3000);
  // }

  //ip Admin
  get addNewBtn() { return $('#ctl00_ContentPlaceHolder1_btnAddNewValue'); }
  get insertIPvalue() { return $('#ctl00_ContentPlaceHolder1_txtValue'); }
  get insertIPUpdateBtn() { return $('#ctl00_ContentPlaceHolder1_btnInsertValue'); }
  get okBtnForIPUpdate() { return $('#ctl00_ContentPlaceHolder1_MsgBox1_btnOk'); }
  get okBtnForDeleteIP() { return $('//span[text()="OK"]'); }
  get cancelBtnForDeleteIP() { return $('//span[text()="Cancel"]'); }
  get publishEmailAdd() { return $('//li[contains(text(),"Publish Email Addresses")]'); }
  get clientAdminDropDown() { return $('#ctl00_ContentPlaceHolder1_rcbClientAdminTypes_Input'); }
  get pageSizeList() { return $('#ctl00_ContentPlaceHolder1_UsersGrid_ctl00_ctl03_ctl01_PageSizeComboBox_Arrow'); }

  clickUserAdminTab(){
    this.adminTab.waitForVisible();
    browser.pause(1000);
    this.adminTab.click();
    this.userAdmin.waitForVisible();
    browser.pause(1000);
    this.userAdmin.click();
  }

  clickIPAdminTab(){
    this.adminTab.waitForVisible();
    this.adminTab.click();
    this.ipAdmin.waitForVisible();
    this.ipAdmin.click();
  }

  clickPublishEmailAdd(){
    this.clientAdminDropDown.waitForVisible();
    this.clientAdminDropDown.click();
    this.publishEmailAdd.waitForVisible();
    this.publishEmailAdd.click();
    browser.pause(2000);
  }

  selectRole(role) {
    browser.pause(3000);
    const locator = `//li[contains(text(),"${role}")]`;
    browser.click(locator);
    browser.pause(5000);
  }

  clickEditLink(editLink){
    browser.pause(3000);
    const locator = `//td[contains(text(),"${editLink}")]/ancestor::tr[contains(@id,"ctl00_ContentPlaceHolder1_UsersGrid_ctl00")]/td/input[@title="Edit"]`;
    browser.scroll(locator);
    browser.click(locator);
    browser.pause(5000);
  }

  removeUserLink(removeLink){
    browser.pause(3000);
    const locator = `//td[contains(text(),"${removeLink}")]/ancestor::tr[contains(@id,"ctl00_ContentPlaceHolder1_UsersGrid_ctl00")]/td/input[contains(@id,"RemoveUser")]`;
    browser.click(locator);
    browser.pause(5000);
  }

  EditCreatedUser(userNameToEdit){
    const users = browser.options.users[userNameToEdit];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    const FinalUserName = this.user.username+rndmMessageCode;
    this.changePageSize(this.user.pagesizenum);
    this.clickEditLink(FinalUserName);
  }

  loginNewUser(CreateNewUser){
    loginPage.navigate();
    const users = browser.options.users[CreateNewUser];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    const FinalUserName = this.user.username+rndmMessageCode;
    loginPage.userName.setValue(FinalUserName);
    loginPage.password.setValue(this.user.password);
    loginPage.loginBtn.click();
  }

  createNewUser(CreateNewUser) {
    const users = browser.options.users[CreateNewUser];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    const FinalUserName = this.user.username+this.generateRandomNumber();
    this.createUserAccBtn.waitForVisible();
    this.createUserAccBtn.click();
    // this.chgPwdWindow.click();
    browser.frame('RadGenericWindow');
    this.userName.waitForVisible();
    this.userName.setValue(FinalUserName);
    this.firstName.setValue(this.user.firstname);
    this.lastName.setValue(this.user.lastname);
    this.role.click();
    this.selectRole(this.user.role);
    this.password.setValue(this.user.password);
    this.confirmPassword.setValue(this.user.confirmPwd);
    this.email.setValue(this.user.email);
    this.saveBtn.click();
    browser.pause(3000);
    this.okBtn.waitForVisible();
    this.okBtn.click();
    browser.pause(3000);
    browser.frameParent();
    this.closeBtn.click();
  }

  changePageSize(size) {
    // this.resultsContainer.waitForVisible();
    this.pageSizeList.click();
    browser.pause(5000);
    const wE_listPageSize = `.rcbItem=${size}`;
    browser.element(wE_listPageSize).scroll();
    browser.click(wE_listPageSize);
    browser.pause(5000);
    // this.resultsContainer.waitForVisible();
  }

  lockUserAccount(LockUserAccount){
    const users = browser.options.users[LockUserAccount];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    this.changePageSize(this.user.pagesizenum);
    this.clickEditLink(this.user.username);
    browser.pause(3000);
    // this.chgPwdWindow.click();
    browser.frame('RadGenericWindow');
    this.accLockedCheckBoxBtn.waitForVisible();
    this.accLockedCheckBoxBtn.click();
    this.saveBtn.click();
    browser.pause(3000);
    this.okBtn.waitForVisible();
    this.okBtn.click();
    browser.pause(3000);
    browser.frameParent();
    this.closeBtn.click();
  }

  unlockUserAccount(UnlockUserAccount){
    const users = browser.options.users[UnlockUserAccount];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    this.changePageSize(this.user.pagesizenum);
    this.clickEditLink(this.user.username);
    browser.pause(3000);
    // this.chgPwdWindow.click();
    browser.frame('RadGenericWindow');
    this.accLockedCheckBoxBtn.waitForVisible();
    this.accLockedCheckBoxBtn.click();
    this.saveBtn.click();
    this.okBtn.waitForVisible();
    this.okBtn.click();
    browser.pause(3000);
    browser.frameParent();
    this.closeBtn.click();
  }

  removeUserAccount(RemoveUserAccount){
    const users = browser.options.users[RemoveUserAccount];
    const { browserName } = browser.desiredCapabilities;
    super.user = users[browserName];
    // this.pageSize.waitForVisible();
    // this.pageSize.setValue(this.user.pagesizenum);
    // this.changePageSizeBtn.click();
    this.changePageSize(this.user.pagesizenum);
    browser.pause(3000);
    this.removeUserLink(this.user.username);
    browser.pause(2000);
    this.yesBtn.click();
    browser.pause(2000);
    this.okBtnforRemoveUser.waitForVisible();
    this.okBtnforRemoveUser.click();
  }

  enterIPAddress(IPAddress){
    const ipvalue = browser.options.users[IPAddress];
    // const { browserName } = browser.desiredCapabilities;
    // super.user = users[browserName];
    this.addNewBtn.waitForVisible();
    this.addNewBtn.click();
    browser.pause(2000);
    browser.frame('RadWindow1');
    this.insertIPvalue.waitForVisible();
    this.insertIPvalue.setValue(ipvalue['ip']);
    this.insertIPUpdateBtn.click();
    browser.pause(2000);
    this.okBtnForIPUpdate.waitForVisible();
    this.okBtnForIPUpdate.click();

  }

  verifyCreatedIPAddress(IPAddress) {
    const ipvalue = browser.options.users[IPAddress];
    const verifyIPLocator = '//td[text()="'+ipvalue['ip']+'"]';
    browser.waitForVisible(verifyIPLocator);
    const textIP= browser.getText(verifyIPLocator);
    console.log('textIP'+ textIP);
    browser.pause(2000);
    textIP.should.be.eql(ipvalue['ip'], 'Ip address is not equal to the created newly ip');
  }

  editCreatedIPAddress(IPAddress) {
    const ipvalue = browser.options.users[IPAddress];
    const editLocator = '//tr[td[text()="'+ipvalue['ip']+'"]]//input[@value="Edit"]';
    browser.waitForVisible(editLocator);
    browser.click(editLocator);
    browser.pause(2000);
    browser.frame('RadWindow1');
    this.insertIPvalue.waitForVisible();
    this.insertIPvalue.setValue(ipvalue['updateNewIPValue']);
    this.insertIPUpdateBtn.click();
    browser.pause(2000);
    this.okBtnForIPUpdate.waitForVisible();
    this.okBtnForIPUpdate.click();
  }

  verifyEditedIPAddress(IPAddress) {
    const ipvalue = browser.options.users[IPAddress];
    const verifyIPLocator = '//td[text()="'+ipvalue['updateNewIPValue']+'"]';
    browser.waitForVisible(verifyIPLocator);
    const textIP= browser.getText(verifyIPLocator);
    console.log('textIP'+ textIP);
    browser.pause(2000);
    textIP.should.be.eql(ipvalue['updateNewIPValue'], 'Ip address is not equal to the updated ip');
  }

  deleteCreatedIPAddress(IPAddress) {
    const ipvalue = browser.options.users[IPAddress];
    const deleteLocator = '//tr[td[text()="'+ipvalue['updateNewIPValue']+'"]]//input[@value="Delete"]';
    browser.waitForVisible(deleteLocator);
    browser.click(deleteLocator);
    browser.pause(2000);
    this.okBtnForDeleteIP.click();

  }

  verifyDeletedIPAddress(IPAddress) {
    const ipvalue = browser.options.users[IPAddress];
    // const verifyIPLocator = '//td[text()="'+ipvalue['updateNewIPValue']+'"]';
    const verifyIPLocator = '//tr[contains(@id,"ctl00_ContentPlaceHolder1_rgClientAdmin_ctl00")]/td[2]';
    browser.waitForVisible(verifyIPLocator);
    const textIP= browser.getText(verifyIPLocator);
    console.log('textIP '+ textIP);
    browser.pause(2000);
    textIP.should.not.containDeep(ipvalue['updateNewIPValue'], 'Ip address is not deleted');
  }

  enterEmailAddress(PublishEmailAddress){
    const emailvalue = browser.options.users[PublishEmailAddress];
    // const { browserName } = browser.desiredCapabilities;
    // super.user = users[browserName];
    this.addNewBtn.waitForVisible();
    this.addNewBtn.click();
    browser.pause(2000);
    browser.frame('RadWindow1');
    this.insertIPvalue.waitForVisible();
    this.insertIPvalue.setValue(emailvalue['Email']);
    this.insertIPUpdateBtn.click();
    browser.pause(2000);
    this.okBtnForIPUpdate.waitForVisible();
    this.okBtnForIPUpdate.click();

  }

  verifyEmailAddress(PublishEmailAddress) {
    const emailvalue = browser.options.users[PublishEmailAddress];
    const verifyIPLocator = '//td[text()="'+emailvalue['Email']+'"]';
    browser.waitForVisible(verifyIPLocator);
    const textIP= browser.getText(verifyIPLocator);
    console.log('textIP'+ textIP);
    browser.pause(2000);
    textIP.should.be.eql(emailvalue['Email'], 'Email address is not equal to the created newly email');
  }

  editCreatedEmailAddress(PublishEmailAddress) {
    const emailvalue = browser.options.users[PublishEmailAddress];
    const editLocator = '//tr[td[text()="'+emailvalue['Email']+'"]]//input[@value="Edit"]';
    browser.waitForVisible(editLocator);
    browser.click(editLocator);
    browser.pause(2000);
    browser.frame('RadWindow1');
    this.insertIPvalue.waitForVisible();
    this.insertIPvalue.setValue(emailvalue['updateNewEmail']);
    this.insertIPUpdateBtn.click();
    browser.pause(2000);
    this.okBtnForIPUpdate.waitForVisible();
    this.okBtnForIPUpdate.click();
  }

  verifyEditedEmailAddress(PublishEmailAddress) {
    const emailvalue = browser.options.users[PublishEmailAddress];
    const verifyIPLocator = '//td[text()="'+emailvalue['updateNewEmail']+'"]';
    browser.waitForVisible(verifyIPLocator);
    const textIP= browser.getText(verifyIPLocator);
    console.log('textIP'+ textIP);
    browser.pause(2000);
    textIP.should.be.eql(emailvalue['updateNewEmail'], 'Email address is not equal to the updated email');
  }

  deleteCreatedEmailAddress(PublishEmailAddress) {
    const emailvalue = browser.options.users[PublishEmailAddress];
    const deleteLocator = '//tr[td[text()="'+emailvalue['updateNewEmail']+'"]]//input[@value="Delete"]';
    browser.waitForVisible(deleteLocator);
    browser.click(deleteLocator);
    browser.pause(2000);
    this.okBtnForDeleteIP.click();

  }

  verifyDeletedEmailAddress(PublishEmailAddress) {
    const emailvalue = browser.options.users[PublishEmailAddress];
    // const verifyIPLocator = '//td[text()="'+ipvalue['updateNewIPValue']+'"]';
    const verifyIPLocator = '//tr[contains(@id,"ctl00_ContentPlaceHolder1_rgClientAdmin_ctl00")]/td[2]';
    browser.waitForVisible(verifyIPLocator);
    const textIP= browser.getText(verifyIPLocator);
    console.log('textIP '+ textIP);
    browser.pause(2000);
    textIP.should.not.containDeep(emailvalue['updateNewEmail'], 'Email address is not deleted');
  }

}

export default new AdminPage();
