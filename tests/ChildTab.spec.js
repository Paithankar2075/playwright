const {test, expect } = require('@playwright/test')

test("child tab", async( {page} )=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");


})