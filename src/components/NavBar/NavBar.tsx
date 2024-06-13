import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
   return (
      <nav className={styles.navBar}>
         <ul className={styles.navList}>
            <li>
               <Link to="/" className={styles.navItem}>
                  Home
               </Link>
            </li>
            <li>
               <Link to="about" className={styles.navItem}>
                  About Us
               </Link>
            </li>
            <li>
               <Link to="how-it-works" className={styles.navItem}>
                  How It Works
               </Link>
            </li>
            <li>
               <Link to="contact" className={styles.navItem}>
                  Contact
               </Link>
            </li>
         </ul>
      </nav>
   );
}

export default NavBar;
