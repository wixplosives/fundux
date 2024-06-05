import { createBoard } from '@wixc3/react-board';
import DonationCardModal from '../../../components/DonationCardModal/DonationCardModal';
import cards, { DonationCardData } from '../../../data/cards';

const { title, donationTarget, donationAmount }: DonationCardData = cards[0];

export default createBoard({
   name: 'DonationCardModal',
   Board: () => (
      <DonationCardModal
         title={title}
         target={donationTarget}
         amount={donationAmount}
         onUpdateDonationAmount={() => null}
         onCloseModal={() => null}
      />
   ),
});
