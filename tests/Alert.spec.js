const {test, expect } = require('@playwright/test')

test("JS Simple Alert", async( {page} )=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#alertBtn").click();
    page.on('dialog', async(dialog)=>{
        console.log("Dialog detected")
        console.log("My msg printed in side alert box "+dialog.message())
        await dialog.accept();
    })

    //await page.locator("#alertBtn").click();
})

test.only("JS confirmation Alert", async( {page} )=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    
    page.on('dialog', async(dialog)=>{

        console.log("Dialog detected")

        await dialog.accept("Anuj"); 
        await dialog.dismiss();

        console.log("My msg printed in side alert box "+dialog.message())
        
        console.log("Click on OK button")
    })

    await page.locator("#promptBtn").click();
    await page.pause();

})