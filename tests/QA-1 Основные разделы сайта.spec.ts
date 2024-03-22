import { test, expect } from '@playwright/test'

// Run a Group of Playwright Tests in Parallel
test.describe('Проверка отображения 4-х основных разделов сайта: Главная, Телеканалы, Фильмы, Сериалы', () => {
  // Run a Group of Playwright Tests in Parallel
  test.describe.configure({ mode: 'parallel' })
  
  test.beforeEach(async ({ page }) => {
    // Runs before each test.
    await page.goto('/') // переходим на главную страницу KION
    await expect(page).toHaveTitle('Онлайн-кинотеатр KION - фильмы, сериалы, ТВ и мультфильмы смотреть онлайн бесплатно в хорошем качестве') // проверяем title-заголовок на вкладке браузера
  })

  test('Проверка раздела "Главная"', async ({ page }) => {   
    const activeHeader = page.locator('.text-decoration-none.p1-regular.active') // константа локатора активного заголовка в хэдере
    await expect(activeHeader).toContainText('Главная') // проверяем отображение активного заголовка "Главная"
  })

  test('Проверка раздела "Телеканалы"', async ({ page }) => {   
    await page.locator('web-header').getByRole('link', { name: 'Телеканалы' }).click() // нажимаем на "Телеканалы" в хэдере
    await expect(page).toHaveURL(/.*tv/) // проверяем URL страницы
    await expect(page).toHaveTitle('Прямой эфир ТВ онлайн смотреть бесплатно каналы и трансляции в хорошем качестве') // проверяем title-заголовок на вкладке браузера
    
    const activeHeader = page.locator('.text-decoration-none.p1-regular.active') // константа локатора активного заголовка в хэдере
    await expect(activeHeader).toContainText('Телеканалы') // проверяем отображение заголовка "Телеканалы"
  })

  test('Проверка раздела "Фильмы"', async ({ page }) => {
    await page.locator('web-header').getByRole('link', { name: 'Фильмы' }).click() // нажимаем на "Фильмы" в хэдере
    await expect(page).toHaveURL(/.*video/) // проверяем URL страницы
    await expect(page).toHaveTitle('Смотреть фильмы онлайн бесплатно в хорошем качестве без регистрации - KION') // проверяем title-заголовок на вкладке браузера

    const activeHeader = page.locator('.text-decoration-none.p1-regular.active') // константа локатора активного заголовка в хэдере
    await expect(activeHeader).toContainText('Фильмы') // проверяем отображение заголовка "Фильмы"
  })

  test('Проверка раздела "Сериалы"', async ({ page }) => {
    await page.locator('web-header').getByRole('link', { name: 'Сериалы' }).click() // нажимаем на "Сериалы" в хэдере
    await expect(page).toHaveURL(/.*series/) // проверяем URL страницы
    await expect(page).toHaveTitle('Смотреть сериалы онлайн бесплатно в хорошем качестве без регистрации - KION') // проверяем title-заголовок на вкладке браузера

    const activeHeader = page.locator('.text-decoration-none.p1-regular.active') // константа локатора активного заголовка в хэдере
    await expect(activeHeader).toContainText('Сериалы') // проверяем отображение заголовка "Сериалы"
  
  })
})