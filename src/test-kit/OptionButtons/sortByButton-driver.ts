import { Page } from 'playwright-chromium';
import { selectors } from '../../test-kit/OptionButtons/selectors';
import { OptionButtonsDriver } from './optionButtons-driver';

export class SortByButtonDriver extends OptionButtonsDriver {
   constructor(page: Page) {
      super(page, selectors.sortByButton, selectors.sortByButtonDropDownList);
   }
}
