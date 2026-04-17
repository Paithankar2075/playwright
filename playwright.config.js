// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter:'html',
  timeout: 40000,
  expect: {
    timeout: 4000
  },
  retries: 0,
 use: {
   browserName: 'chromium',
   viewport: { width: 1500, height: 1080 },
   screenshot: 'only-on-failure',
   video: 'retain-on-failure',
   trace: 'retain-on-failure',
  },
});

