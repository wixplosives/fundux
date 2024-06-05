import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo';
import NavBar from '../NavBar';
import LogIn from '../LogIn';
import LogInModal from '../LogInModal';

function Header() {
   const [isModalVisible, setIsModalVisible] = useState(false);

   const handleLoginOnClick = () => {
      setIsModalVisible(true);
   };

   const handleOnCloseModal = () => {
      setIsModalVisible(false);
   };

   return (
      <header className={styles.header}>
         <Logo />
         <NavBar />
         <LogIn onClick={handleLoginOnClick} />
         {isModalVisible && <LogInModal onCloseModal={handleOnCloseModal} />}
      </header>
   );
}

export default Header;
