import { test, expect, Page } from '@playwright/test'

let page: Page // create variable with page

test.describe('Проверка Телеканалов с жанром "Спортивные"', () => {
  // Run Playwright Tests Sequentially in Same Browser Context
  test.describe.configure({ mode: 'serial' })
  
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage() // create a new Page instance
    await page.goto('/') // переходим на главную страницу KION
  })

  test.afterAll(async () => {
    await page.close() // close the browser instance
  })
    
  test('Переход в раздел "Телеканалы"', async () => {
    await page.locator('web-header').getByRole('link', { name: 'Телеканалы' }).click() // нажимаем на "Телеканалы" в хэдере
  })

  test('Выбор телеканалов по жанру "Спортивные"', async () => {
    await page.getByRole('button', { name: 'Спортивные Спортивные' }).click() // выбираем жанр "Спортивные"
  })

  test('Просмотр телеканалов с жанром "Спортивные"', async () => {
    await page.getByRole('link', { name: 'МАТЧ! АРЕНА' }).click() // выбираем телеканал "МАТЧ! АРЕНА"
    await page.getByRole('link', { name: 'channel_poster МАТЧ! ИГРА' }).click() // выбираем телеканал "МАТЧ! ИГРА"
    await page.getByRole('link', { name: 'channel_poster МАТЧ! СТРАНА' }).click() // выбираем телеканал "МАТЧ! СТРАНА"
    await page.getByRole('link', { name: 'channel_poster Extreme Sports' }).click() // выбираем телеканал "Extreme Sports"
    await page.getByRole('link', { name: 'channel_poster Russian Extreme Ultra HD' }).click() // выбираем телеканал "Russian Extreme Ultra HD"
  })
})
