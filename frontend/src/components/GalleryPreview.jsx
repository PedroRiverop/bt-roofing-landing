import React from 'react';
import './GalleryPreview.css';
import img1 from '../assets/preview1.avif';
import img2 from '../assets/preview2.avif';
import img3 from '../assets/preview3.avif';
import img4 from '../assets/preview4.avif';

const galleryItems = [
  {
    image: img1,
    title: 'High Quality',
    subtitle: 'Materials'
  },
  {
    image: img2,
    title: 'Satisfaction Guaranteed',
    subtitle: 'Seaside Designs'
  },
  {
    image: img3,
    title: ' Affordable Prices',
    subtitle: 'Modern Concepts'
  },
  {
    image: img4,
    title: 'LAKEFRONT',
    subtitle: 'Serene Architecture'
  },
];

function GalleryPreview() {
  return (
    <section className="gallery-preview">
      {galleryItems.map((item, index) => (
        <div key={index} className="gallery-item">
          <img src={item.image} alt={item.title} className="gallery-image" />
          <div className="gallery-overlay">
            <h2 className="gallery-title">{item.title}</h2>
            <p className="gallery-subtitle">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default GalleryPreview;
