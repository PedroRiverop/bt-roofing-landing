import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

import logo from '../assets/logo.avif';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  { type: 'image', src: img1 },

  { type: 'image', src: img2 },
  
  { type: 'image', src: img3 }
];

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false
  };
  const navigate = useNavigate();

  
  return (
    <div className="hero-container">
      <Slider {...settings} className="slider-background">
        {slides.map((item, index) => (
          <div key={index} className="slide-item">
            {item.type === 'image' ? (
              <img src={item.src} className="media-slide" alt="Slide" />
            ) : (
              <video src={item.src} className="media-slide" autoPlay loop muted />
            )}
            <div className="dark-overlay" />
          </div>
        ))}
      </Slider>

      <div className="overlay">
        <img src={logo} alt="BT Roofing Logo" className="logo" />
        <div className="buttons">
            <button className="btn" onClick={() => navigate('/home')}>Home</button>
            <button className="btn" onClick={() => navigate('/gallery')}>Gallery</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;