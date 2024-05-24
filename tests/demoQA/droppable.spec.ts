import {expect, test} from '@playwright/test'
import { DragAndDrop } from '../../page_object/demoQA/interactions/Droppable'

test.describe('DROPPABLE', () => {
  test.skip('droppable',async({page})=>{
    let dragAndDrop = new DragAndDrop(page)
    await dragAndDrop.open()
    await dragAndDrop.dragAndDropToTheElement()
  })
  test('test',async({page}) => {
    await page.goto('https://demoqa.com/date-picker')
    await page.locator('#datePickerMonthYearInput').click()
    const arrayElement = await page.locator('.react-datepicker__day').allTextContents()
    //const arrayEl = await page.locator('.react-datepicker__day')
    const arrayEl = await page.locator('.react-datepicker__day')
    .filter({hasNot:page.locator('.react-datepicker__day--outside-month')})
    .allTextContents()
    console.log(arrayEl, 'array contents');
    arrayEl.forEach(text=>{

          console.log("text")


     })
  })
})
