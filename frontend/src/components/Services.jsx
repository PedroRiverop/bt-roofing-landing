import React, { useState } from 'react';
import './Services.css';
import { Hammer, Home, PaintRoller } from 'lucide-react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imgNewRoof from '../assets/img2.jpg';
import imgRepair from '../assets/img3.jpg';
import imgOther from '../assets/img2.jpg';
import imgNewRoof1 from '../assets/img2.jpg';
import imgNewRoof2 from '../assets/img2.jpg';
import imgRepair1 from '../assets/img2.jpg';
import imgOther1 from '../assets/img2.jpg';
import imgOther2 from '../assets/img2.jpg';

const servicesData = [
  {
    icon: <Home size={40} />,
    title: 'New Roof',
    image: imgNewRoof,
    description:
      'We provide personalized attention and service to complete any new roof project, re-roof or maintenance, whether it be a commercial roof or a residential roof. We’re dedicated to our work and offer warranties to back up our work.',
    modalImages: [imgNewRoof1, imgNewRoof2],
    modalTitles: ['Smart Construction Delivery', 'Tailored to Your Property'],
    modalTexts: [
      'When you choose BT Roofing, you get more than a roof — you get a smart, organized process. We provide detailed project breakdowns, transparent pricing, and prompt material delivery to keep your schedule on track.',
      'Each roof we build is customized to your property’s design and environment. Whether commercial or residential, our team ensures it’s done right the first time — with top-tier materials and expert craftsmanship.'
    ],
  },
  {
    icon: <Hammer size={40} />,
    title: 'Roof Repair',
    image: imgRepair,
    description:
      'If your roof has a small leak or minor damage but you are not ready for a full new roof installation, we are available to fix leaks and any damage your roof has sustained due to age and weather.',
    modalImages: [imgRepair1],
    modalTitles: ['Restore Integrity'],
    modalTexts: [
      'Cracks, leaks, or storm damage? Our expert repair team evaluates and restores your roof’s full protection with precision craftsmanship.'
    ],
  },
  {
    icon: <PaintRoller size={40} />,
    title: 'Other Services',
    image: imgOther,
    description:
      'Repair or installation of new gutters, downspouts, fascias and soffits. With these new improvements, not only will your home have increased protection, but also new curb appeal.',
    modalImages: [imgOther1, imgOther2],
    modalTitles: ['Complementary Enhancements', 'Tailored Upgrades'],
    modalTexts: [
      'Beyond roofing, we elevate entire properties with enhancements like gutter systems, ventilated skylights and custom exterior paint finishes.',
      'No project is too small or large—we adapt each solution to your unique structure and style.'
    ],
  },
];

function Services() {
  const [activeService, setActiveService] = useState(null);

  const openModal = (service) => setActiveService(service);
  const closeModal = () => setActiveService(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Explore the core solutions we provide with care, precision, and vision.</p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-wrapper" key={index}>
            <div
              className="service-card"
              onClick={() => openModal(service)}
              style={{ '--bg-image': `url(${service.image})` }}
            >
              <div className="service-overlay">
                <motion.div
                  className="service-icon"
                  whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="service-title">{service.title}</h3>
                <div className="hover-overlay">
                  <button className="see-more-button">See more</button>
                </div>
              </div>
            </div>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      {activeService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h3 className="modal-title">{activeService.title}</h3>
            <Slider {...sliderSettings}>
              {activeService.modalImages.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`Slide ${idx + 1}`} className="modal-image" />
                  <h4>{activeService.modalTitles[idx]}</h4>
                  <p>{activeService.modalTexts[idx]}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
