import { createBoard } from '@wixc3/react-board';
import Avatar from '../../../components/Avatar/Avatar';

export default createBoard({
   name: 'Avatar',
   Board: () => <Avatar onLogOut={() => null} />,
   isSnippet: true,
});
