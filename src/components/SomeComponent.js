// src/components/SomeComponent.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function SomeComponent() {
    let history = useHistory();

    function handleClick() {
    // Do something, then navigate to home
    history.push('/');
    }

    return (
    <div>
        <button onClick={handleClick}>Go Home</button>
    </div>
    );
}

export default SomeComponent;
