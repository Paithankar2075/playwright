const {test, expect} = require('@playwright/test');


test("User actions", async ({page} )=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Fill operation
    await page.locator("input#name").fill("Anuj");

    //visibility assertion
    await expect(page.locator("input#name")).toBeVisible();
    await expect(page.locator("input#name")).toBeEditable();
    await expect(page.locator("input#name")).toBeEnabled();

    //textcontent assertion
    const name2 = await page.locator("input#name").textContent();
    await console.log(name2);

    //Wait for certan element to be visible or loaded
    await page.waitForLoadState("networkidle");  
    await page.waitForSelector("p[class='description'] span");
    const text = await page.locator("p[class='description'] span").textContent();
    await console.log(text);
    await expect(await page.getByRole('checkbox', { name: 'Sunday' })).toBeChecked();
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    
    let resultBefCLick = await page.getByRole('checkbox', { name: 'Sunday' }).isChecked();

    await console.log(resultBefCLick);
    await page.getByRole('checkbox', { name: 'Sunday' }).uncheck();

    let resultAfterClick = await page.getByRole('checkbox', { name: 'Sunday' }).isChecked();

    await console.log(resultAfterClick);

    await expect(page.locator("p[class='description'] span").toHaveText("This is a sample page to practice your automation skills."));







    




});