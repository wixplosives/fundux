import { useState, useEffect } from 'react';
import styles from './DonationCards.module.css';
import DonationCard from '../DonationCard';
import cards, { DonationCardData } from '../../data/cards';

function DonationCards() {
   const [openCardId, setOpenCardId] = useState(-1);
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
               amount={Math.random() * donationCard.donationTarget}
               isOpen={openCardId === donationCard.id}
               onShowMore={() =>
                  setOpenCardId(
                     openCardId !== donationCard.id ? donationCard.id : -1
                  )
               }
            />
         ))}
      </main>
   );
}

export default DonationCards;
