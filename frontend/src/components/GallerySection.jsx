import React from 'react';
import Slider from 'react-slick';
import './GallerySection.css';
import img1 from '../assets/gallery1.avif';
import img2 from '../assets/gallery2.avif';
import img3 from '../assets/gallery3.avif';
import img4 from '../assets/gallery1.avif';
import img5 from '../assets/gallery2.avif';
import { useNavigate } from 'react-router-dom';

function GallerySection() {
    const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  const projects = [
    { image: img1, caption: 'Modern Tile Roof – Naples, FL' },
    { image: img2, caption: 'Gutter Renovation – Estero, FL' },
    { image: img3, caption: 'Shingle Re-roof – Bonita Springs, FL' },
    { image: img4, caption: 'Commercial Roof Coating – Marco Island, FL' },
    { image: img5, caption: 'Custom Fascia & Soffits – Fort Myers, FL' },
  ];

  return (
    <section className="gallery-preview-section">
      <div className="gallery-preview-header">
        <h2>Our Work</h2>
        <p>Take a look at some of our favorite roofing and exterior projects.</p>
      </div>

      <Slider {...settings} className="gallery-slider">
        {projects.map((proj, index) => (
          <div className="gallery-slide" key={index}>
            <div className="gallery-img-wrapper">
              <img src={proj.image} alt={`Project ${index + 1}`} className="gallery-img" />
              <div className="gallery-caption">{proj.caption}</div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="gallery-preview-button">
        <a href="/gallery" className="view-gallery-btn">View Full Gallery</a>
      </div>
    </section>
  );
}

export default GallerySection;
