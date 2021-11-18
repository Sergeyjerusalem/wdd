
const { Builder, By } = require('selenium-webdriver');
require('chromedriver');


describe("desc", function () {


  it('test', async function () {

    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://chromedriver.chromium.org/home');
    await driver.wait(async () => {
      const titles = await driver.findElements(By.xpath('//*[@id="h.p_ID_13"]/span'));
      return !!titles.length
    }, 5000)
    const title1 = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
    const text = await title1.getText();
    expect(text).toBe('ChromeDriver');
    console.log(text);
    const headerItem = await driver.findElement(By.css('#WDxLfe > ul > li:nth-child(3) > div.PsKE7e.qV4dIc.Qrrb5.YSH9J > div'));
    headerItem.click();
    await driver.wait(async () => {
      const titles = await driver.findElements(By.xpath('//*[@id="h.p_ID_13"]/span'));
      return !!titles.length
    }, 5000);
    const title2 = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
    const text1 = await title2.getText();
    expect(text1).toBe('Chrome Extensions')
    console.log(text1);;
    await driver.executeScript('arguments[0].style.backgroundColor = "red" ', title2);
    await driver.quit();

  });
});

