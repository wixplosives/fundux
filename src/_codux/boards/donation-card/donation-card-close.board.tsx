import { createBoard } from '@wixc3/react-board';
import DonationCard from '../../../components/DonationCard';
import cards, { DonationCardData } from '../../../data/cards';

const donationCard: DonationCardData = cards[0];

export default createBoard({
   name: 'DonationCard - Closed',
   Board: () => (
      <DonationCard
         title={donationCard.title}
         description={donationCard.description}
         donationTarget={donationCard.donationTarget}
         amount={Math.random() * donationCard.donationTarget}
         isOpen={false}
         onShowMore={() => null}
      />
   ),
   isSnippet: true,
   environmentProps: {
      windowWidth: 1024,
      windowHeight: 768,
   },
});
