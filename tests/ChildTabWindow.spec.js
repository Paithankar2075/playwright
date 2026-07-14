
const {test, expect } = require('@playwright/test');

test('Child tab functionality', async({context, page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await console.log(await page.title());

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),await page.locator("//button[text()='New Tab']").click()
    ])

    await console.log( newPage.title());
 
   const allPages = context.pages();
    await page.bringToFront();

    await page.pause();

  
   console.log(allPages.length);

})

test.only('Child window functionality', async({context, page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await console.log(await page.title());

    const [newPage,newPage2] = await Promise.all([
        context.waitForEvent('page'),await page.locator("#PopUp").click(),
        context.waitForEvent('page'),await page.locator("#PopUp").click()
    ])

    await console.log(await newPage.title());

    const allPages = context.pages();
    console.log(allPages.length);
})


import({test,expect}) from '@playwright/test'


test ("verify login page", async ({page}) =>

{


await page.goto("www.google.com");

await page.locator("#button").click();


})