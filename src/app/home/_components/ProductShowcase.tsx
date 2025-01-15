import Image from 'next/image';
import React, { useRef } from 'react';
import editorScreen from '/public/editorScreen.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { CodeIcon } from 'lucide-react';

export default function ProductShowcase() {
  const editorImage = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: editorImage,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

  return (
    <section className="py-16 sm:py-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-6xl sm:text-5xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 text-transparent bg-clip-text">
          Editor de Código
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 bg-gradient-to-r from-purple-400 rounded"></div>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-base sm:text-sm text-center text-white/70 mt-5">
            Descubra o poder do{' '}
            <span className="text-white font-semibold">CodeVault</span>!
            Experimente a liberdade de programar com um editor online que
            conecta desenvolvedores ao redor do mundo.
          </p>
        </div>
        <motion.div
          className="relative mt-14 rounded-lg p-8 shadow-xl"
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: '800px',
          }}
        >
          <Image
            src={editorScreen}
            alt="Editor Code"
            className="rounded-lg"
            ref={editorImage}
          />
        </motion.div>
        <div className="text-center mt-10">
          <Link
            href="/editor"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-4 sm:py-2 rounded-2xl border border-purple-900 bg-purple-950 text-white shadow-lg hover:bg-purple-800 hover:border-purple-700 hover:shadow-purple-700/50 transition-all duration-300 transform"
          >
            <CodeIcon className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-semibold sm:text-xs">
              Experimente Agora!
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
