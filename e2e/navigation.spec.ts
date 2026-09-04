import { login, openNav } from './helpers';
import { expect, test } from './fixtures';

const pages = [
  { link: 'My Page', heading: /Ivan Petrov|Page/ },
  { link: 'My Friends', heading: 'My Friends' },
  { link: 'My Photos', heading: 'My Photos' },
  { link: 'My Videos', heading: 'My Videos' },
  { link: 'My Audios', heading: 'My Audios' },
  { link: 'My Messages', heading: 'My Messages' },
  { link: 'My Notes', heading: 'My Notes' },
  { link: 'My Groups', heading: 'My Groups' },
  { link: 'My Events', heading: 'My Events' },
  { link: 'My Feed', heading: 'News' },
  { link: 'My Feedback', heading: 'My Feedback' },
  { link: 'My Settings', heading: 'My Settings' },
  { link: 'Applications', heading: 'Applications' },
  { link: 'Documents', heading: 'Documents' },
];

test('left navigation opens every section', async ({ page }) => {
  await login(page);
  for (const item of pages) {
    await openNav(page, item.link);
    await expect(page.locator('.page_yellowheader')).toContainText(item.heading);
  }
});

test('header search, groups, invite and help routes render', async ({ page }) => {
  await login(page);
  await page.locator('.header_navigation').getByRole('link', { name: 'groups' }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('My Groups');
  await page.locator('.header_navigation').getByRole('link', { name: 'invite' }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('Invite');
  await page.locator('.header_navigation').getByRole('link', { name: 'help' }).click();
  await expect(page.locator('.page_yellowheader')).toContainText('Help');
  await page.getByTestId('header-search-q').fill('openvk');
  await page.getByTestId('header-search-form').evaluate((form) =>
    (form as HTMLFormElement).requestSubmit(),
  );
  await expect(page.locator('.page_yellowheader')).toContainText('Search');
  await expect(page.locator('.vk-summary')).toContainText('openvk');
});
