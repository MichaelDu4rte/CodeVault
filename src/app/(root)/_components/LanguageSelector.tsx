"use client";
import { useCodeEditorStore } from "@/store/userCodeEditorStore";
import { useEffect, useRef, useState } from "react";
import { LANGUAGE_CONFIG } from "../_constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon, Lock, Sparkles } from "lucide-react";
import useMounted from "@/hooks/useMounted";

function LanguageSelector({ hasAccess }: { hasAccess: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();
  const { language, setLanguage } = useCodeEditorStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLanguageObj = LANGUAGE_CONFIG[language];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (langId: string) => {
    if (!hasAccess && langId !== "javascript") return;
    setLanguage(langId);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-3 px-2 py-2 bg-[#1d1e23] rounded-lg border border-gray-700/50
          ${!hasAccess && language !== "javascript" ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <Image
          src={currentLanguageObj.logoPath}
          alt="programming language logo"
          width={20}
          height={20}
          className="w-6 h-6 object-contain"
        />
        <ChevronDownIcon className={`w-4 h-4 text-gray-500 transition-all ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-[#1d1e23]/95 backdrop-blur-md rounded-xl border-[#2a2b38] shadow-lg py-2 z-50"
          >
            
            <div className="max-h-[280px] overflow-y-auto">
              {Object.values(LANGUAGE_CONFIG).map((lang, index) => {
                const isLocked = !hasAccess && lang.id !== "javascript";
                return (
                  <motion.div
                    key={lang.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group px-2"
                  >
                    <button
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg 
                        ${language === lang.id ? "bg-purple-600/20 text-purple-500" : "text-gray-300"}
                        ${isLocked ? "opacity-50" : "hover:bg-[#262637]"}`}
                      onClick={() => handleLanguageSelect(lang.id)}
                      disabled={isLocked}
                    >
                      <Image
                        width={24}
                        height={24}
                        src={lang.logoPath}
                        alt={`${lang.label} logo`}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="flex-1 text-left">{lang.label}</span>
                      {isLocked ? (
                        <Lock className="w-4 h-4 text-gray-500" />
                      ) : (
                        language === lang.id && <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default LanguageSelector;
