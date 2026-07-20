"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, TerminalSquare } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="pointer-events-none absolute inset-0 grid-bg bg-glow-gradient opacity-70" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
          <TerminalSquare size={28} />
        </div>
        <p className="font-mono text-sm text-cyan">$ curl {"{page}"} → 404</p>
        <h1 className="mt-4 font-display text-7xl font-bold text-gradient">{t.notFound.title}</h1>
        <h2 className="mt-2 font-display text-xl font-semibold text-ink">{t.notFound.subtitle}</h2>
        <p className="mt-3 max-w-sm text-sm text-ink-muted">{t.notFound.text}</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-6 py-3 text-sm font-medium text-void-soft shadow-glow-violet"
        >
          <Home size={16} />
          {t.notFound.cta}
        </Link>
      </motion.div>
    </div>
  );
}
