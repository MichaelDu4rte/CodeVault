const footerLinks = [
  { href: 'b', label: 'Contato' },
  { href: 'd', label: 'Política de Privacidade' },
  { href: 'a', label: 'Termos & Condições' },
];

export default function Footer() {
  return (
    <section className="py-16">
      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
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
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
