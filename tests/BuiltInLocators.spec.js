
const {test, expect} = require('@playwright/test')

test('Advanced locators', async ({page})=>{
    //built in locators we have in playwright
    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    page.locator("//input[@name='username']").fill("admin");   
    
    page.getByPlaceholder("Username").fill("admin");   //input[@placehodler = 'username']
    page.getByAltText("company-branding").click();
})