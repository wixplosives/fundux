import { createBoard } from '@wixc3/react-board';
import DonationCard from '../../../components/DonationCard/DonationCard';

interface DonationCardData {
   id: number;
   title: string;
   description: string;
   donationTarget: number;
}

const donationCard: DonationCardData = {
   id: 1,
   title: 'Save the Whales',
   description: `Join our mission to save endangered whale species across the globe. 
                Every donation contributes to oceanic conservation efforts, 
                research initiatives to understand whale migration and health patterns, 
                anti-poaching patrols, and educational programs aimed at raising awareness about the 
                importance of biodiversity and marine habitats. Your generous support can make a significant difference 
                in preserving these magnificent creatures for future generations.`,
   donationTarget: 5000000,
};

const isOpen: boolean = true;

export default createBoard({
   name: 'DonationCard',
   Board: () => (
      <DonationCard
         key={donationCard.id}
         title={donationCard.title}
         description={donationCard.description}
         donationTarget={donationCard.donationTarget}
         amount={Math.random() * donationCard.donationTarget}
         isOpen={isOpen}
         onShowMore={() => null}
      />
   ),
   isSnippet: true,
   environmentProps: {
      windowHeight: 768,
   },
});
