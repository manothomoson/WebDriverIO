const page = require('../../src/pages/marketing.page');

const { When, Then } = require('cucumber');

When('I navigate to Marketing Repository messages tab', () => {
  page.navigateMarketingRepositoryMsgs();
});

When('I preview a message from Email result table', () => {
  page.clickPreviewIconFromEmailTab();
});

When('I select a message with message code {string}', (msgCode) => {
  page.selectMessageCode(msgCode.replace(/"/g, ''));
});

When('I edit start date and end date as {string} and {string}', (startDate, EndDate) => {
  page.editStartEndDate(startDate.replace(/"/g, ''), EndDate.replace(/"/g, ''));
});

When('I create new message as {string} with dates as {string} and {string}', (messageName, startDate, endDate) => {
  page.createNewMessage(messageName.replace(/"/g, ''), startDate.replace(/"/g, ''), endDate.replace(/"/g, ''));
});

When('I navigate to Rules tab from Message Details window', () => {
  page.navigateToRulesTab();
});

When('I add and verify new rule {string}', (ruleName) => {
  page.CreateNewRule(ruleName.replace(/"/g, ''));
});

Then('I close opened popup', () => {
  page.closeOpenedPopUp();
});

When('I navigate to Content tab', () => {
  page.navigateToContentTab();
});

When('I navigate to File settings tab', () => {
  page.navigateToFileSettingsTab();
});

When('I select first sample from result', () => {
  page.selectSamples();
});

Then('I view selected samples', () => {
  page.viewSamples();
});

Then('I edit sample list for selected samples', () => {
  page.editSampleList();
});

Then('I sort by File processsed on date', () => {
  page.sortByFileProcessedDate();
});

Then('assert sort by File processsed on date', () => {
  page.assertSortByFileProcessedDate();
});

When('I insert an image {string} via image manager', (imageName) => {
  page.insertImage(imageName.replace(/"/g, ''));
});

When('I resize image to width {string}', (imageSize) => {
  page.reSizeImage(imageSize.replace(/"/g, ''));
});

When('I save message content', () => {
  page.saveContent();
});

When('I save message content in statements', () => {
  page.saveContentInStatements();
});

Then('I preview message from content tab of message details', () =>{
  page.previewMessageFromContent();
});

Then('assert resized image size of width {string}', (imageSize) => {
  page.assertResizedImage(imageSize.replace(/"/g, ''));
});

Then('I verify inserted image in message Content', () => {
  page.verifyImageContent();
});

Then('I edit email subject in message properies as {string}', (emailSubject) => {
  page.editEmailSubjectAndSave(emailSubject.replace(/"/g, ''));
});

Then('assert edited start date and end date {string} and {string}', (startDate, EndDate) => {
  page.assertUpdatedMessageDate(startDate.replace(/"/g, ''), EndDate.replace(/"/g, ''));
});

Then('I select created new message {string}', (msgCode) => {
  page.selectNewCreatedMsg(msgCode.replace(/"/g, ''));
});

Then('I select created new message for Statements {string}', (msgCode) => {
  page.selectNewCreatedMsgForStatements(msgCode.replace(/"/g, ''));
});

Then('I select created new message for Landing page {string}', (msgCode) => {
  page.selectNewCreatedMsgForLandingPage(msgCode.replace(/"/g, ''));
});


Then('edit selected message', () => {
  page.editSelectedMessage();
});

Then('I view and verify Email preview', () => {
  page.verifyEmailPreviewMessage();
});

Then('I send email from Email Preview', () => {
  page.sendEmailFromEmailPreview();
});

Then('I approve created message {string}', (msgCode) => {
  page.approveCreatedMessage(msgCode.replace(/"/g, ''));
});

Then('close Message Details window', () => {
  page.closeMessageDetailsWndw();
});

When('Click the Statement tab', () => {
  page.clickStatementTab();
});

When('I preview a message from statement result table', () => {
  page.clickPreviewIconFromStatementsTab();
});

When('Select the first statements from Statements results', () => {
  page.clickFirstStatementsFromStatementResultsTab();
});

When('I navigate to the Inserts tab', () => {
  page.clickInsertTab();
});

When('I preview a message from Inserts result table', () => {
  page.clickPreviewIconFromInsertsTab();
});

When('I preview a selected message from Inserts result table', () => {
  page.clickPreviewIconOfSelectedRow();
});

Then('Edit the existing message and update Start and End date as {string} and {string}', (startDate, EndDate) => {
  page.editExistingMsg(startDate.replace(/"/g, ''), EndDate.replace(/"/g, ''));
});

When('I create new insert message {string}', (InsertNewMsg) => {
  page.createNewInsertMessage(InsertNewMsg.replace(/"/g, ''));
});

Then('I select created new message for Inserts as {string}', (msgname) => {
  page.selectNewCreatedMsgForInserts(msgname.replace(/"/g, ''));
});

When('I preview the message from statement from content tab', () => {
  page.clickPreviewMsgBtnFromStatementsTab();
});

When('I add new rule details {string}', (NewRuleDetails) => {
  page.addNewRule(NewRuleDetails.replace(/"/g, ''));
});

When('Click the insert tab to upload the file {string}', (FilePath) => {
  page.uploadFiles(FilePath.replace(/"/g, ''));
});

Then('Check the required check box and Approve the created message', () => {
  page.chkRequireAndApproveInsert();
});

Then('Validate the approval status as {string}', (status) => {
  page.validateApprovalStatus(status.replace(/"/g, ''));
});

Then('select the Bin from drop down as {string}', (binvalue) => {
  page.selectBinValue(binvalue.replace(/"/g, ''));
});

When('I navigate to Marketing Insert Approval tab', () => {
  page.navigateMarketingInsertApprovalTab();
});

Then('edit and update the Insert id to Approve the Insert messsage {string}', (msgCode) => {
  page.updateInsertApprovalId(msgCode.replace(/"/g, ''));
});

When('I navigate to Reports {string}', (reportType) => {
  page.navigateToReport(reportType.replace(/"/g, ''));
});

When('I select action from activities dropdown as {string}', (activity) => {
  page.selectActivity(activity.replace(/"/g, ''));
});

When('I run report for Activity report', () => {
  page.runReport();
});

When('export generated report', () => {
  page.exportReport();
});

When('I enter username as {string} startDate {string} and endDate as {string}', (usrName, StrtDt, EndDate) => {
  page.fillUserNameAndDate(usrName.replace(/"/g, ''), StrtDt.replace(/"/g, ''), EndDate.replace(/"/g, ''));
});

Then('I read the csv file', () => {
  page.readCSVfile();
});

Then('read total items from page', () => {
  page.readTotalItemsFromPage();
});
