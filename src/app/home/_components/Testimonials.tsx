import { motion } from 'framer-motion';
import { UserCircleIcon } from 'lucide-react';

const testimonials = [
  {
    text: '"O CodeVault elevou meu desenvolvimento a outro nível. Simples, mas poderoso!"',
    name: 'Carlos Oliveira',
    title: 'Desenvolvedor Sênior',
  },
  {
    text: '"Uma plataforma completa e intuitiva. Incrível para melhorar meus projetos."',
    name: 'Amanda Souza',
    title: 'Engenheira de Software',
  },
  {
    text: '"CodeVault transformou minha produtividade. Ferramenta essencial para desenvolvedores."',
    name: 'Gabriel Santos',
    title: 'Full-stack Developer',
  },
  {
    text: '"Revolucionou a forma como trabalho. Não vivo mais sem!"',
    name: 'Fernanda Costa',
    title: 'Tech Lead',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-center font-medium">
          <span className="text-purple-400">Histórias que inspiram</span>
          <br />o seu próximo código.
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          Mais que uma ferramenta, o CodeVault é um impulsionador de carreira.
        </p>
        <div className="overflow-hidden mt-8 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: '-50%' }}
            animate={{ translateX: '0' }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 30,
            }}
            className="flex gap-5 flex-none pr-5"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="border border-white/10 p-4 md:pt-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgba(140,69,255,0.2),black)] max-w-xs md:max-w-md flex-none shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <div className="text-sm md:text-base tracking-tight text-white/90 break-words max-w-xs">
                  {testimonial.text}
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <div className="relative rounded-full overflow-hidden p-1.5">
                    <div className="absolute inset-0 bg-[rgb(140,60,244)] opacity-20 rounded-full"></div>
                    <div className="absolute inset-0 border border-white/30 rounded-full"></div>
                    <UserCircleIcon className="h-8 w-8 text-purple-400 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out transform hover:scale-105" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-white/50 text-xs">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
