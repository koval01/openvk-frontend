import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const backend = path.resolve(root, '../openvk-backend');

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  expect: { timeout: 15_000 },
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:5173',
    locale: 'en-US',
    trace: 'retain-on-failure',
  },
  webServer: [
    {
      // Media lives in object storage now, so the suite needs a bucket.
      command: 'docker compose --profile dev up silo silo-init',
      cwd: backend,
      url: 'http://127.0.0.1:9000/minio/health/live',
      reuseExistingServer: true,
      timeout: 120_000,
    },
    {
      command: 'cargo run',
      cwd: backend,
      url: 'http://127.0.0.1:8080/health',
      env: {
        STORAGE_BACKEND: 's3',
        S3_ENDPOINT: 'http://127.0.0.1:9000',
        S3_BUCKET: 'openvk',
        S3_REGION: 'auto',
        S3_ACCESS_KEY_ID: 'openvk',
        S3_SECRET_ACCESS_KEY: 'openvk-dev-secret',
        S3_PATH_STYLE: '1',
        // The dev server proxies /media to the bucket, so media stays same-origin.
        MEDIA_PUBLIC_BASE_URL: 'http://127.0.0.1:5173/media',
      },
      reuseExistingServer: true,
      timeout: 180_000,
    },
    {
      command: 'npm run dev -- --host 127.0.0.1 --port 5173',
      url: 'http://127.0.0.1:5173',
      reuseExistingServer: true,
      timeout: 120_000,
    },
  ],
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
