import React from "react";
import "./AboutUs.css";
import mapImage from "../assets/map-preview.png";
import directorImage from "../assets/ceo.jpg";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AboutUs() {
  return (
    <>
    <section className="about-us">
      <div className="about-header">
        <h2>About BT Roofing</h2>
        <p>Crafting homes and trust across Southwest Florida.</p>
      </div>

      <div className="about-content">
        <p>
          BT Roofing is a subsidiary of Nian Corp., a builder company of high quality homes with exceptional design in the Naples, Florida area. We are a family owned and operated company that has worked in the SW Florida real estate market since 2006. Nian Corp has been providing high quality construction for the past 6 years, with vast experience in the construction industry including roofing. We now offer individual roofing services with the same level of craftsmanship and reliability.
        </p>
        <p>
          We have the skills, experience, and knowledge to assist in all your roofing needs. Whether you are looking to change roofing material types, have an insurance claim, or just need a replacement, we are here to help you achieve the results you seek.
        </p>
      </div>

      <div className="about-section">
        <div className="text">
          <h3>Visit Us</h3>
          <p>2055 Trade Center Way, Naples, FL 34109</p>
          <a
            href="https://www.google.com/maps?q=2055+Trade+Center+Way+Naples+FL"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <img src={mapImage} alt="Google Maps Location" />
          </a>
        </div>
      </div>

      <div className="about-section reverse">
        <div className="media">
          <img src={directorImage} alt="Company Director" className="map-preview" />
        </div>
        <div className="text">
          <h3>Our Director</h3>
          <p>
            With over 15 years of hands-on experience in construction, our founder and director leads with vision, dedication, and a deep commitment to excellence. His leadership ensures each project is executed with precision and integrity.
          </p>
          <div className="contact-info">
            <h4>Contact Us</h4>
            <p>Email: contact@btroofingfl.com</p>
            <p>Phone: (239) 555-1234</p>
            <p>Instagram: @btroofingfl</p>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}

export default AboutUs;
