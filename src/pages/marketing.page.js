const Page = require('./page');
const should = require('should');
var rndmMessageCode;
var totalItemsInPage;

class MarketingPage extends Page {
  get fileSettingsTab() { return $('.rmLink > img[src*=movetofolder]'); }
  get viewSamplesBtn() { return $('img[alt="View Samples"]'); }
  get editSampleListBtn() { return $('//span[text()="Edit Sample List"]'); }
  get sampleListCheckBoxes() { return $('//tr[contains(@id,"ctl00_ContentPlaceHolder1_rgDataFiles_ctl00")]/td/input[@type="checkbox"]'); }
  get viewSamplesPopup() { return $('//em[contains(text(),"View Samples")]'); }
  get editSampleListPopup() { return $('//em[contains(text(),"Edit Sample List")]'); }
  get fileProcessedOnLink() { return $('//a[contains(text(),"File processed on")]'); }
  get fileSettingsResultsContainer() { return $('#ctl00_ContentPlaceHolder1_rgDataFiles_ctl00'); }
  get creatingNewMsgTitle() { return $('.rwTitlebarControls em'); }
  get newMessageBtn() { return $('img[alt="Create new message"]'); }
  get messageName() { return $('#ctl00_ContentPlaceHolder1_txtMessageName'); }
  get messageDescription() { return $('#ctl00_ContentPlaceHolder1_txtMessageDescription'); }
  get msgEmailSubject() { return $('#ctl00_ContentPlaceHolder1_txtEmailSubject'); }
  get marketingTab() { return $('.rmLink > img[src*=chart_pie]'); }
  get repositoryMessagesDropdown() { return $('a[href*="RepositoryMessages"]'); }
  get repositoryInsertApprovalDropdown() { return $('a[href*="InsertApproval"]'); }
  get emailTab() { return $('span:contains("Email")'); } //
  get resultTable() { return $('#ctl00_ContentPlaceHolder1_RadMultiPage1'); }
  get resultTableforInsertApproval() { return $('#ctl00_ContentPlaceHolder1_dgApprovals'); }
  get resultTableForEmail() { return $('#ctl00_ContentPlaceHolder1_Inserts'); }
  get previewIconFromEmailResultTable() { return $('#ctl00_ContentPlaceHolder1_Inserts img[onclick*="ShowPreview"]'); }
  get emailPreviewResult() { return $('#ctl00_ContentPlaceHolder1_RadAjaxPanel1'); }
  get previewIconFromStatementsResultTable() { return $('#ctl00_ContentPlaceHolder1_Statements img[onclick*="ShowPreview"]'); }
  get emailAddressEmailPreview() { return $('#ctl00_ContentPlaceHolder1_txtAddresses'); }
  get sendEmailsBtnEmailPreview() { return $('#ctl00_ContentPlaceHolder1_cmdSend'); }
  get okBtnEmailSent() { return $('#ctl00_ContentPlaceHolder1_MsgBox1_btnOk'); }
  get selectRow() { return $('//tr[td[text()="EmailAutomationTest"]]'); }
  get editMessageBtn() { return $('img[alt="Edit selected message"]'); }
  get messageDetailsView() { return $('#ctl00_ContentPlaceHolder1_MessagePropertyView'); }
  get messageStartDate() { return $('#ctl00_ContentPlaceHolder1_radStartDate_dateInput'); }
  get messageEndDate() { return $('#ctl00_ContentPlaceHolder1_radEndDate_dateInput'); }
  get saveMessageBtn() { return $('img[alt="Save Message Properties"]'); }
  get closeMessageDetailsBtn() { return $('.rwCloseButton'); }
  get pageSizeList() { return $('//div[@class="rmpView pageView"]//input[contains(@id,"PageSizeComboBox_Input")]'); }
  get lastPageBtn() { return $('//div[@class="rmpView pageView"]//input[@title="Last Page"]'); }
  get pageSizeListStatements() { return $('#ctl00_ContentPlaceHolder1_Statements_userControl_StatementsGrid_ctl00_ctl03_ctl01_PageSizeComboBox_Input'); }
  get pageSizeListEmail() { return $('#ctl00_ContentPlaceHolder1_Email_userControl_EmailGrid_ctl00_ctl03_ctl01_PageSizeComboBox_Input'); }
  get rulesTabFromMsgDetails() { return $('//span[text()="Rules"]'); }
  get contentTabFromMsgDetails() { return $('//span[text()="Content"]'); }
  get addRuleToMsgBtn() { return $('img[alt="Add Rule to Message"]'); }
  get ruleName() { return $('#ctl00_ContentPlaceHolder1_TextRuleName'); }
  get ruleDescription() { return $('#ctl00_ContentPlaceHolder1_TextRuleDescription'); }
  get ruleStartDate() { return $('#ctl00_ContentPlaceHolder1_rdStartDate_dateInput'); }
  get ruleEndDate() { return $('#ctl00_ContentPlaceHolder1_rdEndDate_dateInput'); }
  get ruleSaveBtn() { return $('#ctl00_ContentPlaceHolder1_RuleSave'); }
  get okBtnOfPopup() { return $('//span[text()="OK"]'); }
  get yesBtnOfPopup() { return $('//span[text()="Yes"]'); }
  

  get statementTab() { return $('//span[contains(text(), "Statements")]'); }
  get resultTableForStatements() { return $('#ctl00_ContentPlaceHolder1_Statements'); }
  get previewIconFromStatementResultTable() { return $('#ctl00_ContentPlaceHolder1_Statements img[onclick*="ShowPreview"]'); }
  get selectFirstStatements() { return $('#ctl00_ContentPlaceHolder1_Statements_userControl_StatementsGrid_ctl00__0'); }

  get insertTab() { return $('//span[contains(text(), "Inserts")]'); }

  get imageManagerBtn() { return $('.ImageManager'); }
  get insertBtnImageMgr() { return $('#InsertButton'); }
  get cancelBtnImageMgr() { return $('#CancelButton'); }

  get pdfOpenedView() { return $('#plugin, [type="application/x-google-chrome-pdf"]'); }
  get insertedImageContent() { return $('//body/img[contains(@src,".jpg") or contains(@src,".png")]'); }
  get propertiesOptionOfImage() { return $('//div[@class="reTlbVertical"]/ul/li/a'); }
  get propertyWidthOfImage() { return $('//div[@class="redRow redToolButton" and not(@style)]/following-sibling::div//input[@id="ImageWidth"]'); }
  get okBtnPropertiesWndw() { return $('#IPInsertButton'); }
  get saveContentBtn() { return $('a[title="Save Message Content"]'); }

  get resultTableForInserts() { return $('#ctl00_ContentPlaceHolder1_Inserts'); }
  get previewIconFromInsertResultTable() { return $('#ctl00_ContentPlaceHolder1_Inserts img[onclick*="ShowPreview"]'); }
  get selectFirstInsert() { return $('#ctl00_ContentPlaceHolder1_Inserts_userControl_InsertsGrid_ctl00__0'); }
  get editInsertBtn() { return $('img[alt="Edit selected message"]'); }
  // insertImage
  get previewMsgContent() { return $('img[alt="Preview this Message"]'); }
  get previewMsgBtn() { return $('//span[text()="Preview Message"]'); }
  get pageSizeListInserts() { return $('#ctl00_ContentPlaceHolder1_Inserts_userControl_InsertsGrid_ctl00_ctl03_ctl01_PageSizeComboBox_Input'); }
  get expandRule() { return $('#ctl00_ContentPlaceHolder1_RadGrid1_ctl00_ctl04_GECBtnExpandColumn'); }
  get addNewRuleDtls() { return $('#ctl00_ContentPlaceHolder1_RadGrid1_ctl00_ctl06_RuleDetails_ctl00_ctl02_ctl00_InitInsertButton'); }
  get ruleType() { return $('#ctl00_ContentPlaceHolder1_RadDocumentTypes_Input'); }
  get attributeRuleType() { return $('#ctl00_ContentPlaceHolder1_RadComboAttributes_Input'); }
  get operatorRuleType() { return $('#ctl00_ContentPlaceHolder1_RadComboOperators_Input'); }
  get valueRuleType() { return $('#ctl00_ContentPlaceHolder1_RadTextRuleValue'); }
  get uploadBtnFile() { return $('#ctl00_ContentPlaceHolder1_btnUploadFile'); }
  get saveRuleDtlsBtn() { return $('#ctl00_ContentPlaceHolder1_RuleDetailSave'); }
  get insertTabMsgDtls() { return $('//span[text()="Insert"]'); }
  get uploadFileRadioBtn() { return $('#ctl00_ContentPlaceHolder1_uploadType_0'); }
  get removeUploadFileBtn() { return $('//input[@value="Remove"]'); }
  get urlRadioBtn() { return $('#ctl00_ContentPlaceHolder1_uploadType_1'); }
  get saveBtnFileUploads() { return $('#ctl00_ContentPlaceHolder1_btnFileUpload'); }
  get urlPreviewBtn() { return $('#ctl00_ContentPlaceHolder1_btnURLPreview'); }
  get allTextField() { return $('#ctl00_ContentPlaceHolder1_txtAltText'); }
  get saveBtnURLUpdate() { return $('#ctl00_ContentPlaceHolder1_btnURL'); }
  get previewIconOfSelectedInsertResult() { return $('//div[@class="rmpView pageView"]//tr[contains(@class,"rgSelectedRow")]//img[contains(@onclick,"ShowPreview")]'); }
  get clickApproveBtn() { return $('//div[@class="rmpView pageView"]//input[@value="Approve"]'); }
  get selectRequiredCheckBox() { return $('//tr[contains (@class,"rgSelectedRow") ]//input[contains (@onclick, "chkRequired")]'); }
  get clickBinDropDown() { return $('//tr[contains (@class,"rgSelectedRow") ]//a[contains (@id,"Skinnedctl00_ContentPlaceHolder1_Inserts")]'); }
  get approvalStatus() { return $('//tr[contains (@class,"rgSelectedRow") ]/td[last()]'); }
  get insertID() { return $('//input[contains (@id,"ctl00_ContentPlaceHolder1_dgApprovals")]'); }
  get updateInsertLink() { return $('//a[text()="Update"]'); }
  get pageSizeTxt() { return $('//div[@class="rmpView pageView"]//span[contains(@id,"ChangePageSizeLabel")]'); }
  get pageSizeTxtEmail() { return $('#ctl00_ContentPlaceHolder1_Email_userControl_EmailGrid_ctl00 .rgPagerLabel'); }
  get pageSizeTxtStatements() { return $('#ctl00_ContentPlaceHolder1_Statements_userControl_StatementsGrid_ctl00 .rgPagerLabel'); }
  get pageSizeTxtLandingPage() { return $('#ctl00_ContentPlaceHolder1_LandingPage_userControl_LandingPageGrid_ctl00 .rgPagerLabel'); }
  get pageSizeListLandingPage() { return $('#ctl00_ContentPlaceHolder1_LandingPage_userControl_LandingPageGrid_ctl00_ctl03_ctl01_PageSizeComboBox_Arrow'); }
  get resultTableForLandingPage() { return $('#ctl00_ContentPlaceHolder1_LandingPage'); }
  get closeBtnPDFWndw() { return $('.rwCloseButton'); }

  navigateToFileSettingsTab() {
    this.fileSettingsTab.click();
    this.viewSamplesBtn.waitForVisible();
    this.viewSamplesBtn.waitForVisible().should.be.true('Failed to navigate file settings page');
  }

  sortByFileProcessedDate() {
    this.fileProcessedOnLink.waitForVisible();
    this.fileProcessedOnLink.click();
    browser.pause(5000);
    this.fileProcessedOnLink.click();
    browser.pause(5000);
    this.fileProcessedOnLink.waitForVisible();
  }

  assertSortByFileProcessedDate() {
    browser.pause(5000);
    const ArrFileProcesssedBy = new Array();
    let ArrBeforeSort = new Array();
    let SortedArrFileProcesssedBy = new Array();
    this.fileSettingsResultsContainer.$$('.rgRow td:nth-child(10),.rgAltRow td:nth-child(10)').forEach((element) => {
      const elText = element.getText();
      ArrFileProcesssedBy.push(elText);
    });
    ArrBeforeSort = ArrFileProcesssedBy.slice();
    SortedArrFileProcesssedBy = ArrFileProcesssedBy.sort((a, b) => new Date(b) - new Date(a));
    ArrBeforeSort.should.be.eql(SortedArrFileProcesssedBy, 'File processed on by date is not sorted');
  }

  viewSamples() {
    this.viewSamplesBtn.waitForVisible();
    this.viewSamplesBtn.click();
    this.viewSamplesPopup.waitForVisible();
    this.viewSamplesPopup.isVisible().should.be.true('Failed to open View Samples popup');
    this.closeMessageDetailsWndw();
  }

  editSampleList() {
    this.editSampleListBtn.waitForVisible();
    this.editSampleListBtn.click();
    this.editSampleListPopup.waitForVisible();
    this.editSampleListPopup.isVisible().should.be.true('Failed to open Edit Sample list popup');
    this.closeMessageDetailsWndw();
  }

  selectSamples() {
    this.viewSamplesBtn.waitForVisible();
    this.sampleListCheckBoxes.click();
  }

  closeMessageDetailsWndw() {
    browser.frameParent();
    this.closeMessageDetailsBtn.click();
  }

  previewMessageFromContent() {
    browser.pause(6000);
    this.previewMsgContent.waitForVisible();
    this.previewMsgContent.click();
    // browser.waitUntil();
  }

  saveContentInStatements() {
    browser.frameParent();
    browser.frame('RadWindowMessage');
    this.saveContentBtn.click();
  }

  saveContent() {
    browser.frameParent();
    browser.frame('RadWindowMessage');
    this.saveContentBtn.click();
    this.handleAlertForSuccessSaveMsg('Message content saved successfully.');
  }

  reSizeImage(imageSize) {
    browser.frameParent();
    browser.frame('RadWindowMessage');
    browser.frame('ctl00_ContentPlaceHolder1_ContentEditor_contentIframe');
    this.insertedImageContent.rightClick();
    browser.pause(5000);
    browser.frameParent();
    this.propertiesOptionOfImage.click();
    browser.pause(5000);
    browser.frame('Window');
    this.propertyWidthOfImage.setValue(imageSize);
    this.okBtnPropertiesWndw.click();
    browser.pause(3000);
  }

  assertResizedImage(reSize) {
    browser.frameParent();
    browser.frame('ctl00_ContentPlaceHolder1_ContentEditor_contentIframe');
    const size = this.insertedImageContent.getElementSize('width');
    var strSize = size.toString();
    var strReSize = reSize.toString();
    strReSize.should.be.eql(strSize, 'Resized image width is ' + strReSize + ' and not equal to ' + strSize);
    browser.frameParent();
  }


  insertImage(imageName) {
    browser.pause(10000);
    browser.frame('RadWindowMessage');
    this.imageManagerBtn.click();
    browser.pause(15000);
    browser.frame('Window');
    const imageLocator = "img[alt='" + imageName + "']";
    browser.waitForVisible(imageLocator);
    browser.click(imageLocator);
    this.insertBtnImageMgr.click();
    browser.pause(10000);
    browser.frameParent();

  }

  verifyImageContent() {
    browser.pause(5000);
    browser.frame('ctl00_ContentPlaceHolder1_ContentEditor_contentIframe');
    this.insertedImageContent.isVisible().should.be.true('Image not inserted in the content of the message');
    browser.frameParent();
  }

  closeOpenedPopUp(){
    const flag = this.closeBtnPDFWndw.isVisible();
    if(flag){
      this.closeBtnPDFWndw.click();
    }
  }

  editEmailSubjectAndSave(emailSubject) {
    browser.pause(6000);
    browser.waitForExist('iframe[name="RadWindowMessage"]');
    browser.frame('RadWindowMessage');
    this.msgEmailSubject.waitForVisible();
    this.msgEmailSubject.setValue(emailSubject);
    this.saveMessageBtn.click();
    this.handleAlertForSuccessSaveMsg('Message properties saved successfully.');
    browser.frameParent();
    // this.closeOpenedPopUp();

  }

  navigateToRulesTab() {
    browser.pause(5000);
    browser.frame('RadWindowMessage');
    this.rulesTabFromMsgDetails.waitForVisible();
    this.rulesTabFromMsgDetails.click();
    this.addRuleToMsgBtn.click();
    browser.pause(7000);
    browser.frameParent();
  }


  navigateToContentTab() {
    browser.pause(10000);
    browser.frame('RadWindowMessage');
    this.contentTabFromMsgDetails.waitForVisible();
    this.contentTabFromMsgDetails.click();
    browser.pause(7000);
    browser.frameParent();
  }

  CreateNewRule(ruleName) {
    browser.frame('RadWindowMessage');
    browser.pause(4000);
    browser.frame('RuleWindow');
    this.ruleName.waitForVisible();
    const dataRule = browser.options.data[ruleName];
    this.ruleName.setValue(dataRule['RuleName']);
    this.ruleDescription.setValue(dataRule['RuleDescription']);
    this.ruleStartDate.setValue(dataRule['StartDate']);
    this.ruleEndDate.setValue(dataRule['EndDate']);
    this.ruleSaveBtn.click();
    const flag = this.okBtnOfPopup.isVisible();
    if(flag){
      this.okBtnOfPopup.click();
    }
    browser.pause(2000);
    // this.handleAlertForSuccessSaveMsg('Rule saved successfully.');
    browser.frameParent();
    browser.frameParent();
    browser.pause(2000);
    // const flag = this.okBtnOfPopup.isVisible();
    // if(flag){
    //   this.closeBtnPDFWndw.click();
    // }
  }

  addNewRule(NewRuleDetails) {
    browser.pause(4000);
    browser.frame('RadWindowMessage');
    this.expandRule.click();
    this.addNewRuleDtls.waitForVisible();
    this.addNewRuleDtls.click();
    browser.pause(4000);
    browser.frame('RuleWindow');
    const dataRule = browser.options.users[NewRuleDetails];
    this.ruleType.click();
    browser.pause(3000);
    const dataRuleType = dataRule['Type'];
    var RuleType = "//ul/li[text()='" + dataRuleType + "']";
    browser.click(RuleType);
    browser.pause(5000);
    this.attributeRuleType.click();
    browser.pause(3000);
    const dataAttribute = dataRule['Attribute'];
    var attribute = "//ul/li[text()='" + dataAttribute + "']";
    browser.click(attribute);
    browser.pause(3000);
    this.operatorRuleType.click();
    browser.pause(3000);
    const dataOperator = dataRule['Operator'];
    var operator = "//ul/li[text()='" + dataOperator + "']";
    browser.click(operator);
    browser.pause(2000);
    this.valueRuleType.setValue(dataRule['Value']);
    this.saveRuleDtlsBtn.click();
    browser.pause(4000);
    this.handleAlertForSuccessSaveMsg('Rule detail saved successfully.');
    browser.pause(3000);
    browser.frameParent();
  }

  changePageSize(size) {
    this.resultTable.waitForVisible();
    this.pageSizeList.click();
    browser.pause(5000);
    const wE_listPageSize = `.rcbItem=${size}`;
    browser.element(wE_listPageSize).scroll();
    browser.click(wE_listPageSize);
    browser.pause(5000);
    this.resultTable.waitForVisible();
  }

  generateRandomNumber() {
    rndmMessageCode = (Math.floor((Math.random() * 10000) + 101));
    return rndmMessageCode;
  }

  selectNewCreatedMsg(msgCode) {
    const finalMsgCodeToAssert = msgCode + rndmMessageCode;
    this.selectMessageCode(finalMsgCodeToAssert);
  }

  changePageSizeLandingPage(size) {
    this.resultTableForLandingPage.waitForVisible();
    this.pageSizeListLandingPage.click();
    browser.pause(5000);
    const wE_listPageSize = `.rcbItem=${size}`;
    browser.element(wE_listPageSize).scroll();
    browser.click(wE_listPageSize);
    browser.pause(5000);
    this.resultTable.waitForVisible();
  }

  createNewMessage(msgCode, startDate, endDate) {
    this.newMessageBtn.click();
    this.creatingNewMsgTitle.waitForVisible();
    const createMsgTitle = this.creatingNewMsgTitle.getText();
    createMsgTitle.should.be.eql('Creating New Message', 'Create message pop-up failed to open');
    const finalMessageCode = msgCode + this.generateRandomNumber();
    browser.frame('RadWindowMessage');
    this.messageName.waitForVisible();
    this.messageName.setValue(finalMessageCode);
    this.messageDescription.setValue('Automation Test - Testing Create message');
    browser.pause(1000);
    this.ruleType.click();
    browser.pause(1000);
    browser.click('//li[text()="Circulation Notices"]');
    browser.pause(2000);
    this.messageStartDate.setValue(startDate);
    this.messageEndDate.setValue(endDate);
    this.saveMessageBtn.click();
    browser.pause(5000);
    // this.handleAlertForSuccessSaveMsg('Message properties saved successfully.');
    this.okBtnOfPopup.click();
    browser.pause(2000);
    browser.frameParent();
    // this.closeBtnPDFWndw.click();
    browser.pause(2000);
  }

  selectMessageCode(msgCode) {
    var flag = this.pageSizeTxt.isVisible();
    if (flag) {
      this.changePageSize('50');
    }
    var flag2 = this.lastPageBtn.isVisible();
    if (flag2) {
      this.lastPageBtn.click();
    }
    const locator = `//tr[td[text()="${msgCode}"]]`;
    browser.waitForVisible(locator);
    browser.element(locator).scroll();
    browser.pause(2000);
    browser.click(locator);
  }

  approveCreatedMessage(msgCode) {
    var finalMsgCode = msgCode + rndmMessageCode;
    const msgApproveBtnLocator = '//tr[td[contains(text(),"' + finalMsgCode + '")]]/td/a/input[@title="Approve"]';
    browser.pause(6000);
    browser.click(msgApproveBtnLocator);
    this.handleAlertForSuccessSaveMsg('Are you sure you want to approve this message content?');
    this.handleAlertForSuccessSaveMsg('Message approved.');
  }

  editSelectedMessage() {
    this.editMessageBtn.waitForVisible();
    this.editMessageBtn.click();
    browser.waitForExist('iframe[name="RadWindowMessage"]');
    browser.frame('RadWindowMessage');
    this.messageDetailsView.isVisible().should.be.true('Message details view did not appear after edit');
    browser.frameParent();
    browser.pause(10000);
  }

  editStartEndDate(startDate, endDate) {
    browser.pause(12000);
    browser.frame('RadWindowMessage');
    this.messageStartDate.setValue(startDate);
    this.messageEndDate.setValue(endDate);
    this.saveMessageBtn.click();
    this.handleAlertForSuccessSaveMsg('Message properties saved successfully.');
    browser.frameParent();
  }

  handleAlertForSuccessSaveMsg(SaveSuccessMsg) {
    browser.pause(5000);
    const alertTxt = browser.alertText();
    try {
      alertTxt.should.be.eql(SaveSuccessMsg);
      browser.alertAccept();
      browser.pause(3000);
    } catch (e) {
      alertTxt.should.be.eql(SaveSuccessMsg);
    }
  }

  assertUpdatedMessageDate(startDate, endDate) {
    browser.frame('RadWindowMessage');
    const newStrtDate = this.messageStartDate.getAttribute('value');
    const newEndDate = this.messageEndDate.getAttribute('value');
    newStrtDate.should.be.eql(startDate, 'Start date is not updated or not equal after edit message');
    newEndDate.should.be.eql(endDate, 'End date is not updated/ equal after edit message');
    browser.frameParent();
    this.closeMessageDetailsBtn.click();
  }

  navigateMarketingRepositoryMsgs() {
    this.marketingTab.waitForVisible();
    this.marketingTab.click();
    browser.pause(1000);
    this.repositoryMessagesDropdown.waitForVisible();
    this.repositoryMessagesDropdown.click();
    this.resultTable.waitForVisible();
    this.resultTable.isVisible().should.be.true('Failed to navigate Marketing repository messages -Result table not visible');
  }

  clickPreviewIconFromEmailTab() {
    this.resultTableForEmail.waitForVisible();
    this.previewIconFromEmailResultTable.click();
    browser.pause(5000);
  }

  verifyEmailPreviewMessage() {
    const windwHandles = browser.windowHandles();
    // browser.window(windwHandles.value[(windwHandles.value).length - 1]);
    console.log('window handles '+windwHandles.value.length);
    browser.window(windwHandles.value[1]);
    browser.frame('ctl00_ContentPlaceHolder1_IFRAME1');
    browser.pause(5000);
    this.pdfOpenedView.isVisible().should.be.true('Email Body/content is not visible under Email Preview');
    browser.pause(5000);
    browser.frameParent();
    browser.window(windwHandles.value[0]);
    browser.window(windwHandles.value[(windwHandles.value).length - 1]).close();
  }

  sendEmailFromEmailPreview() {
    const windwHandles = browser.windowHandles();
    // browser.window(windwHandles.value[(windwHandles.value).length - 1]);
    browser.window(windwHandles.value[1]);
    console.log('after window handle');
    this.emailAddressEmailPreview.waitForVisible();
    this.emailAddressEmailPreview.setValue('manothomsonf@nltechdev.com');
    this.sendEmailsBtnEmailPreview.click();
    this.okBtnEmailSent.waitForVisible();
    this.okBtnEmailSent.isVisible().should.be.true('Email sent popup and ok button is not visible');
    this.okBtnEmailSent.click();
    browser.window(windwHandles.value[0]);
  }

  clickStatementTab() {
    this.statementTab.waitForVisible();
    this.statementTab.click();
  }

  clickPreviewIconFromStatementsTab() {
    this.resultTableForStatements.waitForVisible();
    this.previewIconFromStatementsResultTable.click();
    browser.pause(5000);
    const windwHandles = browser.windowHandles();
    browser.window(windwHandles.value[(windwHandles.value).length - 1]);
    this.pdfOpenedView.isVisible().should.be.true('Email Body/content is not visible under Email Preview');
    browser.pause(5000);
    browser.window(windwHandles.value[0]);
    browser.window(windwHandles.value[(windwHandles.value).length - 1]).close();
  }

  clickFirstStatementsFromStatementResultsTab() {
    this.resultTableForStatements.waitForVisible();
    this.selectFirstStatements.click();

  }

  clickInsertTab() {
    this.insertTab.waitForVisible();
    this.insertTab.click();
    browser.pause(4000);
  }

  assertPreviewPageOfInserts() {
    browser.pause(5000);
    const windwHandles = browser.windowHandles();
    browser.window(windwHandles.value[(windwHandles.value).length - 1]);
    browser.frame('ctl00_ContentPlaceHolder1_IFRAME1');
    this.pdfOpenedView.isVisible().should.be.true('Insert content is not visible in pdf statement Preview');
    browser.pause(5000);
    browser.window(windwHandles.value[0]);
    browser.window(windwHandles.value[(windwHandles.value).length - 1]).close();
  }

  clickPreviewIconOfSelectedRow() {
    this.resultTableForInserts.waitForVisible();
    this.previewIconOfSelectedInsertResult.click();
    this.assertPreviewPageOfInserts();
  }

  clickPreviewIconFromInsertsTab() {
    this.resultTableForInserts.waitForVisible();
    this.previewIconFromInsertResultTable.click();
    this.assertPreviewPageOfInserts();
  }

  editExistingMsg(startDate, EndDate) {
    this.resultTableForInserts.waitForVisible();
    this.selectFirstInsert.click();
    this.editInsertBtn.click();
    browser.pause(5000);
    browser.frame('RadWindowMessage');
    this.insertMsgStartDate.waitForVisible();
    this.insertMsgStartDate.setValue(startDate);
    this.insertMsgEndDate.setValue(EndDate);
    this.saveMessageBtn.click();
    browser.pause(5000);
    this.handleAlertForSuccessSaveMsg('Message properties saved successfully.');
    browser.frameParent();
  }

  createNewInsertMessage(InsertNewMsg) {
    this.newMessageBtn.click();
    browser.pause(5000);
    const createMsgTitle = this.creatingNewMsgTitle.getText();
    createMsgTitle.should.be.eql('Creating New Message', 'Create message pop-up failed to open');
    browser.frame('RadWindowMessage');
    const dataInsertMsg = browser.options.data['InsertNewMsg'];
    const finalMessageCode = InsertNewMsg + this.generateRandomNumber();
    this.messageName.setValue(finalMessageCode);
    this.messageDescription.setValue(dataInsertMsg['Description']);
    this.messageStartDate.setValue(dataInsertMsg['StartDate']);
    this.messageEndDate.setValue(dataInsertMsg['EndDate']);
    this.saveMessageBtn.click();
    browser.pause(5000);
    this.handleAlertForSuccessSaveMsg('Message properties saved successfully.');
    browser.frameParent();
  }

  clickPreviewMsgBtnFromStatementsTab() {
    browser.pause(5000);
    this.previewMsgBtn.click();
    browser.pause(5000);
    const windwHandles = browser.windowHandles();
    browser.window(windwHandles.value[(windwHandles.value).length - 1]);
    this.pdfOpenedView.isVisible().should.be.true('Statement content is not visible in pdf statement Preview');
    browser.pause(5000);
    browser.window(windwHandles.value[0]);
    browser.window(windwHandles.value[(windwHandles.value).length - 1]).close();
  }

  uploadFiles(FilePath) {
    browser.pause(4000);
    browser.frame('RadWindowMessage');
    this.insertTabMsgDtls.click();
    browser.pause(2000);
    const uploadfilename = browser.options.users[FilePath];
    const selectBtn = '#ctl00_ContentPlaceHolder1_RadAsyncUpload1file0';
    browser.chooseFile(selectBtn, process.cwd() + uploadfilename['SelectFilePath']);
    this.removeUploadFileBtn.waitForVisible();
    this.saveBtnFileUploads.click();
    browser.pause(3000);
    // this.handleAlertForSuccessSaveMsg('File TestFile.pdf uploaded sucessfully.');
    this.okBtnOfPopup.click();
    browser.pause(3000);
    browser.frameParent();
    this.closeMessageDetailsBtn.click();
  }

  chkRequireAndApproveInsert() {
    this.selectRequiredCheckBox.click();
    browser.pause(6000);
    this.clickApproveBtn.click();
    // this.handleAlertForSuccessSaveMsg('Are you sure you want to approve this message content?');
    this.yesBtnOfPopup.click();
    browser.pause(3000);
    this.okBtnOfPopup.waitForVisible();
    this.okBtnOfPopup.click()
    // this.handleAlertForSuccessSaveMsg('Message approved.');
    // this.closeMessageDetailsBtn.click();
    browser.pause(3000);
  }

  validateApprovalStatus(status) {
    const txt = this.approvalStatus.getText();
    status.should.be.eql(txt, 'Status is not in Pending Print Approval');
  }

  selectBinValue(binvalue) {
    this.clickBinDropDown.click();
    browser.pause(2000);
    var select = '//div[contains(@style,"visibility: visible")]//li[contains(text(),"' + binvalue + '")]';
    browser.click(select);
    browser.pause(2000);
    this.handleAlertForSuccessSaveMsg('Bin flag ' + binvalue + ' has been updated.');
  }

  navigateMarketingInsertApprovalTab() {
    this.marketingTab.waitForVisible();
    this.marketingTab.click();
    browser.pause(2000);
    this.repositoryInsertApprovalDropdown.click();
    this.resultTableforInsertApproval.waitForVisible();
    this.resultTableforInsertApproval.isVisible().should.be.true('Failed to navigate Marketing Insert Approval -Result table not visible');
  }

  updateInsertApprovalId(msgCode) {
    const finalMsgCodeToAssert = msgCode + rndmMessageCode;
    const editLink = '//tr[td[text()="' + finalMsgCodeToAssert + '"]]/td/a[text()="Edit"]';
    browser.click(editLink);
    this.insertID.waitForVisible();
    this.insertID.setValue(finalMsgCodeToAssert);
    this.updateInsertLink.click();
    browser.pause(2000);

  }

  get reportsTab() { return $('//span[contains(text(),"Reports")]'); }
  get activitiesDropdown() { return $('#ctl00_ContentPlaceHolder1_rcbActivities_Input'); }
  get runReportBtn() { return $('//span[contains(text(),"Run Report")]'); }
  get exportBtn() { return $('//span[contains(text(),"Export")]'); }
  get userNameInput() { return $('#ctl00_ContentPlaceHolder1_txtUserName'); }
  get startDate() { return $('#ctl00_ContentPlaceHolder1_txtStartDate_dateInput'); }
  get endDate() { return $('#ctl00_ContentPlaceHolder1_txtEndDate_dateInput'); }
  get itemsPageNumber() { return $('//div[@class="rgWrap rgInfoPart"]/strong[1]'); }

  navigateToReport(reportType) {
    this.reportsTab.waitForVisible();
    this.reportsTab.click();
    browser.pause(2000);
    const reportTypeToSlct = '//span[contains(text(),"' + reportType + '")]';
    browser.element(reportTypeToSlct).click();
    browser.pause(2000);
  }

  selectActivity(activityType) {
    this.activitiesDropdown.click();
    browser.pause(2000);
    const optionToSlct = '//li[contains(text(),"' + activityType + '")]';
    browser.element(optionToSlct).click();
    browser.pause(2000);
  }

  runReport() {
    this.runReportBtn.waitForVisible();
    this.runReportBtn.click();
    browser.pause(2000);
  }

  exportReport() {
    this.exportBtn.waitForVisible();
    this.exportBtn.click();
    browser.pause(2000);
  }

  fillUserNameAndDate(usrName, StrtDt, EndDate) {
    this.userNameInput.setValue(usrName);
    this.startDate.setValue(StrtDt);
    this.endDate.setValue(EndDate);
  }

  readTotalItemsFromPage() {
    totalItemsInPage = this.itemsPageNumber.getText();
    console.log('total items in page '+totalItemsInPage);
  }

  readCSVfile() {
    // var myObject;
    // myObject = new ActiveXObject("Scripting.FileSystemObject");
    // var f = myObject.GetFile("c:\\Users\\MTFrancis\\Downloads\\ActivityReport.csv");
    // f.Delete();

    var myMap = new Map();
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    // var XDomainRequest = require('xdomainrequest').XDomainRequest;
    var rawFile = new XMLHttpRequest();
    // var XrawFile = new XDomainRequest();    
    // rawFile.open("file:\\Users\\MTFrancis\\Desktop\\batchDel.bat");
    rawFile.open("GET", "file:\\Users\\MTFrancis\\Downloads\\ActivityReport.csv", false);
    // rawFile.
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          // console.log('alltext'+allText);
          var lines = [];
          var array = [];
          
          var lines = allText.split(/\r?\n/);
          var headers = lines[0].split(",");
         
          var linesData = lines.slice(1);
          var lenData = linesData.length;
          
          // console.log('asfdfa total '+ (totalItemsInPage-1));
          // console.log('asfdfa led data '+ (lenData-1));
          // console.log('No of items matched'+lenData);
          this.should.be.deepEqual(totalItemsInPage.toString, lenData.toString, 'Number of exported data not matched');
        //  if((totalItemsInPage) == (lenData-1) ){
        //    console.log('TC pass');
        //  }else{
        //    console.log('fail');
        //  }
          // for(var i=0; i<headers.length; i++){
          //   console.log('first loop..');          
          // for(var i=0; i<headers.length; i++){
          //   colNames[headers] = headers.push[i];
          // }
          for(var i=0; i<headers.length; i++){ 
           for (var j = 0; j < linesData.length; j++) {
            var currentLineVal = linesData[j];
            console.log('before split ' + currentLineVal);
            var currentLineValSplit = String(currentLineVal).split(",");
              console.log('In loop headers: ' + headers[i]);
              console.log('In loop headers line :' + currentLineValSplit[i]);
              array[headers[i]] = headers[i].push[currentLineValSplit[i]];
             }
          console.log('header zero' +array["User Name"]);            
          }
        }
      }
    }
    rawFile.send(null);

    // var X = !window.XMLHttpRequest ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
    // X.open("DELETE", "file:\\Users\\MTFrancis\\Downloads\\ActivityReport.csv", 0);
    // X.send("");
    // return X.status;

    // rawFile.open("DELETE", "file:\\Users\\MTFrancis\\Downloads\\ActivityReport.csv", false);
  }
  // var rawFile = new XMLHttpRequest();
  // console.log('inside fn');
  // rawFile.open("GET", "file:////D:/ActivityReport.csv", false);
  // console.log('after open fn'+rawFile);
  //   // rawFile.onreadystatechange = function ()
  //   // {
  //   //   if(rawFile.readyState === 4)
  //   //   {
  //   //     if(rawFile.status === 200 || rawFile.status == 0)
  //   //     {
  //   //       var allText = rawFile.responseText;
  //   //       console.log('inside read file');
  //   //       console.log('allText '+ allText);
  //   //       // var lines = [];
  //   //       // var lineCount = allText.split('\n').length;
  //   //       // var headings = allText.splice(0,lineCount);    
  //   //       // var entries = headings.split(',');
  //   //       // console.log('entries headers '+entries);
  //   //       // console.log('headings '+headings);    
  //   //       // for(var i=0; i<lineCount; i++){
  //   //       //   for(var j=0; j<entries.length; j++){
  //   //       //       console.log('In loop '+ entries[j]);
  //   //       //   }
  //   //       // }


  //   //     //   var record_num = 20;  // or however many elements there are in each row
  //   //     //   var allTextLines = allText.split(/\r\n|\n/);
  //   //     //   console.log('all txt lines'+allTextLines);

  //   //     //   var entries = allTextLines[0].split(',');
  //   //     //   console.log('all entries'+entries);
  //   //     //   var lines = [];
  //   //     //   var headings = entries.splice(0,record_num);
  //   //     //   while (entries.length>0) {
  //   //     //     var tarr = [];
  //   //     //     for (var j=0; j<record_num; j++) {
  //   //     //       tarr.push(headings[j]+":"+entries.shift());
  //   //     //     }
  //   //     //     console.log('tarr b4 push '+tarr)
  //   //     //     lines.push(tarr);
  //   //     //   }
  //   //     //   console.log('asfds asdfs asdfsdf ');
  //   //     //   console.log(lines);
  //   //     //   // alert(allText);     
  //   //     // }
  //   //     }
  //   //   }
  //   //   rawFile.send(null);
  //   // }
  // }
}
export default new MarketingPage();
