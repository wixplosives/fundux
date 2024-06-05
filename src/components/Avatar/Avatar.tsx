import { useState, useRef } from 'react';
import styles from './Avatar.module.css';
import Menu from '../Menu';

interface AvatarProps {
   onLogOut: () => void;
}

function Avatar({ onLogOut }: AvatarProps) {
   const [isOpen, setIsOpen] = useState(false);
   const anchorRef = useRef<HTMLButtonElement>(null);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   const handleClose = () => {
      setIsOpen(false);
   };

   const anchorRect = anchorRef.current
      ? anchorRef.current.getBoundingClientRect()
      : null;

   return (
      <div>
         <button
            ref={anchorRef}
            className={styles.avatarButton}
            onClick={handleClick}>
            JD
         </button>
         {isOpen && (
            <Menu
               onClose={handleClose}
               onLogOut={onLogOut}
               anchorRect={anchorRect}
            />
         )}
      </div>
   );
}

export default Avatar;
