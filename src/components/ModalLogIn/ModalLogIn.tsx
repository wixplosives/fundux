import styles from './ModalLogIn.module.css';

function ModalLogIn() {
   return (
      <div className={styles.modalLogIn}>
         <form className={styles.modalContent}>
            <header className={`${styles.modalBoundary} ${styles.modalHeader}`}>
               <div className={styles.modalHeaderContent}>
                  <h2>Login to Your Account</h2>
                  <p>&times;</p>
               </div>
            </header>
            <section className={styles.sectionContent}>
               <div className={styles.formGroup}>
                  <label htmlFor="username">Username:</label>
                  <input
                     id="username"
                     type="text"
                     placeholder="Enter your username"
                     aria-required="true"
                  />
               </div>
               <div className={styles.formGroup}>
                  <label htmlFor="password">Password:</label>
                  <input
                     id="password"
                     type="password"
                     placeholder="Enter your password"
                     aria-required="true"
                  />
               </div>
               <button
                  type="submit"
                  className={`${styles.submitButton} ${styles.login}`}>
                  Log In
               </button>
            </section>
            <footer className={`${styles.modalBoundary} ${styles.modalFooter}`}>
               <div className={styles.modalFooterContent}>
                  <button
                     type="submit"
                     className={`${styles.submitButton} ${styles.cancel}`}>
                     Cancel
                  </button>
                  <p className={styles.signUp}>
                     Don't have an account? <a href="#">Sign up</a>
                  </p>
               </div>
            </footer>
         </form>
      </div>
   );
}

export default ModalLogIn;
