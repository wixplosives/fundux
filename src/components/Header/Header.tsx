import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo';
import NavBar from '../NavBar';
import LogIn from '../LogIn';
import LogInModal from '../LogInModal';

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
         {isModalVisible && <LogInModal onCloseModal={closeModal} />}
      </header>
   );
}

export default Header;
