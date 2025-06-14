import React, { useState } from "react";
import "./Services.css";
import {
  HouseLine,
  Wrench,
  Nut,
  DropHalfBottom,
  PaintBrushBroad,
} from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/Service1.avif";
import img2 from "../assets/service2.avif";
import img3 from "../assets/service3.avif";
import img4 from "../assets/service4.avif";

const services = [
  {
    title: "New Roof",
    titleModal: "New Construction",
    icon: <motion.div whileHover={{ scale: 1.2 }}><HouseLine size={48} weight="fill" /></motion.div>,
    image: img1,
    description:
      "From concept to completion, we provide durable, modern new roof installations with top-tier materials.",
    details:
      "We know that with any construction project, time is money and when you choose us, you can be assured of our prompt material delivery and installation. We service all your needs as they come up. BT Roofing provides full detailed breakout of every plan so you know what we estimated for and how much the per unit pricing is for it. Safety is our top priority as well. We follow all Florida Building Code guidelines and each project is fully supervised by onsite project managers.",
  },
  {
    title: "Roof Replacement",
    titleModal: "Roof Replacement",
    icon: <motion.div whileHover={{ scale: 1.2 }}><Wrench size={48} weight="fill" /></motion.div>,
    image: img2,
    description:
      "Upgrade aging roofs with precision and aesthetics, ensuring your investment remains secure and elegant.",
    details:
      "A roof replacement is an important home update, so whether you need responsive storm restoration services or it’s just time to replace your existing roof, you can always count on the expertise of a highly skilled of BT Roofing. Our process makes it fast and easy to get the roof replacement you need.",
  },
  {
    title: "Roof Repair",
    titleModal: "Repair or Replace Your Roof?",
    icon: <motion.div whileHover={{ scale: 1.2 }}><Nut size={48} weight="fill" /></motion.div>,
    image: img3,
    description:
      "Timely and skilled repairs for leaks, storm damage, and aging structures — preserving safety and value.",
    details: "Detailed information about Roof Repair...",
  },
  {
    title: "Gutters",
    titleModal: "Gutters",
    icon: <motion.div whileHover={{ scale: 1.2 }}><DropHalfBottom size={48} weight="fill" /></motion.div>,
    image: img4,
    description:
      "Effective water management with clean, modern gutter systems tailored to your home’s drainage needs.",
    details:
      "Rain gutters (along with the fascia and soffit which make up the adjoining eaves) are relatively inexpensive for the protection and value they add to your home. New gutters can prevent mold, protect your landscaping and avoid soil erosion and/or damage to your foundation.",
  },
  {
    title: "Soffit and Fascia",
    titleModal: "Soffit and Fascia",
    icon: <motion.div whileHover={{ scale: 1.2 }}><PaintBrushBroad size={48} weight="fill" /></motion.div>,
    image: img1,
    description:
      "Protect your roof’s edges with seamless soffit and fascia systems that blend durability and design.",
    details:
      "Soffits and fascia are the part of a roof’s structure closest to the gutters. This means that they are the first things to be damaged by water if the home’s gutters become clogged. In addition, they can also fall victim to an infestation of insects or by the nesting of birds and other animals. If you have noticed discoloration and peeling paint, it can be a tell-tale sign that the soffits and fascia of your home have been damaged and your home requires siding repair service.",
  },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Explore the core solutions we provide with care, precision, and vision.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        loop
        className="services-swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="service-icon-card"
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3 className="service-icon-title">{service.title}</h3>
              <p className="service-icon-description">{service.description}</p>
              <button className="see-more-button">View</button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeIndex !== null && (
        <div className="modal-overlay" onClick={() => setActiveIndex(null)}>
          <motion.div
            className="modal-content glass"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="modal-close"
              onClick={() => setActiveIndex(null)}
            >
              &times;
            </button>
            <h3 className="modal-title">{services[activeIndex].titleModal}</h3>
            <img
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              className="modal-image"
            />
            <p className="modal-description">
              {services[activeIndex].details}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Services;
