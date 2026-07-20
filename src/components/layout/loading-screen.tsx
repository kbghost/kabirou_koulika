"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 22;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-void"
        >
          <div className="w-72 font-mono text-sm text-cyan">
            <p className="mb-3">
              <span className="text-ink-muted">$</span> booting_portfolio --secure
            </p>
            <div className="h-1 w-full overflow-hidden rounded-full bg-surface-border">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan to-violet"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className="mt-3 text-ink-faint">{Math.min(Math.round(progress), 100)}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
