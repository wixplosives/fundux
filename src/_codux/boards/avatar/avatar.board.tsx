import { createBoard } from '@wixc3/react-board';
import Avatar from '../../../components/Avatar/Avatar';

import Avatar_board_module from './avatar.board.module.scss';

export default createBoard({
   name: 'Avatar',
   Board: () => (
      <div className={Avatar_board_module.avatarWrapper}>
         <div id="menu-root"></div>
         <Avatar onLogOut={() => null} />
      </div>
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
      canvasHeight: 768,
      windowWidth: 1024,
      windowHeight: 768,
   },
});
