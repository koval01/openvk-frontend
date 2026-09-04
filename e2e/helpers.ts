import { expect, type Page, type Response } from '@playwright/test';

export function uniqueLogin(): string {
  return `p${Date.now()}${Math.floor(Math.random() * 999)}`.slice(0, 20);
}

export async function waitForTurnstile(page: Page) {
  await expect(page.getByTestId('turnstile')).toBeVisible();
  await expect(page.getByTestId('auth-submit')).toBeEnabled({ timeout: 20_000 });
}

export async function login(page: Page, loginName = 'id1', password = 'openvk') {
  await page.goto('/login');
  await page.getByTestId('auth-login').fill(loginName);
  await page.getByTestId('auth-password').fill(password);
  await waitForTurnstile(page);
  await page.getByTestId('auth-submit').click();
  await expect(page.locator('.sidebar')).toBeVisible();
}

export async function register(page: Page, loginName = uniqueLogin(), password = 'password123') {
  await page.goto('/login');
  await page.getByTestId('auth-toggle').click();
  await page.getByTestId('auth-login').fill(loginName);
  await page.getByTestId('auth-password').fill(password);
  await page.getByTestId('auth-terms').check();
  await waitForTurnstile(page);
  await page.getByTestId('auth-submit').click();
  await expect(page.locator('.sidebar')).toBeVisible();
  return { loginName, password };
}

export async function openNav(page: Page, name: string) {
  await page.locator('.sidebar').getByRole('link', { name, exact: true }).click();
}

export async function expectUploadCreated(pending: Promise<Response>) {
  const response = await pending;
  expect(response.status(), `${response.url()} ${response.status()}`).toBeGreaterThanOrEqual(200);
  expect(response.status(), `${response.url()} ${response.status()}`).toBeLessThan(300);
  return response;
}

export function waitForPost(page: Page, urlPart: string) {
  return page.waitForResponse(
    (response) => response.url().includes(urlPart) && response.request().method() === 'POST',
  );
}
