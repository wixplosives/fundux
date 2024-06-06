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
            className={commonOptionButtonStyles.button}
            onClick={toggleIsOpen}>
            Sort By: {isOpen ? '▲' : '▼'}
         </button>
         {isOpen && (
            <ul className={commonOptionButtonStyles.optionsList}>
               {sortOptions.map((option) => (
                  <button
                     key={option}
                     className={commonOptionButtonStyles.button}
                     onClick={() => handleSelectedOption(option)}>
                     {option}
                  </button>
               ))}
            </ul>
         )}
      </div>
   );
}

export default SortByButton;
