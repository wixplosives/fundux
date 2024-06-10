import ReactDOM from 'react-dom';
import styles from './Menu.module.css';
import { User } from '../../data/users';

interface MenuProps {
   onClose: () => void;
   onLogOut: () => void;
   anchorRect: DOMRect | null;
   user: User | null;
}

function Menu({ onClose, onLogOut, anchorRect, user }: MenuProps) {
   if (!anchorRect) return null;

   const top = anchorRect.bottom + 10;
   const right = window.innerWidth - anchorRect.right;
   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
         onClose();
      }
   };

   return ReactDOM.createPortal(
      <>
         <div className={styles.menuModal} onClick={handleClick}></div>
         <div
            className={styles.menu}
            style={{
               position: 'absolute',
               top: `${top}px`,
               right: `${right}px`,
            }}>
            <h4>{user?.name}</h4>
            <ul className={styles.menuList}>
               <li className={styles.menuItem}>Profile</li>
               <li className={styles.menuItem}>Settings</li>
               <li
                  className={`${styles.menuItem} ${styles.menuLowerBoundry}`}
                  onClick={onLogOut}>
                  Log out
               </li>
            </ul>
         </div>
      </>,
      document.getElementById('menu-root') as HTMLElement
   );
}

export default Menu;
