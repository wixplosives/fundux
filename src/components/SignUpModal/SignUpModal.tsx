import styles from '../../common/commonAuthModals.module.css';

interface SignUpModalProps {
   switchMode: () => void;
}

function SignUpModal({ switchMode }: SignUpModalProps) {
   return (
      <form className={styles.modalContent}>
         <header className={`${styles.modalBoundary} ${styles.modalHeader}`}>
            <div className={styles.modalHeaderContent}>
               <h2>Sign up</h2>
               <button className={styles.xButton}>&times;</button>
            </div>
         </header>
         <section className={styles.sectionContent}>
            <div className={styles.formGroup}>
               <label htmlFor="email">Email</label>
               <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  aria-required="true"
               />
            </div>
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
            <div className={styles.formGroup}>
               <label htmlFor="confirm-password">Confirm Password</label>
               <input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  aria-required="true"
               />
            </div>
            <button
               type="submit"
               className={`${styles.submitButton} ${styles.login}`}
               onClick={(e) => e.preventDefault()}>
               Sign Up
            </button>
         </section>
         <footer className={`${styles.modalBoundary} ${styles.modalFooter}`}>
            <div className={styles.modalFooterContent}>
               <button
                  type="submit"
                  className={`${styles.submitButton} ${styles.cancel}`}
                  onClick={(e) => e.preventDefault()}>
                  Cancel
               </button>
               <p className={styles.signUp}>
                  Already have an account?{' '}
                  <button onClick={switchMode} className={styles.linkButton}>
                     Log in
                  </button>
               </p>
            </div>
         </footer>
      </form>
   );
}

export default SignUpModal;
