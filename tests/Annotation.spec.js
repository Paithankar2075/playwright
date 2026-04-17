const {test, expect } = require('@playwright/test')

test("Test case 4", async( {page} )=>{
    test.slow();
    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
 
    await page.fill("input#usmail", "anujpaikroy7@gmail.com"); 
})



