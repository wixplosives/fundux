import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo';
import NavBar from '../NavBar';
import LogIn from '../LogIn';
import Avatar from '../Avatar';

function Header() {
   const [isLogedIn, setIsLogedIn] = useState(true);

   const handleLogOut = () => {
      setIsLogedIn(!isLogedIn);
   };

   return (
      <header className={styles.header}>
         <Logo />
         <NavBar />
         {isLogedIn ? <Avatar onLogOut={handleLogOut} /> : <LogIn />}
      </header>
   );
}

export default Header;
