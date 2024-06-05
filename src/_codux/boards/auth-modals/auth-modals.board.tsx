import { createBoard } from '@wixc3/react-board';
import AuthModals from '../../../components/AuthModals/AuthModals';

export default createBoard({
   name: 'AuthModals',
   Board: () => <AuthModals onCloseModal={() => null} />,
   isSnippet: true,
});
