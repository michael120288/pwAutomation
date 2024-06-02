import { test, expect } from "./todoPage";

test("fixture test", async ({ todoPage, page }) => {
  await todoPage.addTodo("our fixture test");
  await expect(page.getByTestId("todo-title")).toContainText([
    "our fixture test",
  ]);
});
