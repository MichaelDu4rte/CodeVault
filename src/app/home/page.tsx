'use client';

import NavigationHeader from '@/components/NavigationHeader';
import Hero from './_components/Hero';
import Introduction from './_components/Introduction';
import Integrations from './_components/Integrations';
import Footer from './_components/Footer';
import PricingPage from './_components/Pricing';
import ProductShowcase from './_components/ProductShowcase';
import { Testimonials } from './_components/Testimonials';
import CallToAction from './_components/CallToAction';
import Head from 'next/head';

function HomePage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="CodeVault é a plataforma de desenvolvimento ideal para back-end, com editor de código online e repositório de códigos públicos. Colabore, compartilhe e aprenda com a comunidade."
        />
        <meta
          name="keywords"
          content="CodeVault, editor de código, repositório de códigos, desenvolvimento back-end, programação, código público, plataforma de desenvolvimento, colaboração, aprendizagem"
        />
        <meta name="author" content="Michael - Desenvolvedor de Software" />
        <meta
          property="og:title"
          content="CodeVault - Plataforma de Desenvolvimento e Repositório de Códigos"
        />
        <meta
          property="og:description"
          content="CodeVault é a plataforma de desenvolvimento ideal para back-end, com editor de código online e repositório de códigos públicos. Colabore, compartilhe e aprenda com a comunidade."
        />
        <meta property="og:url" content="https://www.codevault.com.br" />
        <meta
          name="twitter:title"
          content="CodeVault - Plataforma de Desenvolvimento e Repositório de Códigos"
        />
        <meta
          name="twitter:description"
          content="CodeVault é a plataforma de desenvolvimento ideal para back-end, com editor de código online e repositório de códigos públicos. Colabore, compartilhe e aprenda com a comunidade."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>

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
          <Testimonials />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
