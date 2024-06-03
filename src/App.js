import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import './styles/globalStyles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;







// src/App.js
/*import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import SearchPage from './components/SearchPage';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/old-path" element={<Navigate to="/new-path" />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/form" element={<FormComponent />} />
      </Routes>
    </Router>
  );
}

export default App;*/
