const puppeteer = require('puppeteer');

(async () => {
  const browserURL = 'http://localhost:21222';
  const browser = await puppeteer.connect({browserURL});

  // const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // await page.screenshot({ path: 'example.png' });
  await page.setViewport({
    width: 1260,
    height: 820,
    deviceScaleFactor: 1,
  });
  await page.goto('https://twitter.com/login');

  // loging process

  await page.click('[data-testid="loginButton"]');
  await page.waitForTimeout(4000);
  await page.click('[autocomplete="username"]')
  await page.waitForTimeout(2000);
  await page.keyboard.type('<YOUR EMAIL>');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  await page.keyboard.type('<YOUR PASSWORD>');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Enter');

  await page.screenshot({ path: 'afterSignIn.png' });
  

  // like button
  // await page.waitForTimeout(4000);
  // await page.click('[aria-label="Like"]');
  // await page.waitForTimeout(1500);

  // retweet button

  // await page.waitForTimeout(4000);
  // await page.click('[aria-label="Retweet"]');
  // await page.waitForTimeout(1500);
  // await page.click('[data-testid="retweetConfirm"]');
  
  // await page.screenshot({ path: 'example.png' });
  // tweeting process
  
  // tweet button

  await page.waitForTimeout(4000);
  await page.click('[href="/compose/tweet"]');
  await page.waitForTimeout(1500);
  await page.keyboard.type('قاعد اغرد من العلالي.');
  await page.waitForTimeout(1000);
  await page.keyboard.down('ShiftRight');
  await page.keyboard.down('ControlRight');
  await page.keyboard.press('Enter');

  await page.keyboard.up('ShiftRight');
  await page.keyboard.up('ControlRight');

  await browser.close();

})();