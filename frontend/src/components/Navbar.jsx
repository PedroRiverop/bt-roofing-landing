import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.avif';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : ''}`}>
      <div className="navbar-content">
        <img src={logo} alt="BT Roofing Logo" className="navbar-logo" />
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#services">Services</Link></li>
          <li><Link to="#gallery">Gallery</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;