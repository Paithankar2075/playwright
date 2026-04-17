
//const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test';

test("Verify login with valid credentials", async ({page} )=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
 
    await page.fill("input#userEmail", "anujpaikroy7@gmail.com"); 

    await page.fill("input#userPassword", "Anuj@32943")

    await page.click("//input[@name='login']");

    await expect(page).toHaveURL(/dashboard/);
});



//fixture




