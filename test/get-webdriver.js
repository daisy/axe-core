const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const chromedriver = require('chromedriver');
// rm -rf ~/.browser-driver-manager && npx browser-driver-manager install chromedriver --verbose
require('dotenv').config({ path: '~/.browser-driver-manager/.env' });
const chromedriverPath =
  process.env.CHROMEDRIVER_TEST_PATH || chromedriver.path;
console.log(
  `CHROME DRIVER (get) === ${chromedriverPath} (${process.env.CHROMEDRIVER_TEST_PATH} / ${chromedriver.path}) [${process.env.CHROME_TEST_VERSION}] ** ${process.env.CHROME_TEST_PATH}`
);

const getWebdriver = () => {
  const service = new chrome.ServiceBuilder(chromedriverPath);

  const webdriver = new Builder()
    .setChromeOptions(new chrome.Options().addArguments('headless'))
    .forBrowser('chrome')
    .setChromeService(service)
    .build();
  return webdriver;
};

module.exports.getWebdriver = getWebdriver;
