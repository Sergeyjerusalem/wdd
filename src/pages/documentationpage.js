const { By } = require('selenium-webdriver');

class DocumentationPage  {
    constructor(driver) {
        this.driver = driver;
        this.mainTitle = '.td-content>h1';
        this.headerItems = '.navbar-collapse .nav-link';
        this.url = 'https://www.selenium.dev/documentation/';
    }

    async waitTitle() {
        this.driver.wait(async() => {
            const titles = await this.driver.findElements(By.css(this.mainTitle));
            return !!titles.length;
        },5000);
         
    }

    async browse(browseItem){
        this.drver.get(`${this.url}${browseItem}`);
    }

    async getText (element) {
        const target = await this.driver.findElement(By.css(this[element]));
        return await target.getText();
    }

    async selectHeaderItem(position) {
        const target = (await this.driver.findElement(By.css(this.headerItems)))[position];
        await target.click();
    }
}

module.exports = DocumentationPage;
//