const {test, expect} = require('@playwright/test');


test("User actions", async ({page} )=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Fill operation
    await page.locator("input#name").fill("Anuj");

    await page.locator("input#email").fill("er.paikroy@gmail.com");

    await page.fill("#phone","9767485897");

    await page.getByRole('textbox', { name: 'Address:' }).fill("Banglore");

    await page.getByRole('radio', { name: 'Male', exact: true }).click();

    await page.getByRole('checkbox', { name: 'Sunday' }).click();

    await page.locator("//button[@name='start' or @name='stop']").click();

    await page.locator("//button[@name='start' or @name='stop']").click();

    await page.locator("#country").selectOption("canada");

    await page.locator("#country").selectOption({index: 3});
  
    await page.locator("#country").selectOption({label: "Australia"});

    await page.locator("select#colors").selectOption(['Red', 'Blue', 'White']);

    await page.locator("//button[normalize-space()='Point Me']").scrollIntoViewIfNeeded

    await page.locator("//button[normalize-space()='Point Me']").hover();

    await page.locator("//button[normalize-space()='Copy Text']").dblclick();

    await page.locator("#draggable").dragTo(page.locator("#droppable"));

    const source = page.locator("#draggable");
    const target = page.locator("#droppable");
    source.dragTo(target);

    //Upload single file
    await page.locator("input#singleFileInput").setInputFiles("tests/sample1.txt");

    //Upload multiple files
    await page.locator("input#multipleFilesInput").setInputFiles(["tests/sample1.txt", "tests/sample2.txt"]);
    
    await page.waitForTimeout(20000);

    await page.pause();

    //await page.waitForTimeout(20000);
});


