import React from 'react';
import Slider from 'react-slick';
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
    arrows: false
  };

  return (
    <div className="hero-carousel">
    <img src={logo} alt="BT Roofing Logo" className="hero-carousel-logo" />
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