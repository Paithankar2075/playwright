const {test, expect } = require('@playwright/test');

test('Child tab12 functionality', async({context, page})=> {

  // Navigate to Amazon India
  await page.goto('https://www.amazon.in');

  // Example: click a link that opens a new window/tab
  const [childPage] = await Promise.all([
    context.waitForEvent('page'),          // Wait for new child window
    page.click('a[target="_blank"]')       // Action that triggers it
  ]);

  // Wait for the child window to load
  await childPage.waitForLoadState();

  // Print child window URL
  console.log('Child window URL:', childPage.url());

  // Bring child window to front
  await childPage.bringToFront();

  // Get all open tabs/windows
  const allPages = context.pages();
  console.log(`Total open windows/tabs: ${allPages.length}`);

  // Print URLs of all tabs
  allPages.forEach((p, i) => console.log(`Tab ${i + 1}: ${p.url()}`));
});
