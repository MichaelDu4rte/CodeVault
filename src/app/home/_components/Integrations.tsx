import Link from 'next/link';
import IntegrationsColumn from './IntegrationsColumn';
import { FaGlobe } from 'react-icons/fa';

const integrations = [
  {
    name: 'Javascript',
    icon: '/javascript.png',
    description:
      'Transforme suas ideias em código. Compartilhe e evolua com a comunidade!',
  },
  {
    name: 'Java',
    icon: '/java.png',
    description:
      'Contribua com projetos robustos e ajude outros a crescerem no desenvolvimento.',
  },
  {
    name: 'Typescript',
    icon: '/typescript.png',
    description:
      'Junte-se a outros desenvolvedores e crie soluções de código claras e seguras.',
  },
  {
    name: 'Csharp',
    icon: '/csharp.png',
    description:
      'Colabore com desenvolvedores experientes e troque conhecimento em cada linha de código.',
  },
  {
    name: 'Go',
    icon: '/go.png',
    description:
      'Acelere seu aprendizado com a comunidade que compartilha códigos rápidos e eficientes.',
  },
  {
    name: 'Python',
    icon: '/python.png',
    description:
      'Participe de uma rede global que cria e compartilha soluções inteligentes para problemas reais.',
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="md:py-24 sm:py-12 px-3 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-medium mt-6">
              Junte-se à comunidade{' '}
              <span className="text-purple-400">CodeVault</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Compartilhe códigos, colabore e cresça com outros desenvolvedores
              ao redor do mundo. O CodeVault é um espaço onde o aprendizado e a
              inovação andam lado a lado.
            </p>
            <Link
              href="/snippets"
              className="inline-flex items-center py-2 px-4 bg-gradient-to-r from-[#3e1a5d] to-[#6a0dad] border-2 border-transparent rounded-full text-white font-semibold text-lg hover:bg-gradient-to-r hover:from-[#5a1b8b] hover:to-[#8a2be2] hover:border-[#9b30ff] focus:outline-none focus:ring-2 focus:ring-[#9932cc] transition-all mt-6"
            >
              <FaGlobe className="mr-2" /> Explorar Comunidade
            </Link>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] overflow-hidden mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom, transparent, black_10%,black_90%, transparent)]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
