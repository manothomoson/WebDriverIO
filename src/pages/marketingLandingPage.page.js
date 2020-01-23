const Page = require('./page');
const should = require('should');

class MarketingLandingPage extends Page {

  get LandingPageTab() { return $('//span[text()="Landing Page"]'); }
  get resultTableForLandingPage() { return $('#ctl00_ContentPlaceHolder1_LandingPage'); }
  get previewIconFromLandingPageResultTable() { return $('#ctl00_ContentPlaceHolder1_LandingPage img[onclick*="ShowPreview"]'); }
  get viewSettingsBtFrmPreviewWndw() { return $('//a[text()="View Statements"]'); }
  get pageSizeTxtLandingPage() { return $('#ctl00_ContentPlaceHolder1_LandingPage_userControl_LandingPageGrid_ctl00 .rgPagerLabel'); }
  get pageSizeListLandingPage() { return $('#ctl00_ContentPlaceHolder1_LandingPage_userControl_LandingPageGrid_ctl00_ctl03_ctl01_PageSizeComboBox_Arrow'); }


  get creatingNewMsgTitle() { return $('.rwTitlebarControls em'); }
  get newMessageBtn() { return $('img[alt="Create new message"]'); }
  get messageName() { return $('#ctl00_ContentPlaceHolder1_txtMessageName'); }
  get messageDescription() { return $('#ctl00_ContentPlaceHolder1_txtMessageDescription'); }
  get resultTable() { return $('#ctl00_ContentPlaceHolder1_RadMultiPage1'); }
  
  navigateToLandingPage() {
    this.LandingPageTab.waitForVisible();
    this.LandingPageTab.click();
  }

  clickPreviewIconFromLandingPageTab() {
    this.resultTableForLandingPage.waitForVisible();
    this.resultTableForLandingPage.isVisible().should.be.true('Result table for Landing page is not visible');
    this.previewIconFromLandingPageResultTable.click();
    browser.pause(5000);
    const windwHandles = browser.windowHandles();
    browser.window(windwHandles.value[(windwHandles.value).length - 1]);
    this.viewSettingsBtFrmPreviewWndw.isVisible().should.be.true('Landing page preview window is not loaded properly');
    browser.pause(5000);
    browser.window(windwHandles.value[0]);
    browser.window(windwHandles.value[(windwHandles.value).length - 1]).close();
  }

  selectMessageCodeFromLandingPage(msgCode) {
    browser.pause(5000);
    var flag = this.pageSizeTxtLandingPage.isVisible();
    if(flag){
      this.changePageSizeLandingPage('50');
    }
    const locator = `//tr[td[text()="${msgCode}"]]`;
    browser.waitForVisible(locator);
    browser.click(locator);
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


}
export default new MarketingLandingPage();
