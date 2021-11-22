let Jasmine = require('jasmine');
let jasmine = new Jasmine;

(async () => {
  jasmine.loadConfigFile('/Users/pro/webdriver 2/spec/support/jasmine.json');
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  jasmine.configureDefaultReporter({ showColors: true });
  jasmine.execute();


})();
const { Builder, By } = require('selenium-webdriver');
require('chromedriver');
const DocPage = require('../src/pages/documentationpage');


describe("desc", function () {


  it('test', async function () {

    let driver = await new Builder()
      .forBrowser('chrome')
      .build();
   
   let docPage = new DocPage(driver);
   
   
   await driver.get('https://www.selenium.dev/documentation/');
   await docPage.browse('webdriver')
   await docPage.waitTitle();
    let text = await docPage.getText('mainTitle')
    expect(text).toBe('WebDriver');
    await docPage.selectHeaderItem(2);
    await docPage.waitTitle();
    text = await docPage.getText('mainTitle');
    expect(text).toBe('The Selenium Browser Automation Project');
    await driver.quit();
  });
});

