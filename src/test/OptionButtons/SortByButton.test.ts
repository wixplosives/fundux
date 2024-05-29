import { expect } from 'chai';
import { chromium, Browser, Page, Locator } from 'playwright-chromium';
import { describe, it, before, after } from 'mocha';
import { createServer, ViteDevServer } from 'vite';
import { options } from '../../test-kit/OptionButtons/constants';
import { SortByButtonDriver } from '../../test-kit/OptionButtons/sortByButton-driver';

describe('SortByButton Component', function () {
   this.timeout(5000);

   let server: ViteDevServer;
   let browser: Browser;
   let page: Page;
   let sortByButtonDriver: SortByButtonDriver;

   const port: number = 5174;

   before(async function () {
      server = await createServer({ server: { port: port } });
      await server.listen();
      browser = await chromium.launch();
   });

   after(async function () {
      await browser.close();
      await server.close();
   });

   beforeEach(async function () {
      page = await browser.newPage();
      await page.goto(`http://localhost:${port}`);
      sortByButtonDriver = new SortByButtonDriver(page);
   });

   afterEach(async function () {
      await page.close();
   });

   it('toggles the dropdown visibility when the button is clicked', async function () {
      expect(await sortByButtonDriver.dropDownVisibility()).to.be.false;
      await sortByButtonDriver.toggleDropdown();
      expect(await sortByButtonDriver.dropDownVisibility()).to.be.true;
      await sortByButtonDriver.toggleDropdown();
      expect(await sortByButtonDriver.dropDownVisibility()).to.be.false;
   });

   it('closes the dropdown options list by clicking any sorting option', async function () {
      for (const option of options) {
         await sortByButtonDriver.toggleDropdown();
         expect(await sortByButtonDriver.optionVisibility(option)).to.be.true;
         await sortByButtonDriver.clickOption(option);
         expect(await sortByButtonDriver.optionVisibility(option)).to.be.false;
      }
   });

   it('adds the sorting option text to the button on click', async function () {
      for (const option of options) {
         await sortByButtonDriver.toggleDropdown();
         await sortByButtonDriver.clickOption(option);
         expect(await sortByButtonDriver.sortByButtonText()).to.equal(
            `Sort By: ${option} ▼`
         );
      }
   });
});
