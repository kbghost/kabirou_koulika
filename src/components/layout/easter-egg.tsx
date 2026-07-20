"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TerminalSquare } from "lucide-react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

// Easter egg discret : tape le Konami code pour débloquer un petit message.
// N'affecte en rien l'UX normale du site — silencieux jusqu'à activation.
export function EasterEgg() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let progress: string[] = [];

    const onKeyDown = (e: KeyboardEvent) => {
      progress = [...progress, e.key].slice(-KONAMI.length);
      if (progress.length === KONAMI.length && progress.every((k, i) => k === KONAMI[i])) {
        setUnlocked(true);
        setTimeout(() => setUnlocked(false), 4000);
        progress = [];
      }
    };

    window.addEventListener("keydown", onKeyDown);

    // Petit clin d'œil aux développeurs curieux qui ouvrent la console.
    console.log(
      "%c$ access granted_",
      "color:#4CDFE8; font-family: monospace; font-size: 14px;"
    );

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 right-6 z-50 flex items-center gap-3 rounded-2xl border border-cyan/30 bg-void/95 px-5 py-3.5 font-mono text-xs text-cyan shadow-glow-cyan backdrop-blur"
        >
          <TerminalSquare size={16} />
          access_granted :: root privileges (just kidding — bien joué 👋)
        </motion.div>
      )}
    </AnimatePresence>
  );
}
