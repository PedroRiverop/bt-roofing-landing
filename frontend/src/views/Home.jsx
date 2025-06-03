import React from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import IntroSection from '../components/IntroSection';
{/*import './Home.css';*/}
import About from '../components/About';
import Services from '../components/Services';
{/*import Gallery from '../components/Gallery';
import Contact from '../components/Contact';*/}

function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <IntroSection />
      <About />
      <Services />
      {/*<Gallery />
      <Contact />*/}
    </>
  );
}

export default Home;