import styles from './Menu.module.css';

function Menu() {
   return (
      <div className={styles.menu}>
         <h4>John Doe</h4>
         <ul className={styles.menuList}>
            <li className={styles.menuItem}>Profile</li>
            <li className={styles.menuItem}>Settings</li>
            <li className={styles.menuItem}>Log out</li>
         </ul>
      </div>
   );
}

export default Menu;
