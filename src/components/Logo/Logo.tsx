import styles from './Logo.module.css';

function Logo() {
   return (
      <div className={styles.logo}>
         <h1 className={styles.text}>Fundux</h1>
      </div>
   );
}

export default Logo;
