import { useState } from 'react';
import commonOptionButtonStyles from '../../common/commonOptionButton.module.css';
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
            className={`${commonOptionButtonStyles.button} ${
               isOpen ? commonOptionButtonStyles.open : null
            }`}
            onClick={toggleIsOpen}>
            Sort By: {selectedOption} {isOpen ? '▲' : '▼'}
         </button>
         {isOpen && (
            <ul className={commonOptionButtonStyles.optionsList}>
               {sortOptions.map((option) => (
                  <li
                     key={option}
                     className={commonOptionButtonStyles.optionItem}
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
