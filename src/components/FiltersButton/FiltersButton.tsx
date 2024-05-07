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
         setSelectedFilters(selectedFilters.filter((f) => f !== filter));
      } else {
         setSelectedFilters([...selectedFilters, filter]);
      }
   };

   const selected = (option: string) =>
      selectedFilters.includes(option) ? styles.selected : '';

   const opened = () => (isOpen ? commonOptionButtonStyles.open : '');

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
                     className={`${
                        commonOptionButtonStyles.optionItem
                     } ${selected(option)}`}
                     onClick={() => handleFilterClick(option)}>
                     {selectedFilters.includes(option) ? `✓ ${option}` : option}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

export default FiltersButton;
