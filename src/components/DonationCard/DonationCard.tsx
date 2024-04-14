import styles from './DonationCard.module.css';
import React from 'react';

interface DonationCardProps {
    title: string;
    target: number;
    children: React.ReactNode;
    isOpen: boolean;
    onShowMore: () => void;
}

function DonationCard({title, target, isOpen, onShowMore, children}: DonationCardProps) {
    const progress = (target * 0.8 / target) * 100;

    return (
        <article className={styles.card} onClick={onShowMore}>
            <header className={styles.header}>
                <h2>{title}</h2>
            </header>
            <div>
                {isOpen && children}
                <footer className={styles.footer}>
                    <div className={styles.targetInfo}>
                        <div className={styles.progressBar}>
                            <div className={styles.progress} style={{width: `${progress}%`}}>
                                {progress}%
                            </div>
                        </div>
                        <p>${target}</p>
                    </div>
                    <button onClick={onShowMore}>
                        {isOpen ? "Show Less" : "Show More"}
                    </button>
                </footer>
            </div>
        </article>
    );
};

export default DonationCard;
