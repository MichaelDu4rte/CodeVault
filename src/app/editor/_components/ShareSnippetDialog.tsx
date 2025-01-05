import { useMutation } from "convex/react";
import { useRouter } from "next/navigation"; 
import { api } from "../../../../convex/_generated/api";
import { useCodeEditorStore } from "@/store/userCodeEditorStore";
import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

function ShareSnippetDialog({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [isSharing, setIsSharing] = useState(false);
  const { language, getCode } = useCodeEditorStore();
  const createSnippet = useMutation(api.snippets.createSnippet);
  const router = useRouter(); // Inicializa o router

  const handleShare = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (title.trim() === "") {
      toast({
        title: "Erro",
        description: "O título não pode estar vazio.",
        variant: "destructive",
        className: "bg-[#1a1b22] text-red-500 border border-red-700 rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out"
      });
      return;
    }
  
    setIsSharing(true);
  
    try {
      const code = getCode();
      const snippet = await createSnippet({ title, language, code });
  
      onClose();
      setTitle("");
  
      toast({
        title: "Sucesso",
        description: "Código compartilhado com sucesso!",
        className: "bg-[#1a1b22] text-[#9b59b6] border border-[#9b59b6] rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out"
      });
  
      setTimeout(() => {
        router.push(`/snippets/${snippet}`);
      }, 300);
    } catch (error) {
      console.error("Erro ao compartilhar código:", error);
  
      toast({
        title: "Erro",
        description: "Erro ao compartilhar código. Tente novamente mais tarde.",
        variant: "destructive",
        className: "bg-[#1a1b22] text-red-500 border border-red-700 rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out"
      });
    } finally {
      setIsSharing(false);
    }
  };
  
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative bg-gradient-to-br from-[#191921] via-[#1e1e2e] to-[#252536] rounded-2xl p-6 w-full max-w-md shadow-lg shadow-black/50 border border-[#313244]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-300"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          💎 Compartilhe seu código 💎
        </h2>

        <form onSubmit={handleShare}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Título do seu codigo
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-[#181825] border border-[#313244] text-white rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8e82f3] focus:border-transparent"
              placeholder="Exemplo: Função de Ordenação"
              required
            />
          </div>

          <div className="flex justify-between items-center gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-transparent border border-gray-500 text-gray-400 rounded-lg hover:border-gray-300 hover:text-gray-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSharing}
              className="px-4 py-2 bg-[#8e82f3] text-white rounded-lg hover:bg-[#7a6ee0] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSharing ? "Publicando..." : "Publicar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShareSnippetDialog;
