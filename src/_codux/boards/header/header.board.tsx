import { createBoard } from '@wixc3/react-board';
import Header from '../../../components/Header/Header';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
   name: 'Header',
   Board: () => (
      <MemoryRouter>
         <Header />
      </MemoryRouter>
   ),
   isSnippet: true,
   environmentProps: {
      canvasMargin: {
         top: 0,
         right: 0,
         bottom: 0,
         left: 0,
      },
   },
});
