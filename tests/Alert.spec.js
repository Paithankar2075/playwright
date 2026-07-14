const {test, expect } = require('@playwright/test')

test("JS Simple Alert", async( {page} )=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//button[@id='alertBtn']").click();
    page.on('dialog', async(dialog)=>{
        console.log("Dialog detected")

        //console.log(dialog.message());
        console.log("My msg printed in side alert box "+dialog.message())
        await dialog.accept();
    })

    //await page.locator("#alertBtn").click();
})

test("JS confirmation Alert", async( {page} )=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    
    page.on('dialog', async(dialog)=>{

        console.log("Dialog detected")

        console.log("My msg printed in side alert box "+dialog.message())
        
        await dialog.accept("Anuj"); 
        
        console.log("Click on OK button")
    })

    await page.locator("#promptBtn").click();

       await page.screenshot({path: 'page.png'});
   // await page.pause();

})