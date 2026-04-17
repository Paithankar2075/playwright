import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('anujpaikroy7@gmail.com');
  await page.getByRole('textbox', { name: 'email@example.com' }).press('Tab');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Anuj@32943');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(1).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
});