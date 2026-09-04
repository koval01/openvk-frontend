import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { expectUploadCreated, openNav, register, waitForPost, waitForTurnstile } from './helpers';
import { expect, test } from './fixtures';

const fixtures = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures');
const tinyPng = path.join(fixtures, 'tiny.png');
const tinyWav = path.join(fixtures, 'tiny.wav');
const tinyWebm = path.join(fixtures, 'tiny.webm');

test('photos, audio, video and avatar upload, display, then delete', async ({ page }) => {
  await register(page);

  await openNav(page, 'My Photos');
  await expect(page.getByTestId('photo-file')).toBeVisible();
  const photoPost = waitForPost(page, '/api/v1/photos');
  await page.getByTestId('photo-file').setInputFiles(tinyPng);
  await expectUploadCreated(photoPost);
  await expect(page.locator('img[src*="/media/"]')).toBeVisible();
  await expect(page.getByTestId('albums-error')).toHaveCount(0);

  await openNav(page, 'My Page');
  await expect(page.getByTestId('profile-photos').locator('img[src*="/media/"]')).toBeVisible();
  const avatarPost = waitForPost(page, '/api/v1/settings/avatar');
  await page.getByTestId('avatar-file').setInputFiles(tinyPng);
  await expectUploadCreated(avatarPost);
  await expect(page.getByTestId('profile-avatar')).toHaveAttribute(
    'src',
    /\/media\//,
  );

  await openNav(page, 'My Audios');
  await page.getByTestId('audio-artist').fill('Playwright');
  await page.getByTestId('audio-title').fill('Fixture wav');
  const audioPost = waitForPost(page, '/api/v1/audio');
  await page.getByTestId('audio-file').setInputFiles(tinyWav);
  await expectUploadCreated(audioPost);
  await expect(page.getByText('Playwright — Fixture wav')).toBeVisible();
  await page.locator('[data-testid^="play-audio-"]').click();
  await expect(page.locator('#aj_player_track_title')).toContainText('Playwright — Fixture wav');

  await openNav(page, 'My Videos');
  await page.getByTestId('video-title').fill('Fixture clip');
  const videoPost = waitForPost(page, '/api/v1/videos');
  await page.getByTestId('video-file').setInputFiles(tinyWebm);
  await expectUploadCreated(videoPost);
  await expect(page.getByText('Fixture clip')).toBeVisible();
  await expect(page.locator('video[src*="/media/"]')).toBeVisible();

  await openNav(page, 'My Photos');
  await expect(page.locator('[data-testid^="delete-photo-"]')).toHaveCount(2);
  await page.locator('[data-testid^="delete-photo-"]').first().click();
  await expect(page.locator('[data-testid^="delete-photo-"]')).toHaveCount(1);
  await page.locator('[data-testid^="delete-photo-"]').click();
  await expect(page.locator('[data-testid^="delete-photo-"]')).toHaveCount(0);

  await openNav(page, 'My Audios');
  await page.locator('[data-testid^="delete-audio-"]').click();
  await expect(page.getByText('No audio yet.')).toBeVisible();

  await openNav(page, 'My Videos');
  await page.locator('[data-testid^="delete-video-"]').click();
  await expect(page.getByText('No videos yet.')).toBeVisible();
});

test('deleting an account removes the page and the uploaded file', async ({ page, request }) => {
  const account = await register(page);
  await openNav(page, 'My Photos');
  const photoPost = waitForPost(page, '/api/v1/photos');
  await page.getByTestId('photo-file').setInputFiles(tinyPng);
  await expectUploadCreated(photoPost);
  const photo = page.locator('img[src*="/media/"]').first();
  await expect(photo).toBeVisible();
  const src = await photo.getAttribute('src');
  expect(src).toBeTruthy();

  await openNav(page, 'My Settings');
  await page.getByRole('link', { name: 'Security', exact: true }).click();
  await page.getByTestId('delete-account-password').fill(account.password);
  await page.getByTestId('delete-account').click();
  await expect(page.getByTestId('auth-form')).toBeVisible();

  await page.getByTestId('auth-login').fill(account.loginName);
  await page.getByTestId('auth-password').fill(account.password);
  await waitForTurnstile(page);
  await page.getByTestId('auth-submit').click();
  await expect(page.getByTestId('auth-error')).toBeVisible();

  const response = await request.get(src ?? '', { failOnStatusCode: false });
  expect(response.status()).toBe(404);
});

test('my photos list stays empty for a second account', async ({ page }) => {
  await register(page);
  await openNav(page, 'My Photos');
  const photoPost = waitForPost(page, '/api/v1/photos');
  await page.getByTestId('photo-file').setInputFiles(tinyPng);
  await expectUploadCreated(photoPost);
  await expect(page.locator('img[src*="/media/"]')).toBeVisible();
  const profileHref = await page
    .locator('.sidebar')
    .getByRole('link', { name: 'My Page', exact: true })
    .getAttribute('href');

  await page.locator('#logout_link').click();
  await register(page);
  await openNav(page, 'My Photos');
  await expect(page.getByTestId('albums-summary')).toHaveText("You don't have any albums");
  await expect(page.locator('img[src*="/media/"]')).toHaveCount(0);

  expect(profileHref).toBeTruthy();
  await page.goto(profileHref ?? '/');
  await expect(page.getByTestId('profile-photos').locator('img[src*="/media/"]')).toBeVisible();
});

test('unsupported photo files surface a validation error', async ({ page }) => {
  await register(page);
  await openNav(page, 'My Photos');
  const photoPost = waitForPost(page, '/api/v1/photos');
  await page.getByTestId('photo-file').setInputFiles({
    name: 'note.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('not an image'),
  });
  const response = await photoPost;
  expect(response.status()).toBeGreaterThanOrEqual(400);
  await expect(page.getByTestId('albums-error')).toBeVisible();
  await expect(page.locator('img[src*="/media/"]')).toHaveCount(0);
});
