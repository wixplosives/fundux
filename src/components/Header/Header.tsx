import styles from './Header.module.css';
import Logo from '../Logo';
import NavBar from '../NavBar';
import LogIn from '../LogIn';
import Avatar from '../Avatar';

function Header() {
   return (
      <header className={styles.headerNew}>
         <div className={styles.header}>
            <Logo />
            <NavBar />
            {/* <LogIn /> */}
         </div>
         <Avatar />
      </header>
   );
}

export default Header;
