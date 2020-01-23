const page = require('../../src/pages/docSearch.page');
const { When, Then } = require('cucumber');


When('I search with name {string}', (name) => {
  page.partialNameSearch(name.replace(/"/g, ''));
});

When('I navigate to {string} tab', (name) => {
  page.navigateToTab(name.replace(/"/g, ''));
});

When('I launch externalClientAPI', () => {
  page.navigateToExternalClientAPI();
});

When('I navigate and set value', () => {
  page.navigateToCodeBase();
});

Then('read outlook mail', () => {
  page.readOutlook();
});

When('add new customer in email admin tab', () => {
  page.addCustomer();
});

When('I select client app {string}', (clientApp) => {
  page.selectClientApp(clientApp.replace(/"/g, ''));
});

When('search for customer in email admin {string}', (searchCustmr) => {
  page.searchCustomer(searchCustmr.replace(/"/g, ''));
});

When('I select {string} from reports tab', (reportOption) => {
  page.selectFromReports(reportOption.replace(/"/g, ''));
});

When('fill details and run report for activity report {string}', (reportDetails) => {
  page.fillDetailsAndRunReport(reportDetails.replace(/"/g, ''));
});

When('fill details and run report for email report {string}', (reportDetails) => {
  page.fillEnrollmentReport(reportDetails.replace(/"/g, ''));
});

When('fill details and run report for email sent report {string}', (reportDetails) => {
  page.fillEmailSentRunReport(reportDetails.replace(/"/g, ''));
});

When('add new record in report permissions {string}', (reportDetails) => {
  page.addNewRecordReportPermissions(reportDetails.replace(/"/g, ''));
});

Then('assert run report generated for {string}', (reportDetails) => {
  page.assertRunReportResults(reportDetails.replace(/"/g, ''));
});

Then('assert enrollment report generated for {string}', (reportDetails) => {
  page.assertEnrollmentReportResults(reportDetails.replace(/"/g, ''));
});

Then('assert email sent report generated for {string}', (reportDetails) => {
  page.assertEmailSentReportResults(reportDetails.replace(/"/g, ''));
});

Then('edit and update customer details {string}', (updateCustomer) => {
  page.updateCustomer(updateCustomer.replace(/"/g, ''));
});

Then('delete customer and assert {string}', (deleteCustomer) => {
  page.deleteCustomer(deleteCustomer.replace(/"/g, ''));
});

When('I search with account number {string}"', (number) => {
  page.numberSearch(number.replace(/"/g, ''));
});

When('I search with date from {string} to {string}', (startDate, endDate) => {
  page.dateSearch(startDate.replace(/"/g, ''), endDate.replace(/"/g, ''));
});

When('I search with document type {string}', (type) => {
  page.searchDocumentType(type.replace(/"/g, ''));
});

When('I select document sub type {string}', (subType) => {
  page.selectDocumentSubType(subType.replace(/"/g, ''));
});

When('send email for first searched result', () => {
  page.sendEmailFrmSearchRslt();
});

When('I open document from search result page', () => {
  page.openPdfDocument();
});

When('I change page size to {string}', (size) => {
  page.changePageSize(size.replace(/"/g, ''));
});


When('I sort by member number', () => {
  page.sortByMemberNumber();
});

Then('Result contain sorted member number', () => {
  page.assertMemberNumberSort();
});

Then('Page size changes to {string}', (size) => {
  page.assertPageSize(size.replace(/"/g, ''));
});

Then('View pdf document and verify', () => {
  page.viewAndVerifyPDF();
});

Then('Results contain {string}', (name) => {
  page.assertPartialNameResults(name.replace(/"/g, ''));
});

Then('Result contain customer number {string}', (numbers) => {
  page.assertNumberResults(numbers.replace(/"/g, ''));
});

Then('Results should be from {string} to {string}', (startDate, endDate) => {
  page.assertDateResults(startDate.replace(/"/g, ''),  endDate.replace(/"/g, ''));
});

Then('Result contain document type {Taxes}', (documentType) => {
  page.assertDocumentTypeResults(documentType.replace(/"/g, ''));
});

Then('New search from results page with Name {string}', (name) => {
  page.newNameSearchFromResults(name.replace(/"/g, ''));
});

Then('New search from results page with Number {string}', (number) => {
  page.newNumberSearchFromResults(number.replace(/"/g, ''));
});

Then('Export data from Search results', () => {
  page.exportDataFromSearchResults();
});

Then('export the run report results', () => {
  page.exportRunReportResults();
});

Then('assert downloaded file {string} in path {string}', (fileName, fileDirectory) => {
  page.assertDownloadedFile(fileName.replace(/"/g, ''), fileDirectory.replace(/"/g, ''));
});

Then('View the last page of the Search result', () => {
  page.lastPageBtnFromSearchResults();
});


