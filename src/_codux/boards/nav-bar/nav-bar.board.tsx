import { createBoard } from '@wixc3/react-board';
import NavBar from '../../../components/NavBar/NavBar';

export default createBoard({
   name: 'NavBar',
   Board: () => <NavBar />,
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
      canvasHeight: 768,
      windowWidth: 1024,
      windowHeight: 768,
   },
});
