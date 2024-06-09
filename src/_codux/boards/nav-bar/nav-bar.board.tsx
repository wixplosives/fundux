import { createBoard } from '@wixc3/react-board';
import NavBar from '../../../components/NavBar/NavBar';
import { MemoryRouter } from 'react-router-dom';
import NavBar_board_module from './nav-bar.board.module.scss';

export default createBoard({
   name: 'NavBar',
   Board: () => (
      <MemoryRouter>
         <NavBar />
      </MemoryRouter>
   ),
   isSnippet: true,
});
