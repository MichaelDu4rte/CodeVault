import { currentUser } from '@clerk/nextjs/server';
import { ConvexHttpClient } from 'convex/browser';
import React from 'react';
import { api } from '../../../convex/_generated/api';
import ProPlanView from './_components/ProPlanView';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import LoginButton from '@/components/providers/LoginButton';
import { Star } from 'lucide-react';
import NavigationHeader from '@/components/NavigationHeader';
import UpgradeButton from './_components/UpgradeButton';

async function PricingPage() {
  const user = await currentUser();
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || ""
  });

  if (convexUser?.isPro) return <ProPlanView />;

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] selection:bg-blue-500/20 selection:text-blue-200">
      {/* Fundo com gradiente e blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1e1e2e] to-[#0a0a0f] opacity-50 blur-lg z-0"></div>

      <div className="max-w-[1800px] mx-auto p-4 relative z-10">
        <NavigationHeader />
      </div>

      <main className="relative pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-24">
            <div className="relative inline-block">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-10" />
              <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-8">
                Potencialize Seus Códigos <br />com o Acesso Pro!
              </h1>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-10" />
            <div className="relative bg-[#12121a]/90 backdrop-blur-xl rounded-2xl shadow-xl">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

              <div className="relative p-8 md:p-12">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 ring-gray-800/60 mb-6">
                    <Star className="w-8 h-8 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white mb-4">Acesso Pro Vitalício</h2>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-2xl text-gray-400">R$</span>
                    <span className="text-6xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
                      9,99
                    </span>
                    <span className="text-xl text-gray-400">vitalício</span>
                  </div>
                  <p className="text-gray-400 text-lg">Desbloqueie todo o potencial do CodeVault e aproveite todos os recursos exclusivos.</p>
                </div>

                {/* CTA */}
                <div className="flex justify-center gap-6">
                  <SignedIn>
                    <UpgradeButton />
                  </SignedIn>

                  <SignedOut>
                    <LoginButton />
                  </SignedOut>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PricingPage;
