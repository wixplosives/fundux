import ReactDOM from 'react-dom';
import styles from './Menu.module.css';

interface MenuProps {
   anchorRect: DOMRect | null;
   onClose: () => void;
}

function Menu({ anchorRect, onClose }: MenuProps) {
   if (!anchorRect) return null;

   const top = anchorRect.bottom + 10 + window.scrollY;
   const right = window.innerWidth - anchorRect.right - window.scrollX;
   const handleOnClose = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
         onClose();
      }
   };

   return ReactDOM.createPortal(
      <div className={styles.menuModal} onClick={handleOnClose}>
         <div
            className={styles.menu}
            style={{
               position: 'absolute',
               top: `${top}px`,
               right: `${right}px`,
            }}>
            <h4>John Doe</h4>
            <ul className={styles.menuList}>
               <li className={styles.menuItem}>Profile</li>
               <li className={styles.menuItem}>Settings</li>
               <li
                  className={`${styles.menuItem} ${styles.menuLowerBoundry}`}
                  onClick={onClose}>
                  Log out
               </li>
            </ul>
         </div>
      </div>,
      document.getElementById('menu-root') as HTMLElement
   );
}

export default Menu;
