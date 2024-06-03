import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

function Sidebar() {
    return (
    <div className={styles.sidebar}>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
    </div>
    );
}

export default Sidebar;
