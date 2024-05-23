import { useState, useEffect } from 'react';
import styles from './DonationCards.module.css';
import DonationCard from '../DonationCard';
import cards, { DonationCardData } from '../../data/cards';

function DonationCards() {
   const [donationCards, setDonationCards] = useState<DonationCardData[]>([]);

   useEffect(() => {
      setDonationCards(cards);
   }, []);

   return (
      <main className={styles.donationCards}>
         {donationCards.map((donationCard) => (
            <DonationCard
               key={donationCard.id}
               title={donationCard.title}
               description={donationCard.description}
               donationTarget={donationCard.donationTarget}
            />
         ))}
      </main>
   );
}

export default DonationCards;
