import { createBoard } from '@wixc3/react-board';
import OptionButtons from '../../../components/OptionButtons/OptionButtons';

export default createBoard({
    name: 'OptionButtons',
    Board: () => <OptionButtons />,
    isSnippet: true,
});