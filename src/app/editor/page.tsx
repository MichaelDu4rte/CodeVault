import EditorPanel from './_components/EditorPanel';
import Header from './_components/Header';
import OutputPanel from './_components/OutputPanel';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeVault - Editor de Código</title>
        <meta
          name="description"
          content="Crie e edite seu código com a ferramenta CodeVault, oferecendo um ambiente intuitivo e poderoso."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="CodeVault - Editor de Código" />
        <meta
          property="og:description"
          content="Crie e edite seu código com a ferramenta CodeVault, oferecendo um ambiente intuitivo e poderoso."
        />
        <meta property="og:url" content="https://codevault.com.br/editor" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CodeVault - Editor de Código" />
        <meta
          name="twitter:description"
          content="Crie e edite seu código com a ferramenta CodeVault, oferecendo um ambiente intuitivo e poderoso."
        />
      </Head>

      <div className="min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1e1e2e] to-[#0a0a0f] opacity-50 blur-lg z-0"></div>

        <div className="relative max-w-[1800px] mx-auto p-4 z-10">
          <Header />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <EditorPanel />
            <OutputPanel />
          </div>
        </div>
      </div>
    </>
  );
}
