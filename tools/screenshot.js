const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1012, height: 1012, deviceScaleFactor: 4});
  await page.goto('http://localhost:4200', { waitUntil: 'networkidle2' });
  const buffer = await page.screenshot({
    type: 'jpeg',
    fullPage: true
  });
  fs.writeFileSync('page.jpg', buffer);

  await browser.close();
})();
