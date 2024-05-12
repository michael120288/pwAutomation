import { test } from "@playwright/test";
test.describe("TEST EXAMPLES", function () {
  test.beforeAll(function () {
    console.log("before all tests");
  });
  test.beforeEach(function () {
    console.log("before each test");
  });
  test.afterAll(function () {
    console.log("after all tests");
  });
  test("test", () => {
    console.log("test1");
  });
  test("test2", () => {
    console.log("test2");
  });
  test("test3", () => {
    console.log("test3");
  });
  test("test4", () => {
    console.log("test4");
  });
});

test.describe("textbox", function () {
  test("fill text box", async function ({ page }) {
    /*
    const browser: Browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  */
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/input-form-demo"
    );

    await page.locator("#name").fill("Mike Smith");
    await page
      .locator(
        "[class='w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5'][type=\"email\"]"
      )
      .pressSequentially("michael@gmail.com", { delay: 100 });
    await page.locator('input[placeholder="Password"]').fill("test1234");
    await page
      .locator('[for="companyname"] ~ input[placeholder="Company"]')
      .fill("LLC Happy");
    await page.pause();
    //await page.selectOption('select[name="country"]',{value: "US"})
    await page.selectOption('select[name="country"]', {
      label: "United States",
    });
    await page
      .locator('label:has-text("City*") ~ input#inputCity')
      .fill("Orlando");
    await page.getByPlaceholder("Address 1").fill("704 Tobie ct");
    await page.getByRole("textbox", { name: "Address 2" }).fill("704 Tobie ct");
    await page.pause();
  });
});
