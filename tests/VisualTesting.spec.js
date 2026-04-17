const {test, expect } = require('@playwright/test')


test("Visual testing", async( {page} )=>{
    page.goto("https://google.com");

    expect(await page.locator("//a[normalize-space()='Register']").screenshot()).toMatchSnapshot("Register.png");

    expect(await page.screenshot()).toMatchSnapshot("GoogleHome.png");
   
})

