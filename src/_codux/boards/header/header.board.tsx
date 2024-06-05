import { createBoard } from '@wixc3/react-board';
import Header from '../../../components/Header/Header';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    isSnippet: true,
});
