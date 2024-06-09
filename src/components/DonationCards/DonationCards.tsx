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
      <section className={styles.donationCards}>
         {donationCards.map(({ id, title, description, donationTarget, amount, image }) => (
            <DonationCard
               key={id}
               title={title}
               description={description}
               donationTarget={donationTarget}
               amount={amount}
               image={image}
               isOpen={openCardId === id}
               onShowMore={() => setOpenCardId(openCardId !== id ? id : -1)}
            />
         ))}
      </section>
   );
}

export default DonationCards;
