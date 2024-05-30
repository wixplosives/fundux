import { Locator, Page } from 'playwright-chromium';

export class SortByButtonDriver {
   private sortByButton: Locator;
   private dropDownOptionList: Locator;

   constructor(private page: Page) {
      this.sortByButton = page.getByRole('button', { name: 'Sort By' });
      this.dropDownOptionList = page.getByTestId('sort-options');
   }

   async toggleDropdown() {
      await this.sortByButton.click();
   }

   dropDownVisibility(): Promise<boolean> {
      return this.dropDownOptionList.isVisible();
   }

   async clickOption(option: string) {
      const optionLocator = this.dropDownOptionList.getByText(option);
      await optionLocator.click();
   }

   async optionVisibility(option: string): Promise<boolean> {
      const optionLocator = this.dropDownOptionList.getByText(option);
      return optionLocator.isVisible();
   }

   sortByButtonText(): Promise<string> {
      return this.sortByButton.innerText();
   }
}
