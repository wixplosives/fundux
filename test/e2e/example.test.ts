import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
   await page.goto('http://localhost:5173');
   await page.getByRole('button', { name: 'Log In' }).click();
});
