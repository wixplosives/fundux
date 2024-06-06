import React from 'react';
import styles from './OptionButtons.module.css';

interface OptionButtonsProps {
   children: React.ReactNode;
}

function OptionButtons({ children }: OptionButtonsProps) {
   const childrenArray = React.Children.toArray(children);
   const leftOptionButtons = childrenArray.slice(0, -1);
   const rightOptionButton = childrenArray.at(-1);
   return (
      <div className={styles.optionButtons}>
         <div className={styles.leftOptionButtons}>{leftOptionButtons}</div>
         {rightOptionButton}
      </div>
   );
}

export default OptionButtons;
