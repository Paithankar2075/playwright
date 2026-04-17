
const {test, expect} = require('@playwright/test');

//import {test, expect} from '@playwright/test';

test("Verify login with valid credentials", async ({browser} )=>{

    const context = await browser.newContext();  //opened new browser instance

    const page = await context.newPage();  //opened a new tab inside the browser

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    //Enter username
    await page.fill("input#userEmail", "anujpaikroy7@gmail.com");

    //Enter password
    await page.locator("input#userPassword").fill("Anuj@32943");

    //Click on login
    await page.locator("//input[@name='login']").click();

    //Assertion
    await expect(page).toHaveURL(/dashboard/);

});




