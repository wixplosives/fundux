import SortByButton from '../SortByButton';
import styles from './OptionButtons.module.css';

function OptionButtons() {
   return (
      <div className={styles.optionButtons}>
         <SortByButton />
      </div>
   );
}

export default OptionButtons;
