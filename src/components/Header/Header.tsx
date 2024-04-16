import styles from './Header.module.css';
import Logo from '../Logo';
import NavBar from '../NavBar';
import LogIn from '../LogIn';

function Header() {
   return (
      <header className={styles.header}>
         <Logo />
         <NavBar />
         <LogIn />
      </header>
   );
}

export default Header;
