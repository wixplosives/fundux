import { expect } from 'chai';
import { chromium, Browser, Page, Locator } from 'playwright-chromium';
import { describe, it, before, after } from 'mocha';
import { createServer, ViteDevServer } from 'vite';
import { options } from '../../test-kit/OptionButtons/constants';
import { SortByButtonDriver } from '../../test-kit/OptionButtons/sortByButton-driver';
import {
   launchServerAndBrowser,
   shutdownServerAndBrowser,
} from '../../test-kit/serverSetup';
import viteConfig from '../../../vite.config.js';

const port: number | undefined = viteConfig.server?.port;

describe('SortByButton Component', function () {
   this.timeout(5000);

   let browser: Browser;
   let page: Page;
   let sortByButtonDriver: SortByButtonDriver;

   before(async function () {
      browser = await launchServerAndBrowser();
   });

   after(async function () {
      await shutdownServerAndBrowser();
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
