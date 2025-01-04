import NavigationHeader from "@/components/NavigationHeader";
import { ArrowRight, Command, Star } from "lucide-react";
import Link from "next/link";

function ProPlanView() {
  return (
    <div className=" selection:bg-blue-500/20 selection:text-blue-200">

      <div className="max-w-[1800px] mx-auto p-4 relative z-10">
        <NavigationHeader />
      </div>

      <div className="relative px-4 h-[80vh] flex items-center justify-center">
        <div className="relative max-w-xl mx-auto text-center">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40 blur-xl opacity-20" />

          <div className="relative bg-[#12121a]/90 border border-gray-700 backdrop-blur-xl rounded-2xl p-10 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.1] to-purple-500/[0.1] rounded-2xl" />

            <div className="relative">
              <div className="inline-flex p-4 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-6 ring-2 ring-gray-700">
                <Star className="w-10 h-10 text-purple-400" />
              </div>

              <h1 className="text-4xl font-bold text-white mb-4">Plano Pro Ativo</h1>
              <p className="text-gray-300 mb-6 text-lg">
                Descubra todo o potencial de desenvolvimento profissional.
              </p>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white rounded-2xl transition-all duration-200 border border-gray-700 hover:border-blue-500/70 group shadow-md"
              >
                <Command className="w-6 h-6 text-blue-400" />
                <span>Abrir Editor</span>
                <ArrowRight className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default ProPlanView;
