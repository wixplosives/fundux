import { expect } from 'chai';
import { chromium, Browser, Page, Locator } from 'playwright-chromium';
import { describe, it, before, after } from 'mocha';
import { createServer, ViteDevServer } from 'vite';
import { SortByButtonDriver } from '../../test-kit/OptionButtons/sortByButton-driver';
import { sortByButtonDropDownListOptions } from '../../test-kit/OptionButtons/constants';

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

   it('should toggle dropdown options list on button click', async function () {
      expect(await sortByButtonDriver.dropDownVisibility()).to.be.false;
      await sortByButtonDriver.toggleDropdown();
      expect(await sortByButtonDriver.dropDownVisibility()).to.be.true;
      await sortByButtonDriver.toggleDropdown();
      expect(await sortByButtonDriver.dropDownVisibility()).to.be.false;
   });

   it('should close dropdown options list on option click', async function () {
      for (const option of sortByButtonDropDownListOptions) {
         await sortByButtonDriver.toggleDropdown();
         expect(await sortByButtonDriver.optionVisibility(option)).to.be.true;
         await sortByButtonDriver.clickOption(option);
         expect(await sortByButtonDriver.optionVisibility(option)).to.be.false;
      }
   });

   it('should add option to button text on option click', async function () {
      for (const option of sortByButtonDropDownListOptions) {
         await sortByButtonDriver.toggleDropdown();
         await sortByButtonDriver.clickOption(option);
         expect(await sortByButtonDriver.optionsButtonText()).to.equal(
            `Sort By: ${option} ▼`
         );
      }
   });
});
