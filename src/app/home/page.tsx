'use client';

import NavigationHeader from '@/components/NavigationHeader';
import Hero from './_components/Hero';
import Introduction from './_components/Introduction';
import Integrations from './_components/Integrations';
import Footer from './_components/Footer';
import PricingPage from './_components/Pricing';
import ProductShowcase from './_components/ProductShowcase';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative ">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#121212] to-[#1a1a1a] blur-2xl z-0"></div>

      <div className="max-w-[1800px] mx-auto p-4 relative z-10">
        <NavigationHeader />
      </div>

      {/* Sections */}
      <Hero />
      <div className="relative z-20">
        <ProductShowcase />
        <Introduction />
        <Integrations />
        <PricingPage />
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
