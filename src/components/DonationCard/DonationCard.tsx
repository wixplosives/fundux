import styles from './DonationCard.module.css';
import React, { useContext, useState } from 'react';

interface DonationCardProps {
   title: string;
   target: number;
   amount: number;
   isOpen: boolean;
   onShowMore: () => void;
   onShowModal: () => void;
   children: React.ReactNode;
}

function DonationCard({
   title,
   target,
   amount,
   isOpen,
   onShowMore,
   onShowModal,
   children,
}: DonationCardProps) {
   const progress = (amount / target) * 100;

   return (
      <article className={styles.card} onClick={onShowMore}>
         <header className={styles.header}>
            <h2>{title}</h2>
            <button
               className={`${styles.btn} ${
                  progress < 33
                     ? styles.low
                     : progress < 67
                       ? styles.med
                       : styles.high
               }`}
               onClick={onShowModal}>
               Donate Now!
            </button>
         </header>
         {isOpen && <div className={styles.content}>{children}</div>}
         <footer className={styles.footer}>
            <div className={styles.targetInfo}>
               <div className={styles.progressBar}>
                  <div
                     className={`${styles.progress} ${
                        progress < 33
                           ? styles.low
                           : progress < 67
                             ? styles.med
                             : styles.high
                     }`}
                     style={{
                        width: `${progress}%`,
                        pointerEvents: 'none',
                     }}>
                     {progress.toFixed(0)}%
                  </div>
               </div>
               <p className={styles.targetAmount}>${target.toLocaleString()}</p>
            </div>
            <button className={styles.btn} onClick={onShowMore}>
               {isOpen ? 'Show Less' : 'Show More'}
            </button>
         </footer>
      </article>
   );
}

export default DonationCard;
