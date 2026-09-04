import { expect, test } from '@playwright/test';

test.describe('unknown browser language', () => {
  test.use({ locale: 'xx-XX' });

  test('falls back to Russian', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
    await expect(page.locator('.page_yellowheader')).toHaveText('Добро пожаловать');
    await expect(page.locator('.header_navigation').getByRole('link', { name: 'вход' })).toBeVisible();
  });
});

test.describe('English browser language', () => {
  test.use({ locale: 'en-US' });

  test('selects English without a stored choice', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('.page_yellowheader')).toHaveText('Welcome');
  });
});

test.describe('language picker', () => {
  test.use({ locale: 'ru-RU' });

  test('switches language and keeps it after reload', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
    await page.getByTestId('all-languages').click();
    await expect(page.locator('.page_yellowheader')).toContainText('Выбрать язык');
    await page.getByTestId('lang-en').click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('.page_yellowheader')).toContainText('Choose language');
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('.page_yellowheader')).toContainText('Choose language');
  });
});
