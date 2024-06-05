import styles from './LogIn.module.css';

interface LogInProps {
   handleOnClick: () => void;
}

function LogIn({ handleOnClick }: LogInProps) {
   return (
      <div className={styles.logIn}>
         <button className={styles.logInButton} onClick={handleOnClick}>
            Log In
         </button>
      </div>
   );
}

export default LogIn;
