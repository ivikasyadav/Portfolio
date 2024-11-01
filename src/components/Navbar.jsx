import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="navbar-logo">Vikas Yadav</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link> {/* Link to Home page */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Link to About page */}
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link> {/* Link to Portfolio page */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Link to Contact page */}
        </li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;