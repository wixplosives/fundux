import React, { useState } from 'react';
import styles from './Filters.module.css';

const filterOptions = ['Animals', 'Health', 'Education', 'Environment'];

function Filters() {
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

   return (
      <div className={styles.filters}>
         <button
            className={`${styles.button} ${isOpen ? styles.open : null}`}
            onClick={toggleIsOpen}>
            Filters:{' '}
            {selectedFilters.length > 0 ? selectedFilters.join(', ') : null}
            {isOpen ? '▲' : '▼'}
         </button>
         {isOpen && (
            <ul className={styles.optionsList}>
               {filterOptions.map((option) => (
                  <li
                     key={option}
                     className={`${styles.optionItem} ${
                        selectedFilters.includes(option) ? styles.selected : ''
                     }`}
                     onClick={() => handleFilterClick(option)}>
                     {selectedFilters.includes(option) ? `✓ ${option}` : option}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

export default Filters;
