
import {test, expect} from '@playwright/test';

test("Verify login with valid credentials", async ({page} )=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("input#userEmail").fill("anujpaikroy7@gmail.com")  
    await page.fill("#userPassword", "Anuj@32943"); 
    await page.click("//input[@name='login']");
    await expect(page).toHaveURL(/dashboard/);
    await page.locator("div.card-body").filter({hasText: 'ZARA COAT 3'})
                             .getByRole('button', {name: 'Add To Cart'}).click();
    await page.locator("//button[@routerlink='/dashboard/cart']").click();
    await page.locator("//button[normalize-space()='Checkout']").click();
    await page.getByPlaceholder("Select Country").pressSequentially("Indi");
    await page.locator("//span[@class='ng-star-inserted']").nth(1).click();
    await page.locator("//a[normalize-space()='Place Order']").click();
    await expect(page.locator("//h1[text()=' Thankyou for the . ']")).toBeVisible();
    await expect(page.locator("#toast-container")).toBeVisible();
    await page.screenshot({path: "screenshot.png", fullPage: true});
})