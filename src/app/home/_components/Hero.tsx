'use client';
import React, { useEffect } from 'react';
import Pointer from './Pointer';
import { FaPen } from 'react-icons/fa';

import Link from 'next/link';
import { motion, useAnimate } from 'framer-motion';

function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    // Animações do lado esquerdo
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5, delay: 0.2 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { y: 0, x: -100 },
        { duration: 0.5, delay: 0.4 },
      ],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: 'easeInOut' },
      ],
    ]);

    // Animações do lado direito
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5, delay: 0.2 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [
        rightPointerScope.current,
        { x: 175, y: 0 },
        { duration: 0.5, delay: 0.4 },
      ],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
    ]);
  });

  return (
    <section className="md:py-24 sm:py-12 overflow-x-clip text-white">
      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10">
        {/* Caixa de código 1 - com borda */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className="absolute -left-48 top-16 w-[350px] h-[400px] bg-[#1e1e1e] p-4 rounded-lg shadow-lg border border-[#444444]  overflow-x-auto transform hover:scale-105 -z-10 transition-all duration-300 ease-in-out hidden lg:block"
        >
          <pre className="text-sm font-mono leading-6 whitespace-pre-wrap break-words text-[#d4d4d4]">
            <span className="text-[#569CD6]">const</span>{' '}
            <span className="text-[#9CDCFE]">hello</span> ={' '}
            <span className="text-[#CE9178]">{'"Olá, Mundo!"'}</span>;
            <br />
            <span className="text-[#569CD6]">function</span>{' '}
            <span className="text-[#DCDCAA]">greet</span>() {'{'}
            <br />
            <span className="text-[#D4D4D4]">console</span>.
            <span className="text-[#9CDCFE]">log</span>(
            <span className="text-[#9CDCFE]">hello</span>);
            <br />
            {'}'}
            <br />
            <span className="text-[#D4D4D4]">greet</span>();
          </pre>
        </motion.div>

        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Ana" color="purple" />
        </motion.div>

        {/* Caixa de código 2 - com borda */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          className="absolute -right-64 -top-16 w-[440px] h-[592px] bg-[#1e1e1e] p-4 rounded-lg shadow-lg border-2 border-[#444444] -z-10 transform hover:scale-105 transition-all duration-300 ease-in-out hidden lg:block"
        >
          <pre className="text-sm font-mono text-[#d4d4d4] whitespace-pre-wrap break-words">
            <span className="text-[#569CD6]">const</span>{' '}
            <span className="text-[#9CDCFE]">calculateSum</span> = (
            <span className="text-[#9CDCFE]">a</span>,{' '}
            <span className="text-[#9CDCFE]">b</span>) =&gt;{' '}
            <span className="text-[#9CDCFE]">a</span> +{' '}
            <span className="text-[#9CDCFE]">b</span>;
            {/* Comentário: Função simples que soma dois números */}
            <br />
            <span className="text-[#569CD6]">const</span>{' '}
            <span className="text-[#9CDCFE]">result</span> ={' '}
            <span className="text-[#9CDCFE]">calculateSum</span>(
            <span className="text-[#DCDCAA]">5</span>,{' '}
            <span className="text-[#DCDCAA]">10</span>);
            <br />
            <span className="text-[#D4D4D4]">console</span>.
            <span className="text-[#9CDCFE]">log</span>(
            <span className="text-[#9CDCFE]">result</span>);
          </pre>
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Pedro" color="blue" />
        </motion.div>

        <div className="relative  mx-auto text-center flex flex-col items-center justify-center">
          <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-10" />
          <h1 className="relative text-6xl md:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-8">
            Compartilhe Seu Código, Conquiste o Mundo
          </h1>
        </div>

        <p className="text-xl text-white/50 mt-8 max-w-3xl mx-auto text-center">
          Leve suas ideias para o próximo nível com nosso editor de código.
          Crie, experimente e compartilhe suas soluções com uma comunidade de
          desenvolvedores apaixonados.
        </p>

        <div className="flex justify-center mt-6">
          <Link
            href="/editor"
            className="py-3 px-8 bg-gradient-to-r from-[#3e1a5d] to-[#6a0dad] border-2 border-transparent rounded-full text-white font-semibold text-lg hover:bg-gradient-to-r hover:from-[#5a1b8b] hover:to-[#8a2be2] hover:border-[#9b30ff] focus:outline-none focus:ring-2 focus:ring-[#9932cc] transition-all flex items-center justify-center gap-2"
          >
            <FaPen /> Comece a criar agora
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
