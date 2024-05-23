import styles from './DonationCard.module.css';

interface DonationCardProps {
   title: string;
   description: string;
   donationTarget: number;
   amount: number;
   isOpen: boolean;
   onShowMore: () => void;
}

function DonationCard({
   title,
   description,
   donationTarget,
   amount,
   isOpen,
   onShowMore,
}: DonationCardProps) {
   const progress = (amount / donationTarget) * 100;

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
               }`}>
               Donate Now!
            </button>
         </header>
         {isOpen && <div className={styles.content}>{description}</div>}
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
               <p className={styles.targetAmount}>${donationTarget.toLocaleString()}</p>
            </div>
            <button className={styles.btn} onClick={onShowMore}>
               {isOpen ? 'Show Less' : 'Show More'}
            </button>
         </footer>
      </article>
   );
}

export default DonationCard;
