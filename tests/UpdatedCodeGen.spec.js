import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('efefefef');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('efefefefe');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('fefe');
  await page.getByRole('button', { name: 'Login' }).click();
});