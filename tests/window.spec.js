const { test, expect } = require('@playwright/test');

test('Handle multiple tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Click a button that opens a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),   // Wait for new tab
    page.click('#openwindow')       // Action that triggers new tab
  ]);

  await newPage.waitForLoadState();
  console.log(await newPage.title());

 // await page.pause(); // Pause to see the opened tabs
   // Title of new tab

  // Switch back to parent tab
  await page.bringToFront();
  console.log(await page.title()); 
    await page.pause();   // Title of parent tab
});