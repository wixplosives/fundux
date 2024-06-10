import styles from './DonationCard.module.css';

interface DonationCardProps {
   title: string;
   description: string;
   donationTarget: number;
   amount: number;
   isOpen: boolean;
   onShowMore: () => void;
   onShowModal: () => void;
}

const getProgressClassNameByProgress = (progress: number) =>
   progress < 33
      ? styles.progressLow
      : progress < 67
        ? styles.progressMedium
        : styles.progressHigh;

const getButtonClassNames = (progress: number) =>
   `${styles.button} ${getProgressClassNameByProgress(progress)}`;

const getDonationCardProgressClassNames = (progress: number) =>
   `${styles.progress} ${getProgressClassNameByProgress(progress)}`;

function DonationCard({
   title,
   description,
   donationTarget,
   amount,
   isOpen,
   onShowMore,
   onShowModal,
}: DonationCardProps) {
   const progress = (amount / donationTarget) * 100;

   return (
      <article className={styles.donationCard} onClick={onShowMore}>
         <header className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button
               className={getButtonClassNames(progress)}
               onClick={onShowModal}>
               Donate Now
            </button>
         </header>
         {isOpen && (
            <section className={styles.description}>{description}</section>
         )}
         <footer>
            <section className={styles.targetInfo}>
               <div className={styles.progressBar}>
                  <div
                     className={getDonationCardProgressClassNames(progress)}
                     style={{
                        width: `${progress}%`,
                        pointerEvents: 'none',
                     }}>
                     {progress.toFixed(0)}%
                  </div>
               </div>
               <p className={styles.target}>
                  ${donationTarget.toLocaleString()}
               </p>
            </section>
            <button className={styles.button} onClick={onShowMore}>
               {isOpen ? 'Show Less' : 'Show More'}
            </button>
         </footer>
      </article>
   );
}

export default DonationCard;
