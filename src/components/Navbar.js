import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
    return (
    <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
    </nav>
    );
}

export default Navbar;






/*import React from 'react';
import { Link } from 'react-router-dom';
import globalStyles from '../Global.module.css';

function NavBar() {
    return (
    <nav className={globalStyles.nav}>
        <ul className={globalStyles.nav}>
        <li className={globalStyles.navItem}>
            <Link to="/" className={globalStyles.link}>Home</Link>
        </li>
        <li className={globalStyles.navItem}>
            <Link to="/about" className={globalStyles.link}>About</Link>
        </li>
        <li className={globalStyles.navItem}>
            <Link to="/dashboard" className={globalStyles.link}>Dashboard</Link>
        </li>
        </ul>
    </nav>
    );
}

export default NavBar;
*/