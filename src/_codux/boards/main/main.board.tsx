import { createBoard } from '@wixc3/react-board';
import Main from '../../../components/Main/Main';

export default createBoard({
    name: 'Main',
    Board: () => <Main />,
    isSnippet: true,
});
