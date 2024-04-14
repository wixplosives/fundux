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
        title: "Save the Whales",
        text: "Help us save endangered whale species around the world. Your contributions make a difference.",
        target: 5000
    },
    {
        id: 2,
        title: "Support Local Education",
        text: "Funds go directly to improving education in underfunded areas, providing books, equipment, and training to underprivileged schools.",
        target: 3000
    },
];

function DonationCards() {
    const [openCardId, setOpenCardId] = useState(-1);

    return (
        <div className={styles.container}>
            {donationCards.map((donationCard) => (
                <DonationCard key={donationCard.id} 
                              title={donationCard.title} 
                              target={donationCard.target}
                              isOpen={openCardId === donationCard.id}
                              onShowMore={() =>  setOpenCardId(openCardId !== donationCard.id ? donationCard.id : -1)}
                >
                    {donationCard.text}
                </ DonationCard>
            ))}
        </div>
    );
};

export default DonationCards;
