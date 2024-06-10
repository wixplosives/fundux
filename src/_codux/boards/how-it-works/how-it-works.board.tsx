import { createBoard } from '@wixc3/react-board';
import HowItWorks from '../../../components/HowItWorks/HowItWorks';

export default createBoard({
   name: 'HowItWorks',
   Board: () => <HowItWorks />,
   isSnippet: true,
});
