import { useState, useRef } from 'react';
import styles from './Avatar.module.css';
import Menu from '../Menu';

function Avatar() {
   const [isOpen, setIsOpen] = useState(false);
   const anchorRef = useRef<HTMLButtonElement>(null);

   const handleOnClick = () => {
      setIsOpen(!isOpen);
   };

   const handleOnClose = () => {
      setIsOpen(false);
   };

   const anchorRect = anchorRef.current
      ? anchorRef.current.getBoundingClientRect()
      : null;

   return (
      <div className={styles.avatar}>
         <button
            ref={anchorRef}
            className={styles.avatarButton}
            onClick={handleOnClick}>
            JD
         </button>
         {isOpen && <Menu onClose={handleOnClose} anchorRect={anchorRect} />}
      </div>
   );
}

export default Avatar;
