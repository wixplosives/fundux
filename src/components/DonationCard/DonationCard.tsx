import styles from './DonationCard.module.css';

interface DonationCardProps {
   title: string;
   description: string;
   donationTarget: number;
   amount: number;
   isOpen: boolean;
   onShowMore: () => void;
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
}: DonationCardProps) {
   const progress = (amount / donationTarget) * 100;

   return (
      <article className={styles.donationCard}>
         <section className={styles.image}>
            <img
               src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
               alt=""
            />
         </section>
         <section className={styles.content}>
            <header className={styles.header}>
               <h2 className={styles.title}>{title}</h2>
               <button className={getButtonClassNames(progress)}>
                  Donate Now
               </button>
            </header>
            {isOpen ? (
               <section
                  className={`${styles.description} ${styles.open}`}>
                  {description}
               </section>
            ) : (
               <section className={`${styles.description}`}>
                  {description}
               </section>
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
                  <p className={styles.donationTarget}>
                     ${donationTarget.toLocaleString()}
                  </p>
               </section>
               <button
                  className={styles.button}
                  onClick={onShowMore}>
                  {isOpen ? 'Show Less' : 'Show More'}
               </button>
            </footer>
         </section>
      </article>
   );
}

export default DonationCard;
