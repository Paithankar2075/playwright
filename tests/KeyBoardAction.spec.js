const {test, expect} = require('@playwright/test');


test("Key board actions", async ({page} )=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    // await page.locator("input#userEmail").fill("anujpaikroy7@gmail.com") 
    // await page.keyboard.press("Control+A");  

    // await page.keyboard.press("clear");

    await page.locator("input#userEmail").click();
    await page.locator("input#userEmail").pressSequentially("ANUJ PAIKROY", {delay: 5000});
    await page.keyboard.type("ANUJ PAIKROY", {delay: 5000});

    await page.keyboard.press("Control+A");  
    await page.keyboard.press("Enter");  
    await page.keyboard.press("Escape"); 
    await page.keyboard.press("Tab"); 
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowRight"); 
    await page.keyboard.press("Control+A+S"); 
    await page.keyboard.press("Control+S"); 





    await page.pause();
    //Enter username
    //await page.locator("input#userEmail").fill("anujpaikroy7@gmail.com") 
});