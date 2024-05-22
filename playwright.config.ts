import { defineConfig } from '@playwright/test';

export default defineConfig({
   testDir: './test',
   timeout: 30000,
   retries: 2,
   reporter: [['list']],
   use: {
      baseURL: 'http://localhost:5173',
      headless: true,
      viewport: { width: 1280, height: 720 },
   },
});
