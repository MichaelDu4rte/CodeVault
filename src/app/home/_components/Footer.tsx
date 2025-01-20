import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const footerLinks = [
  { href: '#politica', label: 'Política de Privacidade' },
  { href: 'https://www.linkedin.com/in/michaeldu4rte/', label: 'Contato' },
];

export default function Footer() {
  const [isPrivacyDialogOpen, setIsPrivacyDialogOpen] = useState(false);

  const openPrivacyDialog = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsPrivacyDialogOpen(true);
  };

  const closePrivacyDialog = () => setIsPrivacyDialogOpen(false);

  return (
    <section className="py-16">
      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-6">
          <div className="flex items-center gap-3">
            <div className="relative bg-gradient-to-br from-gray-800 to-black p-3 rounded-full ring-2 ring-purple-600/40 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-600 via-gray-800 to-black transform rotate-45"></div>
            </div>
            <div>
              <h1 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-gray-300 to-blue-400 text-transparent bg-clip-text">
                CodeVault
              </h1>
              <p className="text-xs text-gray-500">Editor de Código</p>
            </div>
          </div>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                className="text-white/50 text-sm hover:text-white transition-colors"
                onClick={
                  link.label === 'Política de Privacidade'
                    ? openPrivacyDialog
                    : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isPrivacyDialogOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-purple-950 p-4 sm:p-6 rounded-lg border border-purple-600 shadow-xl w-full sm:w-auto lg:max-w-7xl max-w-sm sm:max-w-md mx-4 sm:mx-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-300">
                Política de Privacidade
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                Última atualização: 01/2025
              </p>

              <h3 className="text-sm sm:text-lg font-semibold mt-4">
                1. Informações Coletadas
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                Coletamos as seguintes informações para proporcionar uma
                experiência personalizada e segura ao usar nossos serviços:
              </p>
              <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm text-gray-300">
                <li>
                  <strong>Dados de Conta:</strong> Nome, e-mail e imagem de
                  perfil são coletados durante o registro e autenticação.
                </li>
                <li>
                  <strong>Informações de Pagamento:</strong> Dados de pagamento
                  como cartões de crédito são processados por nossos parceiros
                  de pagamento e não ficam armazenados em nossos servidores.
                </li>
                <li>
                  <strong>Conteúdo Criado pelo Usuário:</strong> Os códigos que
                  você cria e publica, bem como interações como comentários e
                  marcações, são armazenados.
                </li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold mt-4">
                2. Uso das Informações
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm text-gray-300">
                <li>
                  <strong>Gerenciar sua Conta:</strong> Para permitir o acesso à
                  plataforma e personalizar sua experiência.
                </li>
                <li>
                  <strong>Processar Pagamentos:</strong> Para garantir a
                  conclusão das transações realizadas no site.
                </li>
                <li>
                  <strong>Exibir Conteúdo:</strong> Para permitir que você
                  publique, visualize e interaja com códigos e outros conteúdos
                  na plataforma.
                </li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold mt-4">
                3. Proteção de Dados
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                Empregamos medidas de segurança para proteger suas informações
                pessoais, como criptografia e práticas seguras de armazenamento.
                Contudo, nenhum método de transmissão de dados ou armazenamento
                eletrônico é 100% seguro, e não podemos garantir segurança
                absoluta.
              </p>

              <button
                className="mt-4 sm:mt-6 px-4 py-2 rounded-xl bg-purple-700 text-white  hover:bg-purple-600 transition-colors"
                onClick={closePrivacyDialog}
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
