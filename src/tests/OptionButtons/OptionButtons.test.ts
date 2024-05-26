import { expect } from 'chai';
import { chromium, Browser, Page } from 'playwright-chromium';
import { describe, it, before, after } from 'mocha';

describe('OptionButtons Component', function () {
   this.timeout(1000); // Increase timeout for Playwright

   let browser: Browser;
   let page: Page;

   before(async () => {
      browser = await chromium.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:5173'); // Update this URL to your app's URL
   });

   after(async () => {
      await browser.close();
   });

   it('should render OptionButtons component', async () => {
      await page.getByRole('button', { name: /log in/i }).click();
      const buttonText = await page.textContent('button');
      expect(buttonText).to.include('Log In');
   });
});
