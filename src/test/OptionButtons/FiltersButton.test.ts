import { expect } from 'chai';
import { chromium, Browser, Page, Locator } from 'playwright-chromium';
import { describe, it, before, after } from 'mocha';
import { createServer, ViteDevServer } from 'vite';
import { FiltersButtonDriver } from '../../test-kit/OptionButtons/filtersButton-driver';
import { filtersButtonDropDownListOptions } from '../../test-kit/OptionButtons/constants';

describe('FiltersButton Component', function () {
   this.timeout(5000);

   let server: ViteDevServer;
   let browser: Browser;
   let page: Page;
   let filterButtonDriver: FiltersButtonDriver;

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
      filterButtonDriver = new FiltersButtonDriver(page);
   });

   afterEach(async function () {
      await page.close();
   });

   it('toggle the dropdown visibility when the button is clicked', async function () {
      expect(
         await filterButtonDriver.dropDownVisibility(),
         'dropdown is visible'
      ).to.be.false;
      await filterButtonDriver.toggleDropdown();
      expect(await filterButtonDriver.dropDownVisibility()).to.be.true;
      await filterButtonDriver.toggleDropdown();
      expect(await filterButtonDriver.dropDownVisibility()).to.be.false;
   });

   it('append and remove the clicked filter option text to the button text', async function () {
      await filterButtonDriver.toggleDropdown();
      filtersButtonDropDownListOptions.forEach(async (option) => {
         await filterButtonDriver.clickOption(option);
         expect(await filterButtonDriver.optionsButtonText()).to.include(
            option
         );
         await filterButtonDriver.clickOption(option);
         expect(await filterButtonDriver.optionsButtonText()).not.to.include(
            option
         );
      });
      await filterButtonDriver.toggleDropdown();
   });

   it('toggle the “✓” prefix on filter option text when clicked', async function () {
      await filterButtonDriver.toggleDropdown();
      filtersButtonDropDownListOptions.forEach(async (option) => {
         await filterButtonDriver.clickOption(option);
         expect(await filterButtonDriver.optionText(option)).to.include('✓');
         await filterButtonDriver.clickOption(option);
         expect(await filterButtonDriver.optionText(option)).not.to.include(
            '✓'
         );
      });
   });
});
