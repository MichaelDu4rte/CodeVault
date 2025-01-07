'use client';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Importando o framer-motion
import HeaderProfileBtn from '@/app/editor/_components/HeaderProfileBtn';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs'; // Importando o hook useUser para verificar a autenticação
import { CodeIcon } from 'lucide-react';

function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser(); // Verificando o usuário autenticado

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-10 bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg shadow-xl border-b border-gray-800">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Link href="/snippets" className="flex items-center gap-3 group">
            <div className="relative bg-gradient-to-br from-gray-800 to-black p-3 rounded-full ring-2 ring-purple-600/40 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-600 via-gray-800 to-black transform rotate-45"></div>
            </div>

            <div className="hidden sm:block">
              {' '}
              {/* Texto oculto em telas pequenas */}
              <h1 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-gray-300 to-blue-400 text-transparent bg-clip-text">
                CodeVault
              </h1>
              <p className="text-xs text-gray-500">Editor de Código</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/home"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Início
          </Link>
          <Link
            href="/snippets"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Galeria de Códigos
          </Link>
          <Link
            href="/home#pricing"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Planos
          </Link>
        </div>

        {/* User Controls */}
        <div className="flex items-center gap-4 ">
          {user && (
            <Link
              href="/editor"
              className="lg:flex hidden items-center gap-3 px-5 py-3 rounded-2xl border border-purple-900 bg-purple-950 text-white shadow-lg hover:bg-purple-800 hover:border-purple-700 hover:shadow-purple-700/50 transition-all duration-300 transform "
            >
              {/* Ícone de código */}
              <CodeIcon className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold">Editor de Código</span>
            </Link>
          )}

          <HeaderProfileBtn />

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-purple-400 transition-colors"
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden mt-10 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/home"
            className="block text-gray-300 hover:text-purple-400 transition-colors"
          >
            Início
          </Link>
          <Link
            href="/snippets"
            className="block text-gray-300 hover:text-purple-400 transition-colors"
          >
            Galeria de Códigos
          </Link>
          {user && (
            <Link
              href="/editor"
              className="block text-gray-300 hover:text-purple-400 transition-colors"
            >
              Editor de Codigo
            </Link>
          )}

          <Link
            href="/home#pricing"
            className="block text-gray-300 hover:text-purple-400 transition-colors"
          >
            Planos
          </Link>
        </motion.div>
      )}
    </header>
  );
}

export default NavigationHeader;
