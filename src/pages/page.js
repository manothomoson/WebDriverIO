export default class Page {
  trait(href) {
    
    browser.pause(2000);
    // console.log('after pause '+ browser.getUrl().indexOf(href));
    browser.waitUntil(() => (
      browser.getUrl().indexOf(href) > -1
    ), `Url never contained href: ${href}`);
  }

  navigate(navPage){
    browser.url(navPage);
    browser.windowHandleMaximize();
    
  }

  get user() {
    return this._user;
  }

  set user(username) {
    this._user = username;
  }
}
