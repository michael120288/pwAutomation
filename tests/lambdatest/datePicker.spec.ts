import { test as it } from "@playwright/test";
import { DatePicker } from "../../page_object/DatePicker";
it.describe("DATE PICKER", function () {
  it("datepicker ", async ({ page }) => {
    let datePicker = new DatePicker(page);
    await page.goto("/selenium-playground/jquery-date-picker-demo");
    await page.screenshot({ path: "screenshot.png" });
    await datePicker.verifyHeader();
    await datePicker.dateFromToday()
    page.locator('.custom-checkbox').nth(1)
  });
});
