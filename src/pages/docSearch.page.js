const Page = require('./page');
const should = require('should');
const fse = require('fs');
const path = require('path');
// const fetch = require('node-fetch');
var ncp = require('copy-paste');
const pdf = require('pdf-parse');
var outlook = require('node-outlook');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var resTxt;
var jsonObj, elTextAccNo;
let flag;

class DocSearchPage extends Page {

  get memberName() { return $('#ctl00_ContentPlaceHolder1_txtCustomerName'); }
  get search() { return $('#ctl00_ContentPlaceHolder1_btnSearch'); }
  get resultsContainer() { return $('//div[contains(@id,"ctl00_ContentPlaceHolder1_ResultsGrid")]'); }
  get memberNumber() { return $('#ctl00_ContentPlaceHolder1_txtAccountNum'); }
  get startDate() { return $('#ctl00_ContentPlaceHolder1_txtDocumentStart_dateInput'); }
  get endDate() { return $('#ctl00_ContentPlaceHolder1_txtDocumentEnd_dateInput'); }
  get documentSearchBtn() { return $('a[href^="/Portal/Search/Search.aspx"]'); }
  get documentType() { return $('#ctl00_ContentPlaceHolder1_rcbDocType_DropDown ul li'); }
  get resetBtn() { return $('#ctl00_ContentPlaceHolder1_btnReset'); }
  get newSearchBtn() { return $('[title="New document search"]'); }
  get exportBtn() { return $('//*[contains(@title,"Export to CSV")]'); }
  get exportRunReportBtn() { return $('//span[text()="Export"]'); }
  get lastPageBtn() { return $('[title="Last Page"]'); }
  get PageBtnNumber() { return $('.rgCurrentPage span'); }
  get listDocumentType() { return $('#ctl00_ContentPlaceHolder1_rcbDocType_DropDown'); }
  get documentTypeDropdown() { return $('#ctl00_ContentPlaceHolder1_rcbDocType_Input'); }
  get documentSubTypeDrpdwn() { return $('#ctl00_ContentPlaceHolder1_rcbDocSubType_Input'); }
  get emailTxtFrmSearchRslt() { return $('//input[contains(@id,"txtEmail")]'); }
  get sendEmailBtn() { return $('#ctl00_ContentPlaceHolder1_btnSendEmail'); }
  get pdfDocumentIcons() { return $('//a[contains(text(),"Pages")]'); }
  get pdfOpenedView() { return $('#plugin, [type="application/x-google-chrome-pdf"]'); }
  get pdfWindow() { return $('//div[contains(@id,"RadWindowWrapper_ctl00_RadWindow1")]'); }
  get closeBtnPDFWndw() { return $('.rwCloseButton'); }
  get pageSizeList() { return $('#ctl00_ContentPlaceHolder1_ResultsGrid_ctl00_ctl03_ctl01_PageSizeComboBox_Arrow'); }
  get memberNumberLink() { return $('//a[text()="Account #"]'); }
  get custRowFrstChkBx() { return $('//input[contains(@id,"SelectCheckBox") and @type="checkbox"]'); }

  get clientAppDrpdwn() { return $('#ctl00_ContentPlaceHolder1_rcbAppCode_Input'); }
  get addCustomerBtn() { return $('//a[@title="Add Customer"]'); }
  get customerNoTxtSearch() { return $('#ctl00_ContentPlaceHolder1_txtCustNumber'); }
  get custEmailTxtSearch() { return $('#ctl00_ContentPlaceHolder1_txtEmail'); }
  get CustomerNumberTxtEmailAdmin() { return $('//input[contains(@id,"TB_CustomerNumber")]'); }
  get clientNoTxtEmailAdmin() { return $('//input[contains(@id,"TB_ClientNumber")]'); }
  get emailAddressTxtEmailAdmin() { return $('//input[contains(@id,"TB_EmailAddress")]'); }
  get customerTypeDrpDwnEmailAdmin() { return $('//input[contains(@id,"rcbCustomerType_Input")]'); }
  get performInsertBtn() { return $('//input[contains(@id,"PerformInsertButton")]'); }
  get performUpdateBtn() { return $('//input[contains(@id,"UpdateButton")]'); }
  get cancelInsertBtn() { return $('//input[contains(@id,"CancelButton")]'); }
  get successAlertBox() { return $('.rwDialogText'); }
  get resultTableEmailAdmin() { return $('#ctl00_ContentPlaceHolder1_EmailAdressGrid'); }
  get editBtnFirstRecord() { return $('//input[@title="Edit"]'); }
  get deleteBtnFirstRecord() { return $('//input[@title="Delete"]'); }
  get yesBtnConfirmationPopup() { return $('//span[text()="Yes"]'); }
  get noRecordsFoundLable() { return $('//td[contains(text(),"No records found.")]'); }
  get activitiesDrpdwn() { return $('#ctl00_ContentPlaceHolder1_rcbActivities_Input'); }
  get activityUserNameTxt() { return $('#ctl00_ContentPlaceHolder1_txtUserName'); }
  get activityStartDateTxt() { return $('#ctl00_ContentPlaceHolder1_txtStartDate_dateInput'); }
  get activityEndDateTxt() { return $('#ctl00_ContentPlaceHolder1_txtEndDate_dateInput'); }
  get enrollmentStartDateTxt() { return $('#ctl00_ContentPlaceHolder1_rdpStartDate_dateInput'); }
  get enrollmentEndDateTxt() { return $('#ctl00_ContentPlaceHolder1_rdpEndDate_dateInput'); }
  get emailSentStartDateTxt() { return $('#ctl00_ContentPlaceHolder1_txtStart_dateInput'); }
  get emailSentEndDateTxt() { return $('#ctl00_ContentPlaceHolder1_txtEnd_dateInput'); }
  get runReportBtn() { return $('//span[text()="Run Report"]'); }
  get reportResultTable() { return $('//table[contains(@id,"ctl00_ContentPlaceHolder1_ReportGrid")]'); }
  get emailAddrsTxtEmailReport() { return $('#ctl00_ContentPlaceHolder1_txtEmailAddress'); }
  get addNewRcrdBtnReportPermission() { return $('//a[contains(@id,"InitInsertButton")]'); }
  get clientNoTxtRprtPrmsn() { return $('#ctl00_ContentPlaceHolder1_txtClientNumber'); }
  get checkNoBtn() { return $('#ctl00_ContentPlaceHolder1_btnCheckNumber'); }
  get allToLeftBtn() { return $('//a[@title="All to Left"]'); }
  get moveToRightBtn() { return $('//a[@title="To Right"]'); }
  get saveBtnRprtPrmsn() { return $('#ctl00_ContentPlaceHolder1_btnSave'); }


  navigateToTab(tabName){
    browser.pause(3000);
    const wE_TabElement = '//span[text()="'+tabName+'"]';
    browser.click(wE_TabElement);
    browser.pause(2000);
  }


  navigateToExternalClientAPI(){

    // browser.element('//div[@id="secondary"]//a[text()="BASE64 encode/decode"]').click();
    const URLDetail = browser.options.users['ExternalCleintAPI'];
    elTextAccNo = browser.element('.rgRow td:nth-child(3),.rgAltRow td:nth-child(3)').getText();
    console.log('AccNo from Superior Energy UI :'+elTextAccNo);
    const elTextAppCode = browser.element('.rgRow td:nth-child(2),.rgAltRow td:nth-child(2)').getText();
    console.log('Application code from Superior Energy UI :'+elTextAppCode);

    var xhr = new XMLHttpRequest();
    // xhr.open('GET', URLDetail.ExternalAPIInfoURL+"617194"+'|'+"AR7", false);
    xhr.open('GET', URLDetail.ExternalAPIInfoURL+elTextAccNo+'|'+elTextAppCode, false);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(this.responseText);
          resTxt = this.responseText;
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
    jsonObj = JSON.parse(resTxt);
    console.log('Document ID from 2nd API: '+ jsonObj[0].DocumentID );
    this.getPdfBytesFrmAPI(jsonObj[0].DocumentID);
  }

  getPdfBytesFrmAPI(docID){
    const URLDetail = browser.options.users['ExternalCleintAPI'];
    var xhr = new XMLHttpRequest();
    console.log('URL with retrieved Document ID: '+URLDetail.ExternalAPIGetURL+docID);

    xhr.open('GET', URLDetail.ExternalAPIGetURL+docID, false);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resTxt = this.responseText;
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
    jsonObj = JSON.parse(resTxt);
    //  console.log("session ID "+browser.sessionId);
    // console.log('response..'+resTxt);
    // console.log('jason obj '+ jsonObj.DocumentBytes);
    // this.getDecodedBase64PdfFile(jsonObj.DocumentBytes);
    this.getDecodedBase64PdfFile(jsonObj.DocumentBytes);
  }


  getDecodedBase64PdfFile(DocBytesBase){
    browser.newWindow('https://conversion-tool.com/base64');
    // console.log("session ID1 "+browser.sessionId);
    browser.pause(5000);
    var win = browser.windowHandles();
    var newWin = win.value[1];
    browser.window(newWin);
    // browser.windowHandleMaximize();
    browser.pause(5000);
    // browser.element('//div[@id="secondary"]//a[text()="BASE64 encode/decode"]').click();
    // console.log("session printsome..");
    browser.pause(3000);
    // console.log("session ID2 "+browser.sessionId);
    // console.log('doc bytes64 '+DocBytesBase);
    ncp.copy(DocBytesBase);
    browser.pause(1000);
    // browser.setValue('#inputtext', 'test');
    // browser.element('#inputtext').setValue('test');
    browser.setValue('#inputtext', ['Control', 'v']);
    browser.pause(3000);
    browser.element('//input[@type="radio" and @value="1"]').click();
    browser.element('#fileoutput').click();
    browser.element('//button[contains(text(),"Start conversion")]').click();
  }

  get linkCodeBase() { return $('//div[@id="secondary"]//a[text()="BASE64 encode/decode"]'); }

  navigateToCodeBase(){
    browser.pause(3000);
    console.log('In function ');
    this.linkCodeBase.click();
    browser.pause(5000);
    browser.element('#inputtext').setValue('test');

  }


  // readOutlook(){
  //   var outlook = require('node-outlook');
  //   outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');
  //   outlook.base.setAnchorMailbox('manothomson@outlook.com');

  //   // This is the oAuth token
  //   var token = 'Bearer EwBYA+l3BAAUv0lYxoez7x2t6RowHa2liVeLW/wAAVAQB5Z0551hr1g9b2YihRjTXmJPETXIiUJrDH6XpPf/Y6tVpQn4ZRMgvlbTd5F7xOGCkfq+4QELrFIkD6ZMm2XkChy3dFK5iqQqQXd7BOnw2OerMAzXwb+8uefJYjQH99/zC1wxg5WM5WSLt2sDDA6jJzoR5jV5nBq6iEj/cKiye+OvQVSKbWOQpm0OHqxJ+8pmQVQgxH1KEvXexnQfJiDpMhW/4k5uyD0jsm0ZllCccgrdHL/XJwRFCnz7aZooeu/5Vdgnlggky/0cCw6mFX2wj5VyUL3FnLMeGV/pUr/JUtB4eTppwVZkyGMLRbPnPccxOqjUcUIieGeq+o55BkUDZgAACNUK4kaCSMnXKAJqtUg/Zo1k3WhV6NeZlOngYr+mGQXdet1kKM2KippBClwacsrUJsBXX+EKoNrG2h7YoN+wvhlG+dKwHClls/iaQYXJTohV29tdNhjxyAWjrfD3GRb7P4V5GQBd55GnRLvKQZ+zZeliv/Zx9Y80OgJ3GkcE8EeEZ9qBo1bdy0DEZn/RUm+79H7JkGQ9hph+AK9iyXEQn/8xlbXT0axRfdDruTjYEahzeGqK0OccPGpaWgpEK1ztrDVMUx5owSJ8SCVqyYmsZNrsXrEq5siFWeB6+PLPtvPt6dDKKjKOfz1ye9H4HJt+wK9GWo6nw1ywsVydLORg78AIpxfodZexELQhyNEQGgwrhwW+idBR57UM+9wykcSkahd7jAfvGpwNr3nFuRj/diqa9W81YpluOZWPOSLg3pBos7muJHANzQOfjBIxnO1Zvc35diUIlQlfn40+KaLUo1GY3mNmvIAs83KZ5+K8nEAVfT9DqFzwEwwX4sNhjJgUDi6Kne/ELNPYDfMoVqofvNVzNTPLxPtKLC+AnvIpsQGPgC2QHCv9KbcVpo2xn6DFQy38DiB/DWLdTXMOad2PYy0BRwYh6cdtZ+gYcm/45l97zB4/PrDG5Zyud5kBeM4xly/kl28+dxqlgLpiXZ1+KRdu1ZCS5eC3EEIhFKVOe4l8qWWaYyObTIpJwsDUmVZt9DyCo0A6bvMKXR/XN+zEUrQatxw2U7MmBw1HmE+jDVDI6O5dAg==';

  //   // Set up oData parameters
  //   var queryParams = {
  //     '$select': 'Subject,ReceivedDateTime,From',
  //     '$orderby': 'ReceivedDateTime desc',
  //     '$top': 20
  //   };
    
  //   // Pass the user's email address
  //   var userInfo = {
  //     email: 'manothomson@outlook.com'
  //   };
  //   console.log("inside the fn..");
  //   // outlook.mail.getMessage()
  //   outlook.mail.getMessages({token: token, folderId: 'Inbox', odataParams: queryParams, user: userInfo}, (error, result) => {
  //       console.log("inside the fn22.."+result);
  //       if (error) {
  //         console.log('getMessages returned an error: ' + error);
  //       }
  //       else if (result) {
  //         console.log('getMessages returned ' + result.value.length + ' messages.');
  //         result.value.forEach((message) => {
  //           console.log('  Subject:', message.Subject);
  //           console.log('  Received:', message.ReceivedDateTime.toString());
  //           console.log('  From:', message.From ? message.From.EmailAddress.Name : 'EMPTY');
  //         });
  //       }
  //     });
  // }

  selectClientApp(clientApp){
    this.clientAppDrpdwn.waitForVisible();
    this.clientAppDrpdwn.click();
    browser.pause(1000);
    const wE_TabElement = '//li[contains(text(),"'+clientApp+'")]';wd
    browser.click(wE_TabElement);
  }

  fillDetailsAndRunReport(reportDetails){
    const reportDetail = browser.options.users[reportDetails];
    this.activitiesDrpdwn.waitForVisible();
    this.activitiesDrpdwn.click();
    browser.pause(1000);
    const wE_TabElement = '//li[contains(text(),"'+reportDetail.activities+'")]';
    // console.log('drp dwn json '+reportDetail.activities);
    browser.click(wE_TabElement);
    this.activityUserNameTxt.setValue(reportDetail.username);
    this.activityStartDateTxt.setValue(reportDetail.startDate);
    this.activityEndDateTxt.setValue(reportDetail.endDate);
    this.runReportBtn.click();
    this.reportResultTable.waitForVisible();
    this.reportResultTable.isVisible().should.be.true('Failed to display Run report');
  }

  fillEnrollmentReport(reportDetails){
    const reportDetail = browser.options.users[reportDetails];
    this.activityStartDateTxt.setValue(reportDetail.startDate);
    this.activityEndDateTxt.setValue(reportDetail.endDate);
    this.runReportBtn.click();
    this.reportResultTable.waitForVisible();
    this.reportResultTable.isVisible().should.be.true('Failed to display Run report');
  }


  fillEmailSentRunReport(reportDetails){
    const reportDetail = browser.options.users[reportDetails];
    this.emailAddrsTxtEmailReport.setValue(reportDetail.email);
    this.emailSentStartDateTxt.setValue(reportDetail.startDate);
    this.emailSentEndDateTxt.setValue(reportDetail.endDate);
    this.runReportBtn.click();
    this.reportResultTable.waitForVisible();
    this.reportResultTable.isVisible().should.be.true('Failed to display Run report');
  }

  addNewRecordReportPermissions(reportPermission){
    const reportDetail = browser.options.users[reportPermission];
    this.addNewRcrdBtnReportPermission.click();
    browser.pause(3000);
    browser.frame('RadGenericWindow');
    this.clientNoTxtRprtPrmsn.setValue(reportDetail.clientNo);
    this.checkNoBtn.click();
    browser.pause(2000);
    this.allToLeftBtn.click();
    browser.pause(1000);
    const wE_TabElement = '//span[contains(text(),"'+reportDetail.reportList+'")]';
    browser.click(wE_TabElement);
    this.moveToRightBtn.click();
    this.saveBtnRprtPrmsn.click();
    browser.pause(1000);
    this.closeBtnPDFWndw.click();
    browser.frameParent();
  }

  assertEmailSentReportResults(reportDetails){
    const reportDetail = browser.options.users[reportDetails];
    this.reportResultTable.isVisible().should.be.true('Failed to display Run report');
    // var indexOfEmail = this.getColumnIndex('Email');
    // console.log('index '+indexOfEmail);
    this.reportResultTable.$$('.rgRow td:nth-child(3),.rgAltRow td:nth-child(3)').forEach((element) => {
      const elText = element.getText();
      // console.log('text app '+elText);
      elText.should.match(reportDetail.email, 'Selected UserName did not match');
    });
  }

  assertRunReportResults(reportDetails){
    const reportDetail = browser.options.users[reportDetails];
    this.reportResultTable.isVisible().should.be.true('Failed to display Run report');
    var indexOfUserName = this.getColumnIndex('User Name');
    this.reportResultTable.$$('.rgRow td:nth-child('+indexOfUserName+'),.rgAltRow td:nth-child('+indexOfUserName+')').forEach((element) => {
      const elText = element.getText();
      // console.log(elText);
      elText.should.match(reportDetail.username, 'Selected UserName did not match');
    });
  }

  assertEnrollmentReportResults(reportDetails){
    const reportDetail = browser.options.users[reportDetails];
    const dateStartDate = new Date(reportDetail.startDate);
    const dateEndDate = new Date(reportDetail.endDate);
    this.reportResultTable.isVisible().should.be.true('Failed to display Run report');
    var indexOfEnrollmentDate = this.getColumnIndex('Enrollment Date');
    this.reportResultTable.$$('.rgRow td:nth-child('+indexOfEnrollmentDate+'),.rgAltRow td:nth-child('+indexOfEnrollmentDate+')').forEach((element) => {
      const elText = element.getText();
      // console.log(elText);
      const resultDate = new Date(elText);
      (resultDate >= dateStartDate).should.be.true(`result date: ${resultDate} is less than start date: ${dateStartDate}`);
      (resultDate <= dateEndDate).should.be.true(`result date: ${resultDate} is greater than end date: ${dateEndDate}`);
      // elText.should.match(reportDetail.username, 'Selected UserName did not match');
    });
  }

  exportRunReportResults(){
    this.exportRunReportBtn.waitForVisible();
    this.exportRunReportBtn.click();
    browser.pause(3000);
  }

  selectFromReports(reportOption){
    this.navigateToTab(reportOption);
  }

  addCustomer(){
    const custDetails = browser.options.users['EmailAdminAddCustomer'];
    this.addCustomerBtn.click();
    this.CustomerNumberTxtEmailAdmin.setValue(custDetails.custNumber);
    this.emailAddressTxtEmailAdmin.setValue(custDetails.email);
    this.customerTypeDrpDwnEmailAdmin.click();
    browser.pause(1000);
    const wE_TabElement = '//li[contains(text(),"'+custDetails.customerType+'")]';
    browser.click(wE_TabElement);
    this.performInsertBtn.click();
    // const txt = this.successAlertBox.getText();
    // console.log('text '+txt);
    // this.txt.should.be.containEql('Record added successfully.', 'Record not added successfully');
    this.closeBtnPDFWndw.click();
  }

  searchCustomer(customerToSearch){
    console.log('search cust '+ customerToSearch);
    const custDetails = browser.options.users[customerToSearch];
    this.customerNoTxtSearch.setValue(custDetails.custNumber);
    this.custEmailTxtSearch.setValue(custDetails.email);
    this.search.click();
    browser.pause(2000);
    this.resultTableEmailAdmin.waitForVisible();
  }

  updateCustomer(customerToUpdate){
    const custDetails = browser.options.users[customerToUpdate];
    this.editBtnFirstRecord.click();
    this.CustomerNumberTxtEmailAdmin.waitForVisible();
    this.CustomerNumberTxtEmailAdmin.setValue(custDetails.custNumber);
    this.emailAddressTxtEmailAdmin.setValue(custDetails.email);
    this.customerTypeDrpDwnEmailAdmin.click();
    browser.pause(1000);
    const wE_TabElement = '//li[contains(text(),"'+custDetails.customerType+'")]';
    browser.click(wE_TabElement);
    this.performUpdateBtn.click();
    browser.pause(3000);
    this.closeBtnPDFWndw.click();
    // this.resultTableEmailAdmin.waitForVisible();
  }


  deleteCustomer(deleteCustomer){
    this.deleteBtnFirstRecord.waitForVisible();
    this.deleteBtnFirstRecord.click();
    browser.pause(2000);
    this.yesBtnConfirmationPopup.click();
    browser.pause(3000);
    this.closeBtnPDFWndw.waitForVisible();
    this.closeBtnPDFWndw.click();
    this.searchCustomer(deleteCustomer);
    this.noRecordsFoundLable.isVisible().should.be.true('Record not deleted successfully');
  }

  sortByMemberNumber() {
    this.memberNumberLink.waitForVisible();
    this.memberNumberLink.click();
    browser.pause(8000);
    this.memberNumberLink.waitForVisible();
  }

  assertMemberNumberSort() {
    this.resultsContainer.waitForVisible();
    const ArrMemNumbers = new Array();
    let ArrBeforeSort = new Array();
    let SortedArrMemNumbers = new Array();
    var indexOfCustNo = this.getColumnIndex('Account #');
    this.resultsContainer.$$('.rgRow td:nth-child('+indexOfCustNo+'),.rgAltRow td:nth-child('+indexOfCustNo+')').forEach((element) => {
      const elText = element.getText();
      ArrMemNumbers.push(elText);
    });
    ArrBeforeSort = ArrMemNumbers.slice();
    SortedArrMemNumbers = ArrMemNumbers.sort((a, b) => a - b);
    console.log('b4 Sort '+ ArrBeforeSort);
    console.log('aftr Sort '+ SortedArrMemNumbers);
    // const flag = ArrBeforeSort.every((v, i) => v === SortedArrMemNumbers[i]);
    // const flag = (JSON.stringify(ArrBeforeSort) === JSON.stringify(SortedArrMemNumbers));
    ArrBeforeSort.should.be.eql(SortedArrMemNumbers, 'Member number not sorted');
  }


  changePageSize(size) {
    this.resultsContainer.waitForVisible();
    this.pageSizeList.click();
    browser.pause(5000);
    const wE_listPageSize = `.rcbItem=${size}`;
    browser.element(wE_listPageSize).scroll();
    browser.click(wE_listPageSize);
    browser.pause(5000);
    this.resultsContainer.waitForVisible();
  }

  assertPageSize(sizes) {
    this.pageSizeList.waitForVisible();
    const elementSize = browser.elements('#ctl00_ContentPlaceHolder1_ResultsGrid_ctl00 .rgRow,.rgAltRow').value.length;
    sizes.should.be.eql(elementSize.toString(), 'Search results are not matching with selected Page size');
  }

  openPdfDocument() {
    this.resultsContainer.waitForVisible();
    this.pdfDocumentIcons.click(); // clicks on first pdf document available under search results grid
    browser.pause(3000);
  }

  viewAndVerifyPDF() {
    this.pdfWindow.waitForVisible();
    browser.pause(6000);
    this.pdfWindow.isVisible().should.not.be.false('pdf window is opened - false');
    // var wElem = $('//iframe[contains(@name,"ctl00_RadWindowManager")]').value;
    browser.frame('RadWindow1');
    this.pdfOpenedView.waitForVisible();
    this.pdfOpenedView.isVisible().should.not.be.false('pdf content/pdf is not available in pdf window');
    browser.frameParent();
    const flag = this.closeBtnPDFWndw.isVisible();
    if(flag){
      this.closeBtnPDFWndw.click();
    }
  }

  searchDocumentType(documentType) {
    this.documentTypeDropdown.waitForVisible();
    this.documentTypeDropdown.click();
    browser.pause(3000);
    const wE_listDocumentType = '//li[((@class="rcbItem") or (@class="rcbHovered")) and text()="'+documentType+'"]';
    browser.click(wE_listDocumentType);
    browser.pause(3000);
    this.search.waitForVisible();
    browser.pause(3000);
  }

  selectDocumentSubType(subType){
    this.documentSubTypeDrpdwn.waitForVisible();
    this.documentSubTypeDrpdwn.click();
    browser.pause(3000);
    const wE_listDocumentType = '//li[((@class="rcbItem") or (@class="rcbHovered")) and text()="'+subType+'"]';
    browser.click(wE_listDocumentType);
    browser.pause(3000);
    this.search.waitForVisible();
    browser.pause(3000);
  }

  sendEmailFrmSearchRslt(){
    browser.pause(3000);
    this.resultsContainer.waitForVisible();
    const user = browser.options.users['EmailToSend'];
    // const { browserName } = browser.desiredCapabilities;
    // super.user = users[browserName];
    // console.log('jason '+ user['email']);    
    if(this.custRowFrstChkBx.isVisible()){
      this.custRowFrstChkBx.click();
      this.sendEmailBtn.click();
      browser.pause(3000);
      var wElem = $('//iframe[contains(@name,"ctl00_RadWindowManager")]').value;
      browser.frame(wElem);
    }else{
      browser.execute('window.scrollTo(document.body.scrollWidth, 0)');
    }
    this.emailTxtFrmSearchRslt.setValue(user.email);
    this.sendEmailBtn.click();
    this.closeBtnPDFWndw.waitForVisible();
    this.closeBtnPDFWndw.click();
    browser.pause(3000);
    if(this.closeBtnPDFWndw.isVisible()){
      this.closeBtnPDFWndw.click();
    }
  }

  getColumnIndex(colName){
    // this.resultsContainer.waitForVisible();
    var index; 
    const w_elements = browser.elements('//th[contains(@class,"rgHeader")]/a');
    // console.log('length '+w_elements.value[1].ELEMENT);
    browser.pause(3000);
    // console.log(w_elements);
    for(let i=0; i< w_elements.value.length; i++){
      var txt = browser.elementIdText(w_elements.value[i].ELEMENT).value;
      // var txt = browser.element(w_elements.value[i].value).getText();
      browser.pause(1000);
      if(txt===colName){
        index = i;
        break;
      }
    }
    if(browser.element('//th[@class="rgHeader rgExpandCol"]').isVisible()){
      return index+2;
    }else if(browser.element('//th[text()="View PDF"]').isVisible()){
      return index+2;
    }else{
      return index+1;
    }
  }

    // this.resultsContainer.$$('.rgHeader a').forEach((element) => {
    //   const elText = element.getText();
    //   if(elText.eql(colName)){
    //     element.ge
    //   }
      // elText.should.match(documentType, 'Selected document type did not match');
    // });

  assertDocumentTypeResults(documentType) {
    this.resultsContainer.waitForVisible();
    var indexOfDocType = this.getColumnIndex('Document Type');
    this.resultsContainer.$$('.rgRow td:nth-child('+indexOfDocType+'),.rgAltRow td:nth-child('+indexOfDocType+')').forEach((element) => {
      const elText = element.getText();
      // console.log(elText);
      elText.should.match(documentType, 'Selected document type did not match');
    });
  }

  partialNameSearch(name) {
    this.documentSearchBtn.waitForVisible();
    // this.documentSearchBtn.click();
    this.memberName.waitForVisible();
    this.memberName.setValue(name);
    this.search.click();
  }

  assertPartialNameResults(name) {
    this.resultsContainer.waitForVisible();
    browser.pause(3000);
    var indexOfAccNo = this.getColumnIndex('Customer Name');
    this.resultsContainer.$$('.rgRow td:nth-child('+indexOfAccNo+'),.rgAltRow td:nth-child('+indexOfAccNo+')').forEach((element) => {
      let elText = element.getText();
      elText = elText.toLowerCase();
      elText.should.containEql(name.toLowerCase());
    });
  }

  numberSearch(number) {
    this.documentSearchBtn.waitForVisible();
    // this.documentSearchBtn.click();
    this.memberNumber.setValue(number);
    this.search.click();
    this.documentSearchBtn.waitForVisible();
  }

  assertNumberResults(number) {
    this.resultsContainer.waitForVisible();
    var indexOfAccNo = this.getColumnIndex('Account #');
    this.resultsContainer.$$('.rgRow td:nth-child('+indexOfAccNo+'),.rgAltRow td:nth-child('+indexOfAccNo+')').forEach((element) => {
      const elText = element.getText();
      console.log('elText '+elText);
      elText.should.match(number);
    });
  }

  dateSearch(startDate, endDate) {
    this.documentSearchBtn.waitForVisible();
    this.startDate.setValue(startDate);
    this.endDate.setValue(endDate);
    this.search.click();
  }

  assertDateResults(startDate, endDate) {
    const dateStartDate = new Date(startDate);
    const dateEndDate = new Date(endDate);
    var indexOfDate = this.getColumnIndex('Invoice Date');
    this.resultsContainer.waitForVisible();
    this.resultsContainer.$$('.rgRow td:nth-child('+indexOfDate+'),.rgAltRow td:nth-child('+indexOfDate+')').forEach((element) => {
      const elText = element.getText();
      const resultDate = new Date(elText);
      (resultDate >= dateStartDate).should.be.true(`result date: ${resultDate} is less than start date: ${dateStartDate}`);
      (resultDate <= dateEndDate).should.be.true(`result date: ${resultDate} is greater than end date: ${dateEndDate}`);// shouldJS API
    });
  }

  newNameSearchFromResults(name) {
    this.newSearchBtn.waitForVisible();
    this.newSearchBtn.click();
    this.memberName.waitForVisible();
    this.memberName.setValue(name);
    this.search.click();
  }

  newNumberSearchFromResults(number) {
    this.newSearchBtn.waitForVisible();
    this.newSearchBtn.click();
    this.memberNumber.waitForVisible();
    this.memberNumber.setValue(number);
    this.search.click();
    this.documentSearchBtn.waitForVisible();
  }

  assertDownloadedFile(fileName, fileDirectory){
    browser.pause(3000);
    // AccNo = 'abc';
    const dirOfDownloadedFile = path.resolve(fileDirectory);
    const pathOfDownloadedFile = dirOfDownloadedFile+'\\'+fileName;
    console.log(' Path of file downloaded from API respose: '+pathOfDownloadedFile);
    flag = fse.existsSync(pathOfDownloadedFile);
    flag.should.be.true('File not exist or downloaded');
    // fse.unlinkSync(pathOfDownloadedFile);
    let dataBuffer = fse.readFileSync(pathOfDownloadedFile);
    // let data = pdf(dataBuffer);
    // console.log(data);
    // console.log('pdf text: '+ data.text);
    pdf(dataBuffer).then((data) => {
      console.log("Read downloaded pdf's data : "+data.text);
      var strFrmPdf  = data.text;
      strFrmPdf.should.containEql(elTextAccNo, 'Account No. from application not matched in pdf of API response.');
    });

  }

  exportDataFromSearchResults() {
    browser.execute('window.scrollTo(document.body.scrollWidth, 0)');
    this.exportBtn.waitForVisible();
    this.exportBtn.click();
    browser.pause(3000);
    // var myObject;
    // myObject = new ActiveXObject("Scripting.FileSystemObject");
    // if(myObject.FileExists("C:\\Users\\MTFrancis\\Downloads\\DocumentSearchResults.csv")){
    //   console.log("File Exists");
    // } else {
    //   console.log("File doesn't exist");
    // }
    //yet to verify the download path
  }

  lastPageBtnFromSearchResults() {
    this.exportBtn.waitForVisible();
    this.PageBtnNumber.isVisible().should.not.be.false('There is only one search result page');
    const firstBtnNumber = this.PageBtnNumber.getText();
    this.lastPageBtn.waitForVisible();
    this.lastPageBtn.click();
    browser.pause(5000);
    const lastBtnNumber = this.PageBtnNumber.getText();
    firstBtnNumber.should.not.eql(lastBtnNumber);
  }
}
export default new DocSearchPage();
