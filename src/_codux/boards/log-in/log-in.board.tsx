import { createBoard } from '@wixc3/react-board';
import LogIn from '../../../components/LogIn/LogIn';

export default createBoard({
   name: 'LogIn',
   Board: () => <LogIn handleOnClick={() => null} />,
   isSnippet: true,
});
