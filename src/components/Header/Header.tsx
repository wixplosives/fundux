import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo';
import NavBar from '../NavBar';
import LogIn from '../LogIn';
import Avatar from '../Avatar';
import LogInModal from '../LogInModal';

function Header() {
   const [isLogedIn, setIsLogedIn] = useState(false);
   const [isModalVisible, setIsModalVisible] = useState(false);

   const handleLogOut = () => {
      setIsLogedIn((prev) => !prev);
   };

   const handleClick = () => {
      setIsModalVisible(true);
   };

   const handleCloseModal = () => {
      setIsModalVisible(false);
   };
   return (
      <header className={styles.header}>
         <Logo />
         <NavBar />
         {isLogedIn ? (
            <Avatar onLogOut={handleLogOut} userId={2}/>
         ) : (
            <LogIn onClick={handleClick} />
         )}
         {isModalVisible && !isLogedIn && (
            <LogInModal onCloseModal={handleCloseModal} />
         )}
      </header>
   );
}

export default Header;
