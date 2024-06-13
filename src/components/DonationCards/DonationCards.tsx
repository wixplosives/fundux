import React, { useState, useEffect } from 'react';
import styles from './DonationCards.module.css';
import DonationCard from '../DonationCard';
import DonationCardModal from '../DonationCardModal';
import cards, { DonationCardData } from '../../data/cards';

function DonationCards() {
   const [openCardId, setOpenCardId] = useState(-1);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [donationCards, setDonationCards] = useState<DonationCardData[]>([]);
   const [selectedCard, setSelectedCard] = useState<DonationCardData | null>(
      null
   );

   useEffect(() => {
      setDonationCards(cards);
   }, []);

   const handleShowModal = (card: DonationCardData) => {
      setSelectedCard(card);
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedCard(null);
   };

   const handleUpdateDonationAmount = (amount: number) => {
      if (selectedCard) {
         const cardIndex = donationCards.findIndex(
            (card) => card.id === selectedCard.id
         );
         if (cardIndex !== -1) {
            donationCards[cardIndex].donationAmount += amount;
         }
      }
   };

   const renderedDonationCards: React.JSX.Element[] = donationCards.map(
      ({ id, title, description, donationTarget, donationAmount }) => (
         <DonationCard
            key={id}
            title={title}
            description={description}
            donationTarget={donationTarget}
            amount={donationAmount}
            isOpen={openCardId === id}
            onShowMore={() => setOpenCardId(openCardId !== id ? id : -1)}
            onShowModal={() =>
               handleShowModal({
                  id,
                  title,
                  description,
                  donationTarget,
                  donationAmount,
               })
            }
         />
      )
   );

   return (
      <main className={styles.donationCards}>
         {renderedDonationCards}
         {isModalOpen && selectedCard && (
            <DonationCardModal
               title={selectedCard.title}
               target={selectedCard.donationTarget}
               amount={selectedCard.donationAmount}
               onUpdateDonationAmount={handleUpdateDonationAmount}
               onCloseModal={handleCloseModal}
            />
         )}
      </main>
   );
}

export default DonationCards;
