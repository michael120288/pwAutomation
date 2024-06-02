import { Page, expect } from "playwright/test";

export class DragAndDrop {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  get dragEl() {
    return '[draggable="true"]';
  }
  get dropHereEl() {
    return "#mydropzone";
  }
  get dropList() {
    return "#droppedlist";
  }
  get dragMe() {
    return "#draggable";
  }
  get dropMe() {
    return "#droppable";
  }

  /**
   *
   * @param text should pass a name of the element that should be dragged
   */
  async dragAndDropElement(text: string) {
    await this.page
      .locator(this.dragEl, { hasText: text })
      .dragTo(this.page.locator(this.dropHereEl));
    expect(await this.page.locator(this.dropList).textContent()).toContain(
      text
    );
  }
  async dragAndDropElementOption2(text: string) {
    await this.page.locator(this.dragEl, { hasText: text }).hover();
    await this.page.mouse.down();
    await this.page.locator(this.dropHereEl).hover();
    await this.page.mouse.up();
    expect(await this.page.locator(this.dropList).textContent()).toContain(
      text
    );
  }
  async dragAndDropElementDemo2(text: string, textInDropBox: string) {
    await this.page
      .locator(this.dragMe, { hasText: text })
      .dragTo(this.page.locator(this.dropMe));
    expect(await this.page.locator(this.dropMe).textContent()).toContain(
      textInDropBox
    );
    expect(this.page.locator(this.dropMe)).toHaveCSS(
      "background-color",
      "rgb(14, 186, 197)"
    );
  }
}
