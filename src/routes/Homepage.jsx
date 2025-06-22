import React, { useState, useEffect } from 'react';

// Import all the separated components
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

export default function StockPulseHomepage() {
  // State for the mobile menu, passed to the Navigation component
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for the animated numbers, passed to the StatsSection component
  const [animatedNumbers, setAnimatedNumbers] = useState({ users: 0, alerts: 0, stocks: 0 });

  // Data for testimonials, passed to the TestimonialsSection component
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Day Trader",
      content: "StockPulse has completely transformed how I monitor my portfolio. The instant alerts have saved me thousands.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Investment Advisor",
      content: "My clients love the clean interface and reliable notifications. It's become an essential tool in our workflow.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Retail Investor",
      content: "Finally, a stock app that doesn't overwhelm me with features I don't need. Simple, powerful, perfect.",
      rating: 5
    }
  ];

  // Logic for animating the numbers remains in the parent component
  useEffect(() => {
    const targets = { users: 50000, alerts: 2500000, stocks: 8500 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedNumbers({
        users: Math.floor(targets.users * progress),
        alerts: Math.floor(targets.alerts * progress),
        stocks: Math.floor(targets.stocks * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedNumbers(targets);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <HeroSection />
        <StatsSection animatedNumbers={animatedNumbers} />
        <FeaturesSection />
        <TestimonialsSection testimonials={testimonials} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}