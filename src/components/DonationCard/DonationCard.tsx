import { useState, useEffect, useRef } from 'react';
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

const getDescriptionClassNames = (isOpen: boolean, isOverflowing: boolean) =>
   `${styles.description} ${isOverflowing ? styles.fade : ''} ${
      isOpen ? styles.open : ''
   }`;

function DonationCard({
   title,
   description,
   donationTarget,
   amount,
   isOpen,
   onShowMore,
}: DonationCardProps) {
   const descriptionRef = useRef<HTMLDivElement>(null);
   const contentRef = useRef<HTMLDivElement>(null);
   const [maxHeight, setMaxHeight] = useState<number | null>(null);
   const [isOverflowing, setIsOverflowing] = useState(false);

   const progress = (amount / donationTarget) * 100;

   useEffect(() => {
      if (descriptionRef.current && contentRef.current) {
         const maxHeight =
            contentRef.current!.clientHeight -
            descriptionRef.current!.clientHeight +
            descriptionRef.current!.scrollHeight;
         isOpen ? setMaxHeight(maxHeight) : setMaxHeight(null);
      }
   }, [isOpen]);

   useEffect(() => {
      if (descriptionRef.current) {
         setIsOverflowing(
            descriptionRef.current.scrollHeight >
               descriptionRef.current.clientHeight
         );
      }
   }, []);

   return (
      <article className={styles.donationCard}>
         <section className={styles.image}>
            <img
               src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
               alt=""
            />
         </section>
         <section
            ref={contentRef}
            style={maxHeight ? { maxHeight } : undefined}
            className={styles.content}>
            <header className={styles.header}>
               <h2 className={styles.title}>{title}</h2>
               <button className={getButtonClassNames(progress)}>
                  Donate Now
               </button>
            </header>
            <section
               ref={descriptionRef}
               className={getDescriptionClassNames(isOpen, isOverflowing)}>
               {description}
            </section>
            <footer className={styles.footer}>
               <section className={styles.targetInfo}>
                  <div className={styles.progressBar}>
                     <div
                        className={getDonationCardProgressClassNames(progress)}
                        style={{ width: `${progress}%` }}>
                        {progress.toFixed(0)}%
                     </div>
                  </div>
                  <p className={styles.donationTarget}>
                     ${donationTarget.toLocaleString()}
                  </p>
               </section>
               {isOverflowing && (
                  <button className={styles.button} onClick={onShowMore}>
                     {isOpen ? 'Show Less' : 'Show More'}
                  </button>
               )}
            </footer>
         </section>
      </article>
   );
}

export default DonationCard;
