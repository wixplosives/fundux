import { createBoard } from '@wixc3/react-board';
import OptionButtons from '../../../components/OptionButtons';
import SortByButton from '../../../components/SortByButton';
import FiltersButton from '../../../components/FiltersButton';
import SearchButton from '../../../components/SearchButton';
import OptionButtons_board_module from './option-buttons.board.module.scss';

export default createBoard({
   name: 'OptionButtons',
   Board: () => (
      <div className={OptionButtons_board_module.optionButtonsWrapper}>
         <OptionButtons>
            <SortByButton />
            <FiltersButton />
            <SearchButton />
         </OptionButtons>
      </div>
   ),
   isSnippet: true,
});
