import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo';
import NavBar from '../NavBar';
import LogIn from '../LogIn';
import ModalLogIn from '../LogInModal';
import AuthModals from '../AuthModals';

function Header() {
   const [isModalVisible, setModalVisible] = useState(false);

   const handleLoginClick = () => {
      setModalVisible(true);
   };

   const closeModal = () => {
      setModalVisible(false);
   };

   return (
      <header className={styles.header}>
         <Logo />
         <NavBar />
         <LogIn onLoginClick={handleLoginClick} />
         {isModalVisible && <AuthModals onCloseModal={closeModal} />}
      </header>
   );
}

export default Header;
