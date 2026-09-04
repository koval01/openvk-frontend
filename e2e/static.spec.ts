import { login } from './helpers';
import { expect, test } from './fixtures';

test('guests can read about, rules, privacy, blog and help', async ({ page }) => {
  await page.goto('/login');
  await page.locator('.navigation_footer').getByRole('link', { name: 'about instance' }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('About this instance');
  await expect(page.locator('h4').filter({ hasText: 'Statistics' })).toBeVisible();

  await page.locator('.navigation_footer').getByRole('link', { name: 'rules' }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('Rules');
  await expect(page.getByText(/forbidden|запрещ/i).first()).toBeVisible();

  await page.locator('.navigation_footer').getByRole('link', { name: 'privacy' }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('Privacy');

  await page.locator('.navigation_footer').getByRole('link', { name: 'blog' }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('Blog');
  await expect(page.getByRole('link', { name: 'Стена — это гостевая книга' })).toBeVisible();
  await page.getByRole('link', { name: 'Стена — это гостевая книга' }).click();
  await expect(page).toHaveURL(/\/blog\/stena-ne-mikroblog$/);
  await expect(page.getByText(/гостевая книга/)).toBeVisible();

  await page.locator('.navigation_footer').getByRole('link', { name: 'help' }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('Help');
  await expect(page.locator('#faqhead').first()).toBeVisible();
});

test('knowledge-base aliases and the site tour stay on OpenVK URLs', async ({ page }) => {
  await page.goto('/kb/rules');
  await expect(page.locator('.page_yellowheader')).toContainText('Rules');
  await page.goto('/tour');
  await expect(page.locator('.page_yellowheader')).toContainText('Site Tour');
  await page.getByRole('button', { name: 'Profile' }).click();
  await expect(page.locator('#tour h2').first()).toBeVisible();
});

test('invite page shows a personal registration link', async ({ page }) => {
  await login(page);
  await page.locator('.header_navigation').getByRole('link', { name: 'invite' }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('Invite');
  await expect(page.getByTestId('invite-link')).toHaveValue(/\/login\?act=register&ref=/);
});
