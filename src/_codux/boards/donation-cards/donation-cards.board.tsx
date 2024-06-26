import { createBoard } from '@wixc3/react-board';
import DonationCards from '../../../components/DonationCards/DonationCards';

export default createBoard({
   name: 'DonationCards',
   Board: () => <DonationCards />,
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
   },
});
