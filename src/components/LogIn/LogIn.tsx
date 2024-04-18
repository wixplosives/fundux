import styles from './LogIn.module.css';

interface LogInProps {
   onLoginClick: () => void;
}

function LogIn({ onLoginClick }: LogInProps) {
   return (
      <div className={styles.logIn}>
         <button className={styles.logInButton} onClick={onLoginClick}>
            Log In
         </button>
      </div>
   );
}

export default LogIn;
