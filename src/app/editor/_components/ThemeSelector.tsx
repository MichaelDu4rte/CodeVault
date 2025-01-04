"use client";

import { useCodeEditorStore } from "@/store/userCodeEditorStore";
import React, { useEffect, useRef, useState } from "react";
import { THEMES } from "../_constants";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, Github, Laptop, Cloud, Palette } from "lucide-react";
import useMounted from "@/hooks/useMounted";

const THEME_ICONS: Record<string, React.ReactNode> = {
  "vs-dark": <Moon className="size-4" />,
  "vs-light": <Sun className="size-4" />,
  "github-dark": <Github className="size-4" />,
  monokai: <Laptop className="size-4" />,
  "solarized-dark": <Cloud className="size-4" />,
};

function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();
  const { theme, setTheme } = useCodeEditorStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 bg-[#121212]/80 hover:bg-[#2c2c2c] rounded-full border border-transparent hover:border-gray-600 transition-all"
      >
        {/* Apenas o ícone do tema selecionado */}
        {THEME_ICONS[theme] || <Palette className="size-4" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-auto bg-[#121212] rounded-md border border-[#313244] shadow-lg py-2"
          >
            {THEMES.map((t, index) => (
              <motion.button
                key={t.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-gray-300 hover:bg-[#2c2c2c] transition-all
                ${theme === t.id ? "bg-purple-500/10 text-purple-400" : ""}`}
                onClick={() => setTheme(t.id)}
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-lg">
                  {THEME_ICONS[t.id] || <span className="text-gray-400">-</span>}
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThemeSelector;
