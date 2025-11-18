import { test, expect } from '@playwright/test';

test('homepage screenshot', async ({ browser }) => {
  const context = await browser.newContext({ bypassCSP: true, cacheEnabled: false });
  const page = await context.newPage();

  // Listen for all console events and log them to the test's output
  page.on('console', msg => {
    console.log(`Browser console: ${msg.type()} ${msg.text()}`);
  });

  await page.goto('file:///app/index.html');
  await page.screenshot({ path: 'verification/verification.png' });
  await context.close();
});
