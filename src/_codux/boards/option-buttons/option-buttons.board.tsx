import { createBoard } from '@wixc3/react-board';
import styles from './option-buttons.board.module.css';
import OptionButtons from '../../../components/OptionButtons';
import SortByButton from '../../../components/SortByButton';
import FiltersButton from '../../../components/FiltersButton';
import SearchButton from '../../../components/SearchButton';

export default createBoard({
   name: 'OptionButtons',
   Board: () => (
      <div className={styles.donationCardsOptionsButtonsBar}>
         <OptionButtons>
            <div className={styles.donationCardLeftButtons}>
               <SortByButton />
               <FiltersButton />
            </div>
            <SearchButton />
         </OptionButtons>
      </div>
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
      canvasHeight: 768,
      windowWidth: 1024,
   },
});
