import styles from './UserAuth.module.css';

function UserAuth() {
   return (
      <div className={styles.userAuth}>
         <button style={{ marginRight: '0.5em' }} className={styles.authButton}>
            Log In
         </button>
         <button className={styles.authButton}>Sign Up</button>
      </div>
   );
}

export default UserAuth;
