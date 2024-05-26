import { createBoard } from '@wixc3/react-board';
import styles from './option-buttons.board.module.css';
import OptionButtons from '../../../components/OptionButtons';
import SortByButton from '../../../components/SortByButton';
import FiltersButton from '../../../components/FiltersButton';

export default createBoard({
   name: 'OptionButtons',
   Board: () => (
      <div className={styles.donationCardsOptionsButtonsBar}>
         <OptionButtons>
            <div className={styles.donationCardLeftButtons}>
               <SortByButton />
               <FiltersButton />
            </div>
            <div className={styles.donationCardsRightButton}>
               <input
                  type="text"
                  placeholder="Search..."
                  className={styles.donationCardsSearchInput}
               />
               <i className={`fas fa-search ${styles.searchIcon}`}></i>
            </div>
         </OptionButtons>
      </div>
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
      canvasHeight: 768,
   },
});
