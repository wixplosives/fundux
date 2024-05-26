import { createBoard } from '@wixc3/react-board';
import DonationCard from '../../../components/DonationCard';
import cards, { DonationCardData } from '../../../data/cards';

const donationCard: DonationCardData = cards[0];

export default createBoard({
   name: 'DonationCard - Closed',
   Board: () => (
      <DonationCard
         key={donationCard.id}
         title={donationCard.title}
         description={donationCard.description}
         donationTarget={donationCard.donationTarget}
         amount={Math.random() * donationCard.donationTarget}
         isOpen={true}
         onShowMore={() => null}
      />
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
   },
});
