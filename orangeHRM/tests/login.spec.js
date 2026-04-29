const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.pages');

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  await expect(page).toHaveTitle('OrangeHRM')

});