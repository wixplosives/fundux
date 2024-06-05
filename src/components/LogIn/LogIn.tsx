import styles from './LogIn.module.css';

interface LogInProps {
   onClick: () => void;
}

function LogIn({ onClick }: LogInProps) {
   return (
      <div className={styles.logIn}>
         <button className={styles.logInButton} onClick={onClick}>
            Log In
         </button>
      </div>
   );
}

export default LogIn;
