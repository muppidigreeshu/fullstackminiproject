import React from 'react';
import '../styles/globalStyles.css';

function Home() {
    return (
    <div className="container">
        <h1>Home Page</h1>
        <p>Welcome to the Home page!</p>
    </div>
    );
}

export default Home;


/*import React from 'react';
import styles from './Home.module.css';

function Home() {
    return (
    <div className={styles.container}>
        <h2 className={styles.title}>Home Page</h2>
        <p className={styles.text}>Welcome to the Home Page!</p>
    </div>
    );
}

export default Home;*/
