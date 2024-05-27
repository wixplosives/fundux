export const selectors = {
   sortByButton: 'button:has-text("Sort By")',
   sortbyButtonDropDownList: 'ul:has-text("Newest")',
   dropDownOptionListItem: (option: string) => `li:has-text("${option}")`,
};
