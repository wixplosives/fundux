import { createBoard } from '@wixc3/react-board';
import FiltersButton from '../../../components/FiltersButton/FiltersButton';

export default createBoard({
    name: 'FiltersButton',
    Board: () => <FiltersButton />,
    isSnippet: true,
});