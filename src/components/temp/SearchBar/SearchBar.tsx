import React, { useState } from 'react';
import styles from './SearchBar.module.css';


const sortOptions: string[] = ['Newest', 'Oldest', 'A-Z', 'Z-A'];

function SearchBar() {
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
            <button className={styles.button} onClick={toggleIsOpen}>
                Search...
            </button>
            {isOpen && (
                <ul className={styles.optionsList}>
                    {sortOptions.map((option) => (
                    <li key={option} 
                        className={styles.optionItem} 
                        onClick={() => handleSelectedOption(option)}>
                        {option}
                    </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
