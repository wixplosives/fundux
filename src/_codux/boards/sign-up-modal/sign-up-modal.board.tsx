import { createBoard } from '@wixc3/react-board';
import SignUpModal from '../../../components/SignUpModal/SignUpModal';

export default createBoard({
   name: 'SignUpModal',
   Board: () => <SignUpModal onSwitchMode={() => null} />,
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
      canvasHeight: 768,
   },
});
