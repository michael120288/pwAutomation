import {test as setup,expect} from '@playwright/test';

const authPath = './.auth/user.json'

setup('authentication through ui', async ({ page },testInfo) => {
    // const user = testInfo.project.use?.user?? 'Michael';
    // const password = testInfo.project.use?.password?? 'm!chael12SH';

    await page.goto('https:demoqa.com/login')
    await page.getByPlaceholder('UserName').fill('Michael')
    await page.getByPlaceholder('Password').fill('m!chael12SH')
    await page.getByRole('button', {name: 'Login'}).click()
    await page.waitForURL('https://demoqa.com/profile')
    await page.screenshot({path: 'creenshots/authenticated.png'})
    await expect(page.locator('#userName-value')).toHaveText("Michael")

    await page.context().storageState({path: authPath})
   //await page.saveStorageState({path: authPath})
})