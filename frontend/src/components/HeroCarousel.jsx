import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './HeroCarousel.css';
import logo from '../assets/logo.avif';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

function HeroCarousel() {
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

  return (
    <div className="hero-carousel">
      <img src={logo} alt="BT Roofing Logo" className="hero-carousel-logo" onClick={() => navigate('/')} />

      <div className="hero-carousel-text">
        <h1 className="fade-in line-1">Your roof is more than protection,</h1>
        <h1 className="fade-in line-2">it's a statement of trust,</h1>
        <h1 className="fade-in line-3">craftsmanship and care.</h1>
      </div>

      <Slider {...settings}>
        {[img1, img2, img3].map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroCarousel;
