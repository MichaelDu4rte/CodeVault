"use client";

import { useCodeEditorStore } from "@/store/userCodeEditorStore";
import { AlertTriangle, CheckCircle, Clock, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import RunningCodeSkeleton from "./RunningCodeSkeleton";

function OutputPanel() {
  const { output, error, isRunning } = useCodeEditorStore();
  const [isCopied, setIsCopied] = useState(false);

  const hasContent = error || output;

  const handleCopy = async () => {
    if (!hasContent) return;
    await navigator.clipboard.writeText(error || output);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#1f1f1f] p-4 rounded-2xl">
      <div className="bg-[#121212] p-4 rounded-xl border border-[#333]">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#333]">
              <Terminal className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-lg font-medium text-white">Output</h2>
          </div>

          {hasContent && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#333] text-gray-300 hover:bg-gray-700 transition-all"
            >
              {isCopied ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar
                </>
              )}
            </button>
          )}
        </div>

        {/* Output Area */}
        <div
          className="relative group rounded-lg overflow-hidden ring-1 ring-[#333] bg-[#1E1E1E]/50 backdrop-blur-sm h-[450px]"
        >
          {isRunning ? (
            <RunningCodeSkeleton />
          ) : error ? (
            <div className="p-4 flex items-start gap-3 text-red-400">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-1" />
              <div>
                <div className="font-medium">Erro de Execução</div>
                <pre className="whitespace-pre-wrap text-red-400/80">{error}</pre>
              </div>
            </div>
          ) : output ? (
            <div className="p-4 text-gray-300 font-mono text-sm">
              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Execução Bem-Sucedida</span>
              </div>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800/50 ring-1 ring-gray-700/50 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-center">Execute seu código para ver o resultado aqui...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OutputPanel;
