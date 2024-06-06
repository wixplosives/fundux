import { createBoard } from '@wixc3/react-board';
import DonationCard from '../../../components/DonationCard';
import cards, { DonationCardData } from '../../../data/cards';

const { title, description, donationTarget }: DonationCardData = cards[0];

export default createBoard({
   name: 'DonationCard - Open',
   Board: () => (
      <DonationCard
         title={title}
         description={description}
         donationTarget={donationTarget}
         amount={Math.random() * donationTarget}
         isOpen={true}
         onShowMore={() => null}
      />
   ),
   environmentProps: {
      windowWidth: 1024,
      windowHeight: 768,
   },
});
