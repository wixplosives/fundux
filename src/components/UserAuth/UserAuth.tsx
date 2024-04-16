import styles from './UserAuth.module.css';

function UserAuth() {
   return (
      <div className={styles.userAuth}>
         <button className={`${styles.authButton} ${styles.first}`}>
            Log In
         </button>
         <button className={styles.authButton}>Sign Up</button>
      </div>
   );
}

export default UserAuth;
