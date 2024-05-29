import { Locator, Page } from 'playwright-chromium';
import { selectors } from '../../test-kit/OptionButtons/selectors';

export class SortByButtonDriver {
   private sortByButton: Locator;
   private dropDownOptionList: Locator;

   constructor(private page: Page) {
      this.sortByButton = page.locator(selectors.sortByButton);
      this.dropDownOptionList = page.locator(
         selectors.sortbyButtonDropDownList
      );
   }

   async toggleDropdown() {
      await this.sortByButton.click();
   }

   dropDownVisibility(): Promise<boolean> {
      return this.dropDownOptionList.isVisible();
   }

   async clickOption(option: string) {
      const optionLocator = this.page.locator(
         selectors.dropDownOptionListItem(option)
      );
      await optionLocator.click();
   }

   optionVisibility(option: string): Promise<boolean> {
      const optionLocator = this.page.locator(
         selectors.dropDownOptionListItem(option)
      );
      return optionLocator.isVisible();
   }

   sortByButtonText(): Promise<string> {
      return this.sortByButton.innerText();
   }
}
