import { createBoard } from '@wixc3/react-board';
import DonationCard from '../../../components/DonationCard/DonationCard';

interface DonationCardData {
   id: number;
   title: string;
   text: string;
   target: number;
}

const donationCard: DonationCardData = {
   id: 1,
   title: 'Save the Whales',
   text: `Join our mission to save endangered whale species across the globe. 
                Every donation contributes to oceanic conservation efforts, 
                research initiatives to understand whale migration and health patterns, 
                anti-poaching patrols, and educational programs aimed at raising awareness about the 
                importance of biodiversity and marine habitats. Your generous support can make a significant difference 
                in preserving these magnificent creatures for future generations.`,
   target: 5000000,
};

const isOpen: boolean = true;

export default createBoard({
   name: 'DonationCard',
   Board: () => (
      <DonationCard
         key={donationCard.id}
         title={donationCard.title}
         target={donationCard.target}
         amount={Math.random() * donationCard.target}
         isOpen={isOpen}
         onShowMore={() => null}>
         {donationCard.text}
      </DonationCard>
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 1024,
      canvasHeight: 768,
      windowWidth: 1024,
      windowHeight: 768,
   },
});
