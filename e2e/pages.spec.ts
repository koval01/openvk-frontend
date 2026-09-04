import { login, openNav, register } from './helpers';
import { expect, test } from './fixtures';

test('friends tabs, groups, notes and other stubs render their empty states', async ({ page }) => {
  await login(page);

  await openNav(page, 'My Friends');
  await expect(page.getByText(/friends/i).first()).toBeVisible();
  await page.locator('.tabs').getByRole('link', { name: 'Requests', exact: true }).click();
  await expect(page.getByText('No friend requests')).toBeVisible();
  await page.locator('.tabs').getByRole('link', { name: 'Friends online', exact: true }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('My Friends');

  await openNav(page, 'My Groups');
  await expect(page.locator('.vk-summary')).toBeVisible();

  await openNav(page, 'My Notes');
  await expect(page.locator('.ovk-empty')).toContainText('Nothing here yet');
  await openNav(page, 'My Events');
  await expect(page.locator('.ovk-empty')).toContainText('Nothing here yet');
  await openNav(page, 'My Feedback');
  await expect(page.locator('.ovk-empty')).toContainText('Nothing here yet');
  await openNav(page, 'Applications');
  await expect(page.locator('.ovk-empty')).toContainText('Nothing here yet');
  await openNav(page, 'Documents');
  await expect(page.locator('.ovk-empty')).toContainText('Nothing here yet');
});

test('messages composer keeps a local reply on the thread', async ({ page }) => {
  await login(page);
  await openNav(page, 'My Friends');
  await page.getByRole('link', { name: /Anna Sokolova/ }).first().click();
  await page.getByTestId('send-message').click();
  const stamp = `e2e im ${Date.now()}`;
  await page.locator('textarea[name="message"]').fill(stamp);
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText(stamp)).toBeVisible();
});

test('news tabs stay on the guestbook wall', async ({ page }) => {
  await login(page);
  await openNav(page, 'My Feed');
  await page.locator('.tabs').getByRole('link', { name: 'All news', exact: true }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('News');
  await page.locator('.tabs').getByRole('link', { name: 'My news', exact: true }).click();
  const stamp = `e2e news ${Date.now()}`;
  await page.getByPlaceholder('Write…').fill(stamp);
  await page.locator('input.button[type="submit"]').click();
  await expect(page.getByText(stamp)).toBeVisible();
});

test('a new page can write on its own wall', async ({ page }) => {
  await register(page);
  await openNav(page, 'My Page');
  const stamp = `e2e greeting ${Date.now()}`;
  await page.getByPlaceholder('Write…').fill(stamp);
  await page.locator('input.button[type="submit"]').click();
  await expect(page.getByText(stamp)).toBeVisible();
});
