import { useContext, useState } from 'react';
import styles from './DonationCardModal.module.css';

interface DonationCardModalProps {
   onCloseModal: () => void;
}

function DonationCardModal({ onCloseModal }: DonationCardModalProps) {
   const [donationAmount, setDonationAmount] = useState(0);

   const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
         onCloseModal();
      }
   };

   const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDonationAmount(Number(event.target.value));
   };

   const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
   };

   return (
      <div className={styles.modal} onClick={handleBackgroundClick}>
         <form className={styles.modalContent} onSubmit={handleFormSubmit}>
            <header className={`${styles.modalBoundary} ${styles.modalHeader}`}>
               <div className={styles.modalHeaderContent}>
                  <h2>Some Text</h2>
                  <button className={styles.xButton} onClick={onCloseModal}>
                     &times;
                  </button>
               </div>
            </header>
            <section className={styles.sectionContent}>
               <div className={styles.formGroup}>
                  <label htmlFor="amount">Select Donation Amount</label>
                  <input
                     id="amount"
                     type="range"
                     min="0"
                     max="5000"
                     step="50"
                     aria-required="true"
                     onChange={handleAmountChange}
                  />
                  <span className={styles.amount}>
                     {donationAmount} / 5000 $
                  </span>
               </div>
               <button type="submit" className={`${styles.submitButton}`}>
                  Donate Now
               </button>
            </section>
            <footer className={`${styles.modalBoundary} ${styles.modalFooter}`}>
               <div className={styles.modalFooterContent}>
                  <button
                     type="submit"
                     className={`${styles.submitButton} ${styles.cancel}`}
                     onClick={onCloseModal}>
                     Cancel
                  </button>
               </div>
            </footer>
         </form>
      </div>
   );
}

export default DonationCardModal;
