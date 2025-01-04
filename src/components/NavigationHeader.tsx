import HeaderProfileBtn from "@/app/editor/_components/HeaderProfileBtn";
import Link from "next/link";

function NavigationHeader() {
  return (
    <header className="relative z-10 bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg shadow-xl border-b border-gray-800">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Link href="/snippets" className="flex items-center gap-3 group">
            <div className="relative bg-gradient-to-br from-gray-800 to-black p-3 rounded-full ring-2 ring-purple-600/40 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-600 via-gray-800 to-black transform rotate-45"></div>
            </div>
            <div>
              <h1 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-gray-300 to-blue-400 text-transparent bg-clip-text">
                CodeVault
              </h1>
              <p className="text-xs text-gray-500">Editor de Código</p>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">
            Início
          </Link>
          <Link href="/snippets" className="text-gray-300 hover:text-purple-400 transition-colors">
            Galeria de Códigos
          </Link>
          <Link href="/editor" className="text-gray-300 hover:text-purple-400 transition-colors">
            Editor de Código
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-purple-400 transition-colors">
            Preço
          </Link>
         
        </div>

        {/* User Controls */}
        <div className="flex items-center gap-4">
          <HeaderProfileBtn />
        </div>
      </div>
    </header>
  );
}

export default NavigationHeader;
