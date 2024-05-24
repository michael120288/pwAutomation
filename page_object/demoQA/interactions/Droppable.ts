import { Page, expect } from '@playwright/test';
export class DragAndDrop {
  readonly page:Page
  constructor(page:Page ){
    this.page = page;
  }

  get dragEl(){
    return '#draggable'
  }
  get dropEl(){
     return '#droppable'
  }

  async open(){
    await this.page.goto('https://demoqa.com/droppable')
  }

  async dragAndDropToTheElement(){
    await this.page.locator(this.dragEl).dragTo(this.page.locator('#droppable').nth(0))
    expect(await this.page.locator(this.dropEl).nth(0).textContent()).toBe('Dropped!')
    expect(this.page.locator(this.dropEl).nth(0)).toHaveCSS('background-color', 'rgb(70, 130, 180)')
  }

}
//https://demoqa.com/droppable
