import { useState, useRef, useEffect } from 'react';
import styles from './Avatar.module.css';
import Menu from '../Menu';
import { fetchUserById } from '../../utils';
import { User } from '../../data/users';

interface AvatarProps {
   onLogOut: () => void;
   userId: number;
}

function Avatar({ onLogOut, userId }: AvatarProps) {
   const [isOpen, setIsOpen] = useState(false);
   const [user, setUser] = useState<User | null>(null);
   const anchorRef = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      const loadUser = async () => {
         const user = await fetchUserById(userId);
         setUser(user);
      };

      loadUser();
   }, [userId]);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   const handleClose = () => {
      setIsOpen(false);
   };

   const anchorRect = anchorRef.current
      ? anchorRef.current.getBoundingClientRect()
      : null;

   const avatarStyle = user?.avatar
      ? {
           backgroundImage: `url(${user.avatar})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
        }
      : undefined;

   const initials = user
      ? user.name
           .split(' ')
           .map((n) => n[0])
           .join('')
      : 'NL';

   return (
      <div className={styles.avatar}>
         <button
            ref={anchorRef}
            className={styles.avatarButton}
            onClick={handleClick}
            style={avatarStyle}>
            {avatarStyle ? undefined : initials}
         </button>
         {isOpen && (
            <Menu
               onClose={handleClose}
               onLogOut={onLogOut}
               anchorRect={anchorRect}
               user={user}
            />
         )}
      </div>
   );
}

export default Avatar;
