import React, { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';
import logo from '../assets/logo.avif';
import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.avif';
import img4 from '../assets/img4.jpg';

function HeroCarousel() {
  const [menuOpen, setMenuOpen] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
    pauseOnHover: false,
    nextArrow: <div className="custom-arrow next">›</div>,
    prevArrow: <div className="custom-arrow prev">‹</div>
  };

  const navigate = useNavigate();
  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="hero-carousel">
      <img src={logo} alt="BT Roofing Logo" className="hero-carousel-logo" onClick={() => navigate('/')} />

     <button className="menu-button" onClick={() => setMenuOpen(true)}>MENU</button>
        {menuOpen && (
          <>
            <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
            <div className="side-menu">
              <button className="close-button" onClick={() => setMenuOpen(false)}>×</button>
              <ul>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
              </ul>
            </div>
          </>
    )}

      <div className="hero-carousel-text">
        <h1 className="fade-in line-1">Designed to last,</h1>
        <h1 className="fade-in line-2">Built to protect,</h1>
        <h1 className="fade-in line-3">Trusted to deliver.</h1>
      </div>

      <Slider {...settings}>
        {[img1, img2, img3, img4].map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>


     {/* Fondo oscuro translúcido */}
      {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>}

      {/* Menú lateral */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={() => setMenuOpen(false)}> Close &times;</button>
        <ul>
          <li onClick={() => handleNav('/home')}>Home</li>
          <li onClick={() => handleNav('#about')}>About</li>
          <li onClick={() => handleNav('#services')}>Services</li>
          <li onClick={() => handleNav('#gallery')}>Gallery</li>
          <li onClick={() => handleNav('#contact')}>Contact</li>
        </ul>
      </div>

     



    </div>
  );
}

export default HeroCarousel;
