import React from 'react';
import Header from '../components/landingpage-components/Header';
import Hero from '../components/landingpage-components/Hero';
import AboutUs from '../components/landingpage-components/AboutUs';
import Services from '../components/landingpage-components/Services';
import PictureSection from '../components/landingpage-components/PictureSection';
import Contact from '../components/landingpage-components/Contact';
import Footer from '../components/landingpage-components/Footer';

const Landingpage = () => {
  return (
    <>
      {/* Header */}
      <div className='bg-hero-pattern bg-no-repeat bg-center bg-cover bg-fixed h-screen section'>
        <div className=' bg-gradient-to-r from-green-800 to-cyan-700 opacity-90 absolute left-0 right-0 top-0 h-full'></div>
        <Header />
        <Hero />
      </div>

      {/* main */}
      <AboutUs />
      <PictureSection />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Landingpage;
