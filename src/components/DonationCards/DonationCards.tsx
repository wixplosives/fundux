import { useState, useEffect } from 'react';
import styles from './DonationCards.module.css';
import DonationCard from '../DonationCard';
import cards, { DonationCardData } from '../../data/cards';
import OptionButtons from '../OptionButtons';
import SortByButton from '../SortByButton';
import FiltersButton from '../FiltersButton';
import SearchButton from '../SearchButton/SearchButton';

function DonationCards() {
   const [openCardId, setOpenCardId] = useState(-1);
   const [donationCards, setDonationCards] = useState<DonationCardData[]>([]);

   useEffect(() => {
      setDonationCards(cards);
   }, []);

   return (
      <main className={styles.donationCards}>
         <header className={styles.header}>
            <h1 className={styles.title}>
               Discover Our <br />
               Partners in Impact
            </h1>
         </header>
         <section className={styles.optionsButtonsBar}>
            <OptionButtons>
               <SortByButton />
               <FiltersButton />
               <SearchButton />
            </OptionButtons>
         </section>
         {donationCards.map(({ id, title, description, donationTarget }) => (
            <DonationCard
               key={id}
               title={title}
               description={description}
               donationTarget={donationTarget}
               amount={Math.random() * donationTarget}
               isOpen={openCardId === id}
               onShowMore={() => setOpenCardId(openCardId !== id ? id : -1)}
            />
         ))}
      </main>
   );
}

export default DonationCards;
