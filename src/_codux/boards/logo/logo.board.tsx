import { createBoard } from '@wixc3/react-board';
import Logo from '../../../components/Logo/Logo';

export default createBoard({
    name: 'Logo',
    Board: () => <Logo />,
    isSnippet: true,
});