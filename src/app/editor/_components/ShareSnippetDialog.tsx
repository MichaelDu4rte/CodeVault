import { useCodeEditorStore } from "@/store/userCodeEditorStore";
import { useMutation } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { X } from "lucide-react";
import toast from "react-hot-toast";

function ShareSnippetDialog({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [isSharing, setIsSharing] = useState(false);
  const { language, getCode } = useCodeEditorStore();
  const createSnippet = useMutation(api.snippets.createSnippet);

  const handleShare = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim() === "") {
      toast.error("O título não pode estar vazio");
      return;
    }

    setIsSharing(true);

    try {
      const code = getCode();
      await createSnippet({ title, language, code });
      onClose();
      setTitle("");
      toast.success("Snippet compartilhado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar snippet:", error);
      toast.error("Erro ao criar snippet");
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative bg-gradient-to-br from-[#191921] via-[#1e1e2e] to-[#252536] rounded-2xl p-6 w-full max-w-md shadow-lg shadow-black/50 border border-[#313244]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-300"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          💎 Compartilhe seu código 💎
        </h2>

        <form onSubmit={handleShare}>
          {/* Input Field */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Título do Snippet
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

          {/* Buttons */}
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
