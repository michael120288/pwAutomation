import {test, expect} from '@playwright/test';

const timeout = 5000
test.beforeEach(async ({page}) => {
    await page.goto('https://demoqa.com/login')
})

test('authentication through ui', async ({ page, browserName }) => {
    const name = page.locator('#submit')
    expect(name).toHaveText('Log out')
    //await page.waitForTimeout(timeout)
    await page.screenshot({path: `screenshots/${browserName}.png`})
})