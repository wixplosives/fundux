import { createBoard } from '@wixc3/react-board';
import LogInModal from '../../../components/LogInModal/LogInModal';

export default createBoard({
   name: 'LogInModal',
   Board: () => <LogInModal onSwitchMode={() => null} />,
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
      canvasHeight: 768,
   },
});
