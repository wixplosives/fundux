import { useState } from 'react';
import commonOptionButtonStyles from '../../common/commonOptionButton.module.css';
import styles from './FiltersButton.module.css';

const filterOptions: string[] = [
   'Animals',
   'Health',
   'Education',
   'Environment',
];

function FiltersButton() {
   const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggleIsOpen = () => {
      setIsOpen(!isOpen);
   };

   const handleFilterClick = (filter: string) => {
      if (selectedFilters.includes(filter)) {
         setSelectedFilters(
            selectedFilters.filter(
               (selectedFilter) => selectedFilter !== filter
            )
         );
      } else {
         setSelectedFilters([...selectedFilters, filter]);
      }
   };

   const selected = (option: string) =>
      selectedFilters.includes(option) ? styles.selected : '';

   const opened = () => (isOpen ? commonOptionButtonStyles.open : '');

   const getOptionClassNames = (option: string) =>
      `${commonOptionButtonStyles.optionItem} ${selected(option)}`;

   const formatOption = (option: string) => {
      return selectedFilters.includes(option) ? `✓ ${option}` : option;
   };

   return (
      <div className={styles.filters}>
         <button
            className={`${commonOptionButtonStyles.button} ${opened()}`}
            onClick={toggleIsOpen}>
            Filters: {selectedFilters.join(', ')} {isOpen ? '▲' : '▼'}
         </button>
         {isOpen && (
            <ul className={commonOptionButtonStyles.optionsList}>
               {filterOptions.map((option) => (
                  <li
                     key={option}
                     className={getOptionClassNames(option)}
                     onClick={() => handleFilterClick(option)}>
                     {formatOption(option)}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

export default FiltersButton;
