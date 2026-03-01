import {test,expect} from '@playwright/test'
test.only('Login Section - Positive Case',async function ({page}) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{delay:0})
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{name:'Login'}).click()
    expect(await page.getByText('Dashboard')).toBeVisible()
})

test('Login Section - Negative Case',async function ({page}) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{delay:0})
    await page.getByPlaceholder('Username').fill('admin',{delay:3000})
    await page.getByPlaceholder('Password').fill('Admin123',{delay:3000})
    await page.getByRole('button',{name:'Login'}).click()
    expect(await page.getByText('Invalid credentials')).toBeVisible()
})