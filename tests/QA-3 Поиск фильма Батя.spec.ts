import { test, expect } from '@playwright/test'

test('Проверка поиска фильма "Батя"', async ({ page }) => {
    await page.goto('/') // переходим на главную страницу KION
    await page.getByPlaceholder('Поиск').click() // кликаем в поле поиска в хэдере
    await page.getByPlaceholder('Поиск').fill('батя') // вводим текст "батя"
    await page.getByPlaceholder('Поиск').press('Enter') // нажимаем Enter
    await page.locator('[_ngcontent-kion-c189186959]').first().click() // выбираем первый постер в выдаче
    await page.getByRole('button', { name: 'Да, я взрослый' }).click() // подтверждаем, что есть 18
    await expect(page).toHaveURL(/.*882206108/) // проверяем URL страницы, id фильма "Батя"
    await expect(page).toHaveTitle('Батя (фильм 2020) смотреть онлайн бесплатно в хорошем HD качестве') // проверяем title-заголовок на вкладке браузера, название фильма "Батя"
})