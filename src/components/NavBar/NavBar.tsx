import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>About Us</li>
                <li className={styles.navItem}>How It Works</li>
                <li className={styles.navItem}>Contact</li>
            </ul>
        </nav>
    );
}

export default NavBar;
