
const { test, expect } = require("@playwright/test");

test("iframe concept", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  await page.waitForSelector("#courses-iframe"); // wait for iframe
  await page.locator("#courses-iframe").scrollIntoViewIfNeeded();

  const frame = page.frameLocator("#courses-iframe");

  await expect(
    frame.locator("//div[@class='nav-outer clearfix']//a[normalize-space()='Home']")
  ).toBeVisible();
});

