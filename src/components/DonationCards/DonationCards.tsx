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
         <header className={styles.donationCardsHeader}>
            <h1 className={styles.donationCardsTitle}>
               Discover Our <br />
               Partners in Impact
            </h1>
         </header>
         <section className={styles.donationCardsOptionsButtonsBar}>
            <div className={styles.donationCardsOptionsButtons}>
               <div className={styles.donationCardLeftButtons}>
                  <button className={styles.donationCardsButton}>
                     Sort By ▼
                  </button>
                  <button className={styles.donationCardsButton}>
                     Filters ▼
                  </button>
               </div>
               <div className={styles.donationCardsRightButton}>
                  <input
                     type="text"
                     placeholder="Search..."
                     className={styles.searchInput}
                  />
                  <i className={`fas fa-search ${styles.searchIcon}`}></i>
               </div>
            </div>
         </section>
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
