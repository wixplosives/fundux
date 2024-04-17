import React from 'react';
import styles from './OptionButtons.module.css';

function OptionButtons({ children }: { children: React.ReactNode }) {
   return <div className={styles.optionButtons}>{children}</div>;
}

export default OptionButtons;
