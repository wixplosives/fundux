import styles from './DonationCards.module.css';
import DonationCard from '../DonationCard/DonationCard';
import { useState } from 'react';

interface DonationCardData {
   id: number;
   title: string;
   text: string;
   target: number;
}

const donationCards: DonationCardData[] = [
   {
      id: 1,
      title: 'Save the Whales',
      text: `Join our mission to save endangered whale species across the globe. 
                Every donation contributes to oceanic conservation efforts, 
                research initiatives to understand whale migration and health patterns, 
                anti-poaching patrols, and educational programs aimed at raising awareness about the 
                importance of biodiversity and marine habitats. Your generous support can make a significant difference 
                in preserving these magnificent creatures for future generations.`,
      target: 5000000,
   },
   {
      id: 2,
      title: 'Support Local Education',
      text: `Your contribution can change the educational landscape in underfunded communities. 
                Funds are directly used to enhance learning environments by providing essential resources like books, 
                educational technology, and classroom equipment. Additionally, your support helps to offer professional 
                development and training programs for teachers, ensuring that they are equipped with the tools and 
                knowledge to deliver high-quality education. Help us create opportunities for students in need to thrive 
                academically and reach their full potential.`,
      target: 3000000,
   },
];

function DonationCards() {
   const [openCardId, setOpenCardId] = useState(-1);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleShowModal = () => {
      setIsModalOpen(true);
   };

   return (
      <div className={styles.container}>
         {donationCards.map((donationCard) => (
            <DonationCard
               key={donationCard.id}
               title={donationCard.title}
               target={donationCard.target}
               amount={Math.random() * donationCard.target}
               isOpen={openCardId === donationCard.id}
               onShowMore={() =>
                  setOpenCardId(
                     openCardId !== donationCard.id ? donationCard.id : -1
                  )
               }
               onShowModal={onShowModal}>
               {donationCard.text}
            </DonationCard>
         ))}
      </div>
   );
}

export default DonationCards;
