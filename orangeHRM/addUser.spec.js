import {test,expect} from '@playwright/test'
test("Add User",async function ({page}) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{delay:0})
    await page.getByPlaceholder('Username').fill('Admin',{delay:3000})
    await page.getByPlaceholder('Password').fill('admin123',{delay:3000})
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByText('Admin').click()
    await page.getByRole('button',{name:' Add'}).click()
    await page.getByText('-- Select --').first().click() // User Role
    await page.keyboard.press('ArrowDown') // Admin
    await page.keyboard.press('Enter') 
    await page.getByText('-- Select --').click() // Status
    await page.keyboard.press('ArrowDown') // Enabled
    await page.keyboard.press('Enter')
    await page.getByPlaceholder('Type for hints...').fill('a') // Select Employee
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await page.getByRole('textbox').nth(2).fill('admin123') // Username
    await page.getByRole('textbox').nth(3).fill('adminadmin') // Password
    await page.getByRole('textbox').nth(4).fill('adminadmin') // Confirm Password
    await page.getByRole('button',{name:'Save'}).click()
})