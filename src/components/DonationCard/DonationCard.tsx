import styles from './DonationCard.module.css';
import React from 'react';

interface DonationCardProps {
    title: string;
    target: number;
    children: React.ReactNode;
}

function DonationCard({title, target, children}: DonationCardProps) {
    return (
        <article className={styles.card}>
            <header>
                <h3>{title}</h3>
            </header>
            <div>
                {children}
                <footer>
                    <p>Target: {target}</p>
                </footer>
            </div>
        </article>
    );
};

export default DonationCard;
