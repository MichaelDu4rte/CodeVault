"use client";
import { useCodeEditorStore } from "@/store/userCodeEditorStore";
import { useEffect, useState } from "react";
import { defineMonacoThemes, LANGUAGE_CONFIG } from "../_constants";
import { Editor } from "@monaco-editor/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShareIcon, TypeIcon, DownloadCloudIcon } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import useMounted from "@/hooks/useMounted";
import { EditorPanelSkeleton } from "./EditorPanelSkeleton";
import ShareSnippetDialog from "./ShareSnippetDialog";

function EditorPanel() {
  const clerk = useClerk();
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const { language, theme, fontSize, editor, setFontSize, setEditor } = useCodeEditorStore();
  const mounted = useMounted();

  useEffect(() => {
    const savedCode = localStorage.getItem(`editor-code-${language}`);
    const newCode = savedCode || LANGUAGE_CONFIG[language].defaultCode;
    if (editor) editor.setValue(newCode);
  }, [language, editor]);

  useEffect(() => {
    const savedFontSize = localStorage.getItem("editor-font-size");
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
  }, [setFontSize]);

  const handleEditorChange = (value: string | undefined) => {
    if (value) localStorage.setItem(`editor-code-${language}`, value);
  };

  const handleFontSizeChange = (newSize: number) => {
    const size = Math.min(Math.max(newSize, 12), 24);
    setFontSize(size);
    localStorage.setItem("editor-font-size", size.toString());
  };

  const LANGUAGE_EXTENSIONS: Record<string, string> = {
    javascript: "js",
    typescript: "ts",
    python: "py",
    java: "java",
    go: "go",
    rust: "rs",
    cpp: "cpp",
    csharp: "cs",
    ruby: "rb",
    swift: "swift",
  };

  
function getExtension(languageId: string): string {
  return LANGUAGE_EXTENSIONS[languageId] || "txt"; // Retorna "txt" como padrão se o idioma não estiver no mapeamento
}

  const handleDownloadCode = () => {
    if (!editor) return;

    const code = editor.getValue(); // Obtém o código atual do editor
    const extensionId = LANGUAGE_CONFIG[language].id;
    const extension = getExtension(extensionId); 
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Cria um link para o download
    const link = document.createElement("a");
    link.href = url;
    link.download = `code.${extension}`; // Define o nome do arquivo
    link.click();

    // Libera o recurso do URL
    URL.revokeObjectURL(url);
  };

  if (!mounted) return null;

  return (
    <div className="relative bg-[#1f1f1f] p-4 rounded-2xl">
      <div className="bg-[#121212] p-4 rounded-xl border border-[#333]">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-md ">
              <Image src={`/${language}.png`} alt="Logo" width={28} height={28} />
            </div>
            <div>
              <h2 className="text-lg font-medium text-white">Editor de Código</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Font Size Slider */}
            <div className="flex items-center gap-3 bg-[#333] px-4 py-2 rounded-md">
              <TypeIcon className="size-4 text-gray-400" />
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
                  className="w-20 h-1 bg-gray-600 rounded-lg cursor-pointer"
                />
                <span className="text-sm text-gray-300">{fontSize}</span>
              </div>
            </div>

            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCode}
              className="inline-flex items-center gap-3 px-3 py-2 rounded-md bg-gradient-to-r from-green-500 to-green-600 text-white font-medium"
            >
              <DownloadCloudIcon className="size-5 text-white" />
              
            </motion.button>

            {/* Share Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsShareDialogOpen(true)}
              className="inline-flex items-center gap-3 px-3 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium"
            >
              <ShareIcon className="size-5 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Editor */}
        <div className="relative group rounded-lg overflow-hidden ring-1 ring-[#333]">
          {clerk.loaded ? (
            <Editor
              height="450px"
              language={LANGUAGE_CONFIG[language].monacoLanguage}
              onChange={handleEditorChange}
              theme={theme}
              beforeMount={defineMonacoThemes}
              onMount={(editor) => setEditor(editor)}
              options={{
                minimap: { enabled: false },
                fontSize,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                padding: { top: 16, bottom: 16 },
                renderWhitespace: "selection",
                fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
                fontLigatures: true,
                cursorBlinking: "smooth",
                smoothScrolling: true,
                contextmenu: true,
                renderLineHighlight: "all",
                lineHeight: 1.6,
                letterSpacing: 0.5,
                roundedSelection: true,
                scrollbar: {
                  verticalScrollbarSize: 8,
                  horizontalScrollbarSize: 8,
                },
              }}
            />
          ) : (
            <EditorPanelSkeleton />
          )}
        </div>
      </div>

      {isShareDialogOpen && <ShareSnippetDialog onClose={() => setIsShareDialogOpen(false)} />}
    </div>
  );
}

export default EditorPanel;
