import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo';
import NavBar from '../NavBar';
import LogIn from '../LogIn';
import AuthModals from '../AuthModals';

function Header() {
   const [isModalVisible, setModalVisible] = useState(false);

   const handleClick = () => {
      setModalVisible(true);
   };

   const handleCloseModal = () => {
      setModalVisible(false);
   };

   return (
      <header className={styles.header}>
         <Logo />
         <NavBar />
         <LogIn onClick={handleClick} />
         {isModalVisible && <AuthModals onCloseModal={handleCloseModal} />}
      </header>
   );
}

export default Header;
