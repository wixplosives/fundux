import { useState } from 'react';
import styles from './SortByButton.module.css';

const sortOptions: string[] = ['Newest', 'Oldest', 'A-Z', 'Z-A'];

function SortByButton() {
   const [selectedOption, setSelectedOption] = useState<string>('Newest');
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggleIsOpen = () => {
      setIsOpen((prevState) => !prevState);
   };

   const handleSelectedOption = (option: string) => {
      setSelectedOption(option);
      toggleIsOpen();
   };

   return (
      <div className={styles.sortByButton}>
         <button
            className={`${styles.button} ${isOpen ? styles.open : null}`}
            onClick={toggleIsOpen}>
            Sort By: {selectedOption} <span>{isOpen ? '▲' : '▼'}</span>
         </button>
         {isOpen && (
            <ul className={styles.optionsList}>
               {sortOptions.map((option) => (
                  <li
                     key={option}
                     className={styles.optionItem}
                     onClick={() => handleSelectedOption(option)}>
                     {option}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

export default SortByButton;
