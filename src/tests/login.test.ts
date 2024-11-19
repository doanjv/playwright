import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe.parallel('Login Tests', () => {
  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(await page.locator('xpath=//button[@id="react-burger-menu-btn"]')).toBeVisible();

  });

  test('this test is an example for a failure', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalidUser', 'invalidPassword');
    expect(await page.locator('xpath=//button[@id="react-burger-menu-btn"]')).toBeVisible();

  });
});
