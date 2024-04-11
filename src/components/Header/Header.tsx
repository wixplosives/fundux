import React from 'react';
import styles from './Header.module.css';

import Logo from '../Logo';
import NavBar from '../NavBar';
// import UserAuth from '../UserAuth';

function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <NavBar />
            {/* <UserAuth /> */}
        </header>
    );
}

export default Header;



