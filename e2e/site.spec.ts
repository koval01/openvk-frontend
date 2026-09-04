import { login } from './helpers';
import { expect, test } from './fixtures';

test('news wall accepts a guestbook note', async ({ page }) => {
  await login(page);
  await page.locator('.sidebar').getByRole('link', { name: 'My Feed', exact: true }).click();
  const stamp = `e2e wall ${Date.now()}`;
  await page.getByPlaceholder('Write…').fill(stamp);
  await page.locator('input.button[type="submit"]').click();
  await expect(page.getByText(stamp)).toBeVisible();
});

test('footer shows the current frontend build', async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByTestId('app-build')).toHaveText(/^build [A-Za-z0-9._-]+(?: \/ [A-Za-z0-9._-]+)?$/);
  await login(page);
  await expect(page.getByTestId('app-build')).toHaveText(/^build [A-Za-z0-9._-]+(?: \/ [A-Za-z0-9._-]+)?$/);
});

test('own profile shows the yellow name bar and wall', async ({ page }) => {
  await login(page);
  await page.locator('.sidebar').getByRole('link', { name: 'My Page', exact: true }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('Ivan Petrov');
  const avatar = page.getByTestId('profile-avatar');
  await expect(avatar).toBeVisible();
  await expect(avatar).toHaveAttribute('src', /camera_200|\/media\//);
  await expect
    .poll(() => avatar.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0))
    .toBe(true);
  await expect(page.locator('#basicInfo')).toContainText('Saint Petersburg');
});

test('wall permalink uses the owner id and a local post number', async ({ page }) => {
  await login(page);
  await page.locator('.sidebar').getByRole('link', { name: 'My Page', exact: true }).click();
  const permalink = page.locator('a[href^="/wall"]').first();
  await expect(permalink).toHaveAttribute('href', /\/wall\d+_\d+/);
  const href = await permalink.getAttribute('href');
  await permalink.click();
  await expect(page).toHaveURL(new RegExp(`${href}$`));
  await expect(page.locator('.page_yellowheader')).toContainText('Ivan Petrov');
});

test('friends and messages pages list demo data', async ({ page }) => {
  await login(page);
  await page.locator('.sidebar').getByRole('link', { name: 'My Friends', exact: true }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('My Friends');
  await expect(page.getByText(/Anna|Pavel|friends/i).first()).toBeVisible();
  await page.locator('.sidebar').getByRole('link', { name: 'My Messages', exact: true }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('My Messages');
});

test('settings general tab can save the city', async ({ page }) => {
  await login(page);
  await page.locator('.sidebar').getByRole('link', { name: 'My Settings', exact: true }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('My Settings');
  const city = page.locator('input[name="city"]');
  await city.fill('Saint Petersburg');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Saved.')).toBeVisible();
});
