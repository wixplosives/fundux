import { Locator, Page } from 'playwright-chromium';
import { selectors } from '../../test-kit/OptionButtons/selectors';

export class OptionButtonsDriver {
   protected optionButton: Locator;
   protected dropDownOptionList: Locator;

   constructor(
      protected page: Page,
      optionButtonSelector: string,
      dropDownListSelector: string
   ) {
      this.optionButton = page.locator(optionButtonSelector);
      this.dropDownOptionList = page.locator(dropDownListSelector);
   }

   async toggleDropdown() {
      await this.optionButton.click();
   }

   async dropDownVisibility(): Promise<boolean> {
      return this.dropDownOptionList.isVisible();
   }

   async clickOption(option: string) {
      const optionLocator = this.page.locator(
         selectors.dropDownOptionsListItem(option)
      );
      await optionLocator.click();
   }

   async optionVisibility(option: string): Promise<boolean> {
      const optionLocator = this.page.locator(
         selectors.dropDownOptionsListItem(option)
      );
      return optionLocator.isVisible();
   }

   async optionsButtonText(): Promise<string> {
      return this.optionButton.innerText();
   }

   async optionText(option: string): Promise<string> {
      const optionLocator = this.page.locator(selectors.dropDownOptionsListItem(option));
      return optionLocator.innerText();
   }
}
