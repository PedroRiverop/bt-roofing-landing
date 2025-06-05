import React from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import IntroSection from '../components/IntroSection';
{/*import './Home.css';*/}
import About from '../components/About';
import Services from '../components/Services';
import GalleryPreview from '../components/GalleryPreview';
import Footer from '../components/Footer';
import GallerySection from '../components/GallerySection';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <IntroSection />
      <About />
      <Services />
      <GalleryPreview />
      <GallerySection />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;