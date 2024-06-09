import { createBoard } from '@wixc3/react-board';
import DonationCard from '../../../components/DonationCard';
import cards, { DonationCardData } from '../../../data/cards';

const { title, description, donationTarget }: DonationCardData = cards[0];

export default createBoard({
   name: 'DonationCard - Closed',
   Board: () => (
      <DonationCard
         title={title}
         description={description}
         donationTarget={donationTarget}
         amount={Math.random() * donationTarget}
         image={undefined}
         isOpen={false}
         onShowMore={() => null}
      />
   ),
   isSnippet: true,
});
