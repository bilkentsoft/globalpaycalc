const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
  });

  await page.goto('https://globalpaycalc.com/admin', { waitUntil: 'networkidle0' });
  
  await page.type('input[type="email"]', 'test@test.com');
  await page.type('input[type="password"]', '123456');
  await page.click('button[type="submit"]');
  
  await new Promise(r => setTimeout(r, 3000));
  await browser.close();
})();
