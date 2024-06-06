import { createBoard } from '@wixc3/react-board';
import AboutUs from '../../../components/AboutUs/AboutUs';

export default createBoard({
   name: 'AboutUs',
   Board: () => <AboutUs />,
   isSnippet: true,
});
