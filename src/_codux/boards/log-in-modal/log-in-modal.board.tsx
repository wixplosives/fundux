import { createBoard } from '@wixc3/react-board';
import LogInModal from '../../../components/LogInModal/LogInModal';

export default createBoard({
   name: 'LogInModal',
   Board: () => <LogInModal onCloseModal={() => null} />,
   isSnippet: true,
});
