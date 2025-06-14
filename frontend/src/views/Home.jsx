import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import IntroSection from '../components/IntroSection';
{/*import './Home.css';*/}
import About from '../components/About';
import Services from '../components/Services';
import GalleryPreview from '../components/GalleryPreview';
import GallerySection from '../components/GallerySection';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <HeroCarousel />
      <IntroSection />
      <About />
      <Services />
      <GalleryPreview />
      <GallerySection />
      <Contact />
    </>
  );
}

export default Home;