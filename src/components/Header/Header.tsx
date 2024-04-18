import styles from './Header.module.css';
import Logo from '../Logo';
import NavBar from '../NavBar';
import LogIn from '../LogIn';
import ModalLogIn from '../ModalLogIn';

function Header() {
   return (
      <header className={styles.header}>
         <Logo />
         <NavBar />
         <LogIn />
         <ModalLogIn />
      </header>
   );
}

export default Header;
