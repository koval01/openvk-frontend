import { login, register, waitForTurnstile } from './helpers';
import { expect, test } from './fixtures';

test('demo login reaches the 2007 shell', async ({ page }) => {
  await login(page);
  await expect(page.locator('.sidebar').getByRole('link', { name: 'My Page', exact: true })).toBeVisible();
  await expect(page.locator('.sidebar').getByRole('link', { name: 'My Feed', exact: true })).toBeVisible();
  await expect(page.locator('.page_header')).toBeVisible();
});

test('wrong password stays on the login form', async ({ page }) => {
  await page.goto('/login');
  await page.getByTestId('auth-login').fill('id1');
  await page.getByTestId('auth-password').fill('nope-nope');
  await waitForTurnstile(page);
  await page.getByTestId('auth-submit').click();
  await expect(page.getByTestId('auth-error')).toBeVisible();
});

test('a failed login flashes above the welcome text, not inside it', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('auth-login').fill('id1');
  await page.getByTestId('auth-password').fill('nope-nope');
  await waitForTurnstile(page);
  await page.getByTestId('auth-submit').click();

  const flash = page.locator('.page_content > .msg.msg_err');
  await expect(flash).toBeVisible();
  await expect(flash).toHaveAttribute('data-testid', 'auth-error');
  await expect(flash).toContainText('Login failed');
  await expect(flash).toContainText('The username or password you entered is incorrect.');
  await expect(page.locator('.page_content > *').first()).toHaveClass(/msg_err/);
});

test('a blocked request shows the access error, not a raw API string', async ({ page }) => {
  await page.route('**/api/v1/auth/login', (route) => route.fulfill({ status: 403, body: '' }));
  await page.goto('/login');
  await page.getByTestId('auth-login').fill('id1');
  await page.getByTestId('auth-password').fill('openvk');
  await waitForTurnstile(page);
  await page.getByTestId('auth-submit').click();

  const flash = page.getByTestId('auth-error');
  await expect(flash).toContainText('Access error');
  await expect(flash).not.toContainText('forbidden');
});

test('new accounts can register and log out', async ({ page }) => {
  await register(page);
  await page.locator('#logout_link').click();
  await expect(page.getByTestId('auth-form')).toBeVisible();
});

test('anna and pavel can sign in with the demo password', async ({ page }) => {
  await login(page, 'anna', 'openvk');
  await expect(page.locator('.page_yellowheader')).toBeVisible();
  await page.locator('#logout_link').click();
  await login(page, 'pavel', 'openvk');
  await expect(page.locator('.sidebar')).toBeVisible();
});

test('signed-out visitors see the login form', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('auth-form')).toBeVisible();
  await expect(page.getByTestId('auth-toggle')).toBeVisible();
  await expect(page).toHaveTitle('V Kontakte | Welcome');
});

test('login page uses the 2007 title and form', async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByTestId('auth-form')).toBeVisible();
  await expect(page.locator('.page_yellowheader')).toHaveText('Log in');
  await expect(page.getByRole('link', { name: 'Forgot your password?' })).toBeVisible();
  await expect(page).toHaveTitle('V Kontakte | Log in');
});
