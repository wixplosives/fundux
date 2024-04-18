import React from 'react';
import styles from './OptionButtons.module.css';

interface OptionButtonsProps {
   children: React.ReactNode;
}

function OptionButtons({ children }: OptionButtonsProps) {
   return <div className={styles.optionButtons}>{children}</div>;
}

export default OptionButtons;
