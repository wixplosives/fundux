import { createBoard } from '@wixc3/react-board';
import DonationCard from '../../../components/DonationCard/DonationCard';

const donationCardData = {
   id: 1,
   title: 'Save the Whales',
   text: 'Help us save endangered whale species around the world. Your contributions make a difference.',
   target: 5000,
};

export default createBoard({
   name: 'DonationCard',
   Board: () => (
      <DonationCard
         title={donationCardData.title}
         text={donationCardData.text}
         target={donationCardData.target}
      />
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
      canvasHeight: 768,
   },
});
