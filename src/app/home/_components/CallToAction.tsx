'use client';
import Link from 'next/link';
import starsBg from '/public/stars.png';
import grid from '/public/grid-lines.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaRocket } from 'react-icons/fa';

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="border border-white/15 py-12 rounded-xl overflow-hidden relative group"
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: 'linear',
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-purple-950 bg-blend-overlay"
            style={{
              maskImage:
                'radial-gradient(50% 50% at 50% 35%, black, transparent)',
              WebkitMaskImage:
                'radial-gradient(50% 50% at 50% 35%, black, transparent)',
              backgroundImage: `url(${grid.src})`,
            }}
          ></div>
          <div
            className="absolute inset-0 bg-purple-950 bg-blend-overlay"
            style={{
              maskImage:
                'radial-gradient(50% 50% at 0px 0px, black, transparent)',
              WebkitMaskImage:
                'radial-gradient(50% 50% at 0px 0px, black, transparent)',
              backgroundImage: `url(${grid.src})`,
            }}
          ></div>
          <div className="relative text-center">
            <h2 className="text-5xl md:text-6xl mx-auto tracking-tighter font-medium relative z-20">
              Seu próximo projeto, <br />
              elevado ao nível máximo.
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight relative z-20">
              Crie e compartilhe suas ideias.
            </p>

            <div className="flex justify-center mt-5 relative z-20">
              <Link
                href="/editor"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-purple-900 bg-purple-950 text-white shadow-lg hover:bg-purple-800 hover:border-purple-700 hover:shadow-purple-700/50 transition-all duration-300 transform"
              >
                <FaRocket className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-semibold">
                  Experimentar agora
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
