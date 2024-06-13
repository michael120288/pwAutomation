import {expect, test} from '@playwright/test';
//test.describe.configure({mode:'default'});

test.describe('ASSERSION',()=>{


test('assersions soft', async ({page,browserName}) => {
  //test.use({ viewport: { width: 500, height: 500 } });
  // test.slow();
  await page.goto('https://www.lambdatest.com/')
  const title = await page.title()
  expect.soft(title).toContain('LambdaTest')
  const header = page.locator('h1')
  expect(await header.textContent()).toContain('Next-Generation Mobile Apps and Cross Browser ')
  await expect(page.locator(' img[src$=\'Vimeo.svg\']')).toHaveAttribute('alt','vimeo',{timeout:7000})
  const path = await page.video().path();
  console.log(path);
})
})