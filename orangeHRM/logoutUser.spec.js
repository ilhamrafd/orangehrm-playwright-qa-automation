import {test,expect} from '@playwright/test'
test('Logout User',async function ({page}) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{name:'Login'}).click()
    expect(await page.getByText('Dashboard')).toBeVisible()
    await page.getByAltText('profile picture').click()
    await page.getByRole('menuitem',{name:'Logout'}).click()
    expect(await page.getByText('Login')).toBeVisible()
})