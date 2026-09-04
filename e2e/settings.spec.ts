import { type Page } from '@playwright/test';
import { openNav, register, waitForTurnstile } from './helpers';
import { expect, test } from './fixtures';

async function pageToken(page: Page) {
  return page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue('--ovk-page').trim(),
  );
}

test('appearance switches between the default and dark themes', async ({ page }) => {
  await register(page);
  await openNav(page, 'My Settings');
  await expect(page.getByTestId('appearance-form')).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'default');
  expect(await pageToken(page)).toBe('#ffffff');
  await page.getByTestId('theme-dark').check();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(await pageToken(page)).toBe('#000000');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByTestId('appearance-form')).toBeVisible();
  expect(await pageToken(page)).toBe('#000000');
  await page.getByTestId('theme-default').check();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'default');
  expect(await pageToken(page)).toBe('#ffffff');
});

test('privacy tab can save wall access', async ({ page }) => {
  await register(page);
  await openNav(page, 'My Settings');
  await page.getByRole('link', { name: 'Privacy', exact: true }).click();
  await page.locator('select[name="privacy_wall"]').selectOption('friends');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Saved.')).toBeVisible();
});

test('password change is required on the next login', async ({ page }) => {
  const account = await register(page);
  await openNav(page, 'My Settings');
  await page.getByRole('link', { name: 'Security', exact: true }).click();
  await page.locator('input[name="current_password"]').fill(account.password);
  await page.locator('input[name="new_password"]').fill('password456');
  await page.getByRole('button', { name: 'Change password' }).click();
  await expect(page.getByText('Password changed.')).toBeVisible();

  await page.locator('#logout_link').click();
  await page.getByTestId('auth-login').fill(account.loginName);
  await page.getByTestId('auth-password').fill(account.password);
  await waitForTurnstile(page);
  await page.getByTestId('auth-submit').click();
  await expect(page.getByTestId('auth-error')).toBeVisible();

  await page.getByTestId('auth-password').fill('password456');
  await waitForTurnstile(page);
  await page.getByTestId('auth-submit').click();
  await expect(page.locator('.sidebar')).toBeVisible();
});
