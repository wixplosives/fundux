import { createBoard } from '@wixc3/react-board';
import HeroSection from '../../../components/HeroSection/HeroSection';

export default createBoard({
   name: 'HeroSection',
   Board: () => <HeroSection />,
   isSnippet: true,
});
