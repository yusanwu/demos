const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.baidu.com/');
        await driver.findElement(By.name('wd')).sendKeys('骑着毛驴逗你玩儿', Key.RETURN);
        await driver.wait(until.titleIs('骑着毛驴逗你玩儿_百度搜索'), 1000);
    } finally {
        await driver.quit();
    }
})();