import { useState } from 'react';
import styles from './Avatar.module.css';
import Menu from '../Menu';

function Avatar() {
   const [isOpen, setIsOpen] = useState(false);

   const handleOnClick = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className={styles.avatar}>
         <button className={styles.avatarButton} onClick={handleOnClick}>
            JD
         </button>
         {isOpen && <Menu />}
      </div>
   );
}

export default Avatar;
