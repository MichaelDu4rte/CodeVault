'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end end'],
  });

  const text = `O back-end do futuro está aqui. Um espaço sem limitações, onde você pode escrever, compartilhar e aprender com códigos de outros desenvolvedores.`;
  const words = text.split('');
  const [currentWord, setCurrentWord] = useState(0);
  const wordsIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordsIndex.on('change', (latest) => {
      setCurrentWord(latest);
    });
  }, [wordsIndex]);

  return (
    <section className="py-28 lg:py-40">
      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10">
        <div className="sticky top-20 md:top-28">
          <div className="text-center">
            {' '}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex justify-center items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm text-gray-400 mb-6 mx-auto"
            >
              <FaCode />
              Plataforma de Códigos da Comunidade
            </motion.div>
          </div>

          <div className="text-4xl md:text-6xl text-center font-medium mt-10 max-w-6xl mx-auto">
            <span>Dominando o back-end, um código de cada vez.</span>{' '}
            <span>
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    'transition duration-500 text-white/15',
                    wordIndex < currentWord && 'text-white',
                  )}
                >
                  {`${word}`}
                </span>
              ))}
            </span>
            <span className="text-purple-400 block mt-6">
              Compartilhe, aprenda e cresça com os melhores.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
