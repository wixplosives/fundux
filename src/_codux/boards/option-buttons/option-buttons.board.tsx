import { createBoard } from '@wixc3/react-board';
import OptionButtons from '../../../components/OptionButtons/OptionButtons';
import SortByButton from '../../../components/SortByButton';
import FiltersButton from '../../../components/FiltersButton';

export default createBoard({
   name: 'OptionButtons',
   Board: () => (
      <OptionButtons>
         <SortByButton />
         <FiltersButton />
      </OptionButtons>
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
      canvasHeight: 768,                    
   },
});
