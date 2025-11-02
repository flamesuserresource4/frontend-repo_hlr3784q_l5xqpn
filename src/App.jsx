import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <CTASection />
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-sm text-slate-400">
        Built for campus communities — University Lost & Found Portal
      </footer>
    </div>
  );
}

export default App;
