import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingSection } from './components/Pricing';
import { GuaranteeSection } from './components/Guarantee';
import { BonusesSection } from './components/Bonuses';
import { AboutSection } from './components/About';
import { IngredientsSection } from './components/Ingredients';
import { TestimonialsSection } from './components/Testimonials';
import { FaqSection } from './components/Faq';
import { Verdict } from './components/Verdict';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 text-lg">
      <Header />
      <main>
        <Hero />
        <div id="about">
          <AboutSection />
        </div>
        <div id="ingredients">
          <IngredientsSection />
        </div>
         <div id="bonuses">
         <BonusesSection />
        </div>
        <TestimonialsSection />
        <Verdict />
        <div id="order">
          <PricingSection />
        </div>
        <GuaranteeSection />
        <div id="faq">
          <FaqSection />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;