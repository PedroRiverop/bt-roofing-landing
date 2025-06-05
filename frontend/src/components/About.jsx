import React from 'react';
import './About.css';
import aboutImage from '../assets/about.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-overlay">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">A Legacy of Craftsmanship</h2>
            <p className="about-paragraph">
              At BT Roofing, we don't just construct — we craft. Our approach blends precision engineering with an artisan’s care,
              ensuring every detail meets our exacting standards. With decades of experience, our legacy is built not only on
              rooftops but in the trust of the families and businesses we protect.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About BT Roofing" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
