const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const chromedriver = require('chromedriver');
// rm -rf ~/.browser-driver-manager && npx browser-driver-manager install chromedriver --verbose
require('dotenv').config({ path: '~/.browser-driver-manager/.env' });
const chromedriverPath =
  process.env.CHROMEDRIVER_BIN ||
  process.env.CHROMEDRIVER_TEST_PATH ||
  chromedriver.path ||
  process.env.CHROME_BIN;
console.log(
  `CHROME DRIVER (get) === ${chromedriverPath} (${process.env.CHROMEDRIVER_BIN} / ${process.env.CHROMEDRIVER_TEST_PATH} / ${chromedriver.path / ${process.env.CHROME_BIN}}) [${process.env.CHROME_TEST_VERSION}] ** ${process.env.CHROME_TEST_PATH}`
);

const getWebdriver = () => {
  const service = new chrome.ServiceBuilder(chromedriverPath);
  const options = new chrome.Options().addArguments('--headless');

  if (process.env.CHROME_BIN) {
    options.setBinaryPath(process.env.CHROME_BIN);
  }

  return new Builder()
    .setChromeOptions(options)
    .forBrowser('chrome')
    .setChromeService(service)
    .build();
};

module.exports.getWebdriver = getWebdriver;
