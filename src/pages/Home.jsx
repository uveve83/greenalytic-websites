import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import {
  About,
  Services,
  StatsBand,
  Dashboard,
  Partners,
  Testimonials,
  CTABanner,
  Footer,
  WhatsAppFloat,
} from '../components/Sections';

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroCarousel />
        <About />
        <Services />
        <StatsBand />
        <Dashboard />
        <Partners />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
