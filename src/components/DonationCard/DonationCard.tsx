import styles from './DonationCard.module.css';

interface DonationCardProps {
   title: string;
   description: string;
   donationTarget: number;
   amount: number;
   isOpen: boolean;
   onShowMore: () => void;
}

const getButtonClassNames = (progress: number) => {
   return `${styles.donationCardButton} ${
      progress < 33 ? styles.low : progress < 67 ? styles.med : styles.high
   }`;
};

const getDonationCardProgressClassNames = (progress: number) => {
   return `${styles.donationCardProgress} ${
      progress < 33 ? styles.low : progress < 67 ? styles.med : styles.high
   }`;
};

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
      <article className={styles.donationCard}>
         <section className={styles.donationCardImage}>
            <img
               src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
               alt=""
            />
         </section>
         <section className={styles.donationCardContent}>
            <header className={styles.donationCardHeader}>
               <h2 className={styles.donationCardTitle}>{title}</h2>
               <button className={getButtonClassNames(progress)}>
                  Donate Now
               </button>
            </header>
            {isOpen ? (
               <section
                  className={`${styles.donationCardDescription} ${styles.open}`}>
                  {description}
               </section>
            ) : (
               <section className={`${styles.donationCardDescription}`}>
                  {description}
               </section>
            )}
            <footer>
               <section className={styles.donationCardTargetInfo}>
                  <div className={styles.donationCardProgressBar}>
                     <div
                        className={getDonationCardProgressClassNames(progress)}
                        style={{
                           width: `${progress}%`,
                           pointerEvents: 'none',
                        }}>
                        {progress.toFixed(0)}%
                     </div>
                  </div>
                  <p className={styles.donationCardDonationTarget}>
                     ${donationTarget.toLocaleString()}
                  </p>
               </section>
               <button
                  className={styles.donationCardButton}
                  onClick={onShowMore}>
                  {isOpen ? 'Show Less' : 'Show More'}
               </button>
            </footer>
         </section>
      </article>
   );
}

export default DonationCard;
