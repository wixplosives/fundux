import { createBoard } from '@wixc3/react-board';
import Footer from '../../../components/Footer/Footer';

export default createBoard({
   name: 'Footer',
   Board: () => <Footer />,
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024
   },
});
