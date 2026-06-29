import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedPackages } from './components/FeaturedPackages';
import { HowItWorks } from './components/HowItWorks';
import { DestinationHighlights } from './components/DestinationHighlights';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedPackages />
        <HowItWorks />
        <DestinationHighlights />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
