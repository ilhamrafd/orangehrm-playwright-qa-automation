// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './orangeHRM/tests',
  timeout: 30000,
  retries: 0,
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://opensource-demo.orangehrmlive.com/'
  },
});

