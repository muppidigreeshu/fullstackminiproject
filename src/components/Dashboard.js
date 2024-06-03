import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';
import Sidebar from './Sidebar';
import styles from '../styles/Dashboard.module.css';

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.profileSettings}>
        <span className={styles.menuIcon} onClick={toggleSidebar}>&#9776;</span>
        <h1>Dashboard</h1>
      </div>
      {showSidebar && <Sidebar />}
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Dashboard;




/*import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';
import '../globalStyles.css';
import styles from './Dashboard.module.css';


function Dashboard() {
  return (
    <div className={styles.dashboard} style={{ backgroundImage: `url('/background.jpg')` }} >
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
*/