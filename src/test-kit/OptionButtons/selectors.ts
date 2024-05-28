export const selectors = {
   sortByButton: 'button:has-text("Sort By")',
   sortByButtonDropDownList: 'ul:has-text("Newest")',
   filtersButton: 'button:has-text("Filters")',
   filtersButtonDropDownList: 'ul:has-text("Animals")',
   dropDownOptionsListItem: (option: string) => `li:has-text("${option}")`,
};
