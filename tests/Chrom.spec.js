import { test, expect} from '@playwright/test';

import { chromium } from 'playwright';

test('CHROMI', async () => {


    const browser = await chromium.launch();

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.com/");

    await page.locator("//input[@id='twotabsearchtextbox']").fill("iphone 14 pro max");

    await page.locator("//input[@id='twotabsearchtextbox']").press("Enter");



    expect(await page.locator("//input[@id='twotabsearchtextbox']").screenshot()).toMatchSnapshot('searchbox.png');

    expect(await page.screenshot()).toMatchSnapshot('searchpage.png');

    await browser.close();

})