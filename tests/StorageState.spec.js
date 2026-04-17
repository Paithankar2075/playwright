
import {test, expect} from '@playwright/test';

let webContext;
test.beforeAll(async({browser})=>{
    const context = await browser.newContext();  //opened new browser instance
    const page = await context.newPage();  //opened a new tab inside the browser

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("input#userEmail").fill("anujpaikroy7@gmail.com")  
    await page.fill("#userPassword", "Anuj@32943"); 
    await page.click("//input[@name='login']");

    await page.waitForLoadState('networkidle');
 
    //capture all details of my credentials
    await context.storageState({path: 'state.json'});
    webContext = await browser.newContext({storageState: 'state.json'});


})

test("Add zara coat 3 item into the card", async ()=>{
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.locator("div.card-body").filter({hasText: 'ZARA COAT 3'})
                             .getByRole('button', {name: 'Add To Cart'}).click();
    await page.locator("//button[@routerlink='/dashboard/cart']").click();
});

test("Storage state feature", async ()=>{
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.locator("div.card-body").filter({hasText: 'ADIDAS ORIGINAL'})
                             .getByRole('button', {name: 'Add To Cart'}).click();
    await page.locator("//button[@routerlink='/dashboard/cart']").click();
});