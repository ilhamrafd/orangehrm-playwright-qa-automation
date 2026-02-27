import {test,expect} from '@playwright/test'
test("OrangeHRM",async function ({page}) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{timeout:6000})
    await page.getByPlaceholder('Username').fill('Admin',{delay:3000})
    await page.getByPlaceholder('Password').fill('admin123',{delay:3000})
    await page.getByRole('button',{name:'Login'}).click()
    await page.waitForTimeout(3000)
})