import React from 'react';
import './Footer.css';
import { Instagram, Mail, Send } from 'lucide-react';
import logo from '../assets/logo.avif';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <img src={logo} alt="BT Roofing Logo" className="footer-logo-bg moved-right" />
      </div>

      <div className="footer-divider" />

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-nav">
            <a href="#about">About Us</a>
            <a href="#services">Our Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-social">
          <a href="mailto:contact@btroofing.com" target="_blank" rel="noopener noreferrer"><Mail size={20} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><Send size={20} /></a>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 BT Roofing</p>
          <p className="site-by">Site by: <span className="slide-fade">G</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;