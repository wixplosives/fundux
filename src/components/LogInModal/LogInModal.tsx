import React from 'react';
import styles from './LogInModal.module.css';

interface LogInModalProps {
   onCloseModal: () => void;
}

function LogInModal({ onCloseModal }: LogInModalProps) {
   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
         onCloseModal();
      }
   };

   return (
      <div className={styles.modal} onClick={handleClick}>
         <form className={styles.modalContent}>
            <header className={`${styles.modalBoundary} ${styles.modalHeader}`}>
               <div className={styles.modalHeaderContent}>
                  <h2>Login to Your Account</h2>
                  <button
                     type="button"
                     className={styles.xButton}
                     onClick={() => onCloseModal()}>
                     &times;
                  </button>
               </div>
            </header>
            <section className={styles.sectionContent}>
               <div className={styles.formGroup}>
                  <label htmlFor="username">Username</label>
                  <input
                     id="username"
                     type="text"
                     placeholder="Enter your username"
                     aria-required="true"
                  />
               </div>
               <div className={styles.formGroup}>
                  <label htmlFor="password">Password</label>
                  <input
                     id="password"
                     type="password"
                     placeholder="Enter your password"
                     aria-required="true"
                  />
               </div>
               <button
                  type="submit"
                  className={`${styles.submitButton}`}
                  onClick={(e) => e.preventDefault()}>
                  Log In
               </button>
            </section>
            <footer className={`${styles.modalBoundary} ${styles.modalFooter}`}>
               <div className={styles.modalFooterContent}>
                  <button
                     type="button"
                     className={`${styles.submitButton} ${styles.cancel}`}
                     onClick={() => onCloseModal()}>
                     Cancel
                  </button>
                  <p className={styles.signUp}>
                     Don't have an account?{' '}
                     <button
                        onClick={(e) => e.preventDefault()}
                        className={styles.linkButton}>
                        Sign up
                     </button>
                  </p>
               </div>
            </footer>
         </form>
      </div>
   );
}

export default LogInModal;
