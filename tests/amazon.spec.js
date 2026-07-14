import {test,expect} from '@playwright/test'

test("amazon", async({browser})=>{ 

await browser.newContext();
const page = await browser.newPage();
await page.goto("https://www.amazon.in/");

a

});

