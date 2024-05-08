import { defineConfig } from '@playwright/test';

export default defineConfig({
   testDir: './test',
   timeout: 30000,
   retries: 2,
   reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
   use: {
      baseURL: 'http://localhost:5173',
      headless: false,
      viewport: { width: 1280, height: 720 },
   },
});
