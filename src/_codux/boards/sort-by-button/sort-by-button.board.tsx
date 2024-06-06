import { createBoard } from '@wixc3/react-board';
import SortByButton from '../../../components/SortByButton/SortByButton';

export default createBoard({
   name: 'SortByButton',
   Board: () => <SortByButton />,
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
      canvasHeight: 768,
   },
});
