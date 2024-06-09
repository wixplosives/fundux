import { createBoard } from '@wixc3/react-board';
import NavBar from '../../../components/NavBar/NavBar';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
   name: 'NavBar',
   Board: () => (
      <MemoryRouter>
         <NavBar />
      </MemoryRouter>
   ),
   isSnippet: true,
});
