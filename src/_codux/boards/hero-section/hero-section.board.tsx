import { createBoard } from '@wixc3/react-board';
import HeroSection from '../../../components/HeroSection/HeroSection';

export default createBoard({
   name: 'HeroSection',
   Board: () => <HeroSection />,
   isSnippet: true,
   environmentProps: {
      windowWidth: 1024,
      windowHeight: 768,
      canvasHeight: 768,
      canvasWidth: 1024,
   },
});
