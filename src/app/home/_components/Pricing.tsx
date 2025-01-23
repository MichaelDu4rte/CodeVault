import React from 'react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { CheckCircle, Zap, FileText, Award, LogIn } from 'lucide-react';
import Link from 'next/link';

function PricingPage() {
  const CHEKOUT_URL =
    'https://codevaultstore.lemonsqueezy.com/buy/929ba4c5-adb8-4110-9524-d51e16332f64';

  const benefits = [
    'Editor com todas as funcionalidades',
    'Repositório público sem limites',
    'Participe de discussões e deixe comentários',
    'Acesso a ferramentas exclusivas',
  ];

  const benefitsFree = [
    'Editor com funcionalidades básicas',
    'Repositório público limitado',
    'Participe de discussões e deixe comentários',
    'Recursos Limitados',
  ];

  return (
    <section className="relative pt-32 pb-24 px-6" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -inset-px bg-gradient-to-r from-purple-500 to-indigo-500 blur-xl opacity-20" />
            <h1 className="relative text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text mb-6">
              Liberte Todo o Poder do Seu Código <br />
              com o Acesso Pro!
            </h1>
            <p className="text-gray-400 text-lg">
              Explore recursos ilimitados, publique seu trabalho e colabore como
              nunca antes.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="relative bg-[#1a1a24] rounded-xl shadow-lg p-8 transition-transform scale-105 hover:shadow-2xl duration-300 ease-in-out ring-2 ring-purple-500 order-first md:order-last">
            <div className="text-center mb-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-200 mt-4">
                Acesso Pro Vitalício
              </h2>
              <p className="text-gray-400 mt-2">
                Desbloqueie o máximo do CodeVault para sempre.
              </p>
            </div>
            <div className="flex justify-center items-baseline gap-1 mb-6">
              <span className="text-2xl text-gray-400">R$</span>
              <span className="text-5xl font-semibold bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">
                9,99
              </span>
              <span className="text-xl text-gray-400">único</span>
            </div>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="text-center mt-6">
              <SignedIn>
                <Link
                  href={CHEKOUT_URL}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
                    bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl
                    transition-all"
                >
                  <Zap className="w-5 h-5" />
                  Garanta o Seu Agora!
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
                    bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl
                    transition-all"
                  >
                    <LogIn className="w-5 h-5 transition-transform" />
                    <span className="text-lg font-semibold">
                      Faça Login para Comprar
                    </span>
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
          <div className="relative bg-[#1a1a24] rounded-xl shadow-lg p-8 transition-transform hover:shadow-xl duration-300 ease-in-out order-last md:order-first">
            <div className="text-center mb-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                <FileText className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-200 mt-4">
                Plano Gratuito
              </h2>

              <p className="text-gray-400 mt-2">
                Experimente sem custo e veja o que o CodeVault pode fazer.
              </p>
            </div>
            <ul className="space-y-3">
              {benefitsFree.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="text-center mt-6">
              <Link
                href="/editor"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
                    bg-gradient-to-r rounded-2xl
                    from-indigo-600 to-purple-600 transition-all"
              >
                <Zap className="w-5 h-5" />
                Experimente Agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
