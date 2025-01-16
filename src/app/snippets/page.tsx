'use client';

import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { useState } from 'react';
import SnippetsPageSkeleton from './_components/SnippetsPageSkeleton';
import NavigationHeader from '@/components/NavigationHeader';

import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Grid, Layers, Search, Tag, X } from 'lucide-react';
import SnippetCard from './_components/SnippetCard';
import Head from 'next/head';

function SnippetsPage() {
  const snippets = useQuery(api.snippets.getSnippets);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  if (snippets === undefined) {
    return (
      <div className="min-h-screen bg-[#0a0a0f]">
        <div className="max-w-[1800px] mx-auto p-4">
          <NavigationHeader />
        </div>
        <SnippetsPageSkeleton />
      </div>
    );
  }

  const languages = [...new Set(snippets.map((s) => s.language))];
  const popularLanguages = languages.slice(0, 5);

  const filteredSnippets = snippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.userName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLanguage =
      !selectedLanguage || snippet.language === selectedLanguage;

    return matchesSearch && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative">
      <Head>
        <title>CodeVault - Biblioteca</title>
        <meta
          name="description"
          content="Explore trechos de código compartilhados pela comunidade. Encontre soluções rápidas e eficazes em diversas linguagens de programação."
        />
        <meta
          name="keywords"
          content="códigos, snippets, programação, repositórios, comunidade, código aberto"
        />
        <meta name="author" content="CodeVault Community" />
        <meta
          property="og:title"
          content="Biblioteca de Códigos da Comunidade - CodeVault"
        />
        <meta
          property="og:description"
          content="Explore trechos de código compartilhados pela comunidade. Encontre soluções rápidas e eficazes em diversas linguagens de programação."
        />
        <meta
          property="og:url"
          content="https://www.codevault.com.br/snippets"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Biblioteca de Códigos da Comunidade - CodeVault"
        />
        <meta
          name="twitter:description"
          content="Explore trechos de código compartilhados pela comunidade. Encontre soluções rápidas e eficazes em diversas linguagens de programação."
        />
      </Head>

      {/* Background gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1e1e2e] to-[#0a0a0f] opacity-50 blur-lg z-0"></div>

      <div className="max-w-[1800px] mx-auto p-4 relative z-10">
        <NavigationHeader />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm text-gray-400 mb-6"
          >
            <BookOpen className="w-4 h-4" />
            Biblioteca de Códigos da Comunidade
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-6"
          >
            Descubra e Compartilhe Trechos de Código
          </motion.h1>
        </div>

        {/* Filtros */}
        <div className="relative max-w-5xl mx-auto mb-12 space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busque por título, linguagem ou autor..."
                className="w-full pl-12 pr-4 py-4 bg-[#1e1e2e]/80 hover:bg-[#1e1e2e] text-white
                  rounded-xl border border-[#313244] hover:border-[#414155] transition-all duration-200
                  placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-gray-800">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Linguagens:</span>
            </div>

            {popularLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() =>
                  setSelectedLanguage(lang === selectedLanguage ? null : lang)
                }
                className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  selectedLanguage === lang
                    ? 'text-blue-400 bg-blue-500/10 ring-2 ring-blue-500/50'
                    : 'text-gray-400 hover:text-gray-300 bg-[#1e1e2e] hover:bg-[#262637] ring-1 ring-gray-800'
                }`}
              >
                {lang}
              </button>
            ))}

            {selectedLanguage && (
              <button
                onClick={() => setSelectedLanguage(null)}
                className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-gray-300 transition-colors"
              >
                <X className="w-3 h-3" />
                Limpar
              </button>
            )}

            <div className="ml-auto flex items-center gap-3">
              <span className="text-sm text-gray-500">
                {filteredSnippets.length} trechos encontrados
              </span>

              <div className="flex items-center gap-1 p-1 bg-[#1e1e2e] rounded-lg ring-1 ring-gray-800">
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 rounded-md transition-all ${
                    view === 'grid'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-400 hover:text-gray-300 hover:bg-[#262637]'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-2 rounded-md transition-all ${
                    view === 'list'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-400 hover:text-gray-300 hover:bg-[#262637]'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* List or Grid View */}
        <AnimatePresence>
          {view === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredSnippets.map((snippet) => (
                <SnippetCard key={snippet._id} snippet={snippet} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {filteredSnippets.map((snippet) => (
                <SnippetCard key={snippet._id} snippet={snippet} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SnippetsPage;
