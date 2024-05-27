import { expect } from 'chai';
import { chromium, Browser, Page } from 'playwright-chromium';
import { describe, it, before, after } from 'mocha';
import { options } from './constants';

describe('SortByButton Component', function () {
   this.timeout(5000);

   let browser: Browser;
   let page: Page;

   before(async function () {
      browser = await chromium.launch();
   });

   after(async function () {
      await browser.close();
   });

   beforeEach(async function () {
      page = await browser.newPage();
      await page.goto('http://localhost:5173');
   });

   afterEach(async function () {
      await page.close();
   });

   it('should toggle dropdown options list on button click', async function () {
      const button = page.getByRole('button', { name: 'Sort By' });
      const optionsList = page.locator('ul:has-text("Newest")');

      expect(await optionsList.isVisible()).to.be.false;
      await button.click();
      expect(await optionsList.isVisible()).to.be.true;
      await button.click();
      expect(await optionsList.isVisible()).to.be.false;
   });

   it('should close dropdown options list on option click', async function () {
      const button = page.getByRole('button', { name: 'Sort By' });

      for (const option of options) {
         await button.click();
         const optionElement = page.locator(`li:has-text("${option}")`);
         expect(await optionElement.isVisible()).to.be.true;
         await optionElement.click();
         expect(await optionElement.isVisible()).to.be.false;
      }
   });

   it('should add option to button text on option click', async function () {
      const button = page.getByRole('button', { name: 'Sort By' });

      for (const option of options) {
         await button.click();
         const optionElement = page.locator(`li:has-text("${option}")`);
         await optionElement.click();
         expect(await button.innerText()).to.equal(`Sort By: ${option} ▼`);
      }
   });
});
