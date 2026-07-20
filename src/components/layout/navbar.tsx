"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Languages, Terminal } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const navKeys = [
  ["home", "#home"],
  ["about", "#about"],
  ["skills", "#skills"],
  ["services", "#services"],
  ["projects", "#projects"],
  ["certifications", "#certifications"],
  ["education", "#education"],
  ["contact", "#contact"],
] as const;

export function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300",
            scrolled && "glass shadow-glass"
          )}
        >
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-violet text-void-soft">
              <Terminal size={16} />
            </span>
            <span className="text-sm sm:text-lg">{siteConfig.name}</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navKeys.map(([key, href]) => (
              <a
                key={key}
                href={href}
                className="rounded-full px-3 py-2 font-mono text-xs text-ink-muted transition-colors hover:bg-surface-raised hover:text-cyan"
              >
                {t.nav[key]}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={toggleLocale}
              aria-label="Changer de langue"
              className="flex items-center gap-1.5 rounded-full border border-surface-border px-3 py-2 font-mono text-xs text-ink-muted transition-colors hover:text-cyan"
            >
              <Languages size={14} />
              {locale.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Changer de thème"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-ink-muted transition-colors hover:text-cyan"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <Button size="md" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              {t.nav.cta}
            </Button>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl lg:hidden"
          >
            <div className="glass flex flex-col gap-1 p-4">
              {navKeys.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2.5 font-mono text-sm text-ink-muted hover:bg-surface-raised hover:text-cyan"
                >
                  {t.nav[key]}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2 border-t border-surface-border pt-3">
                <button
                  onClick={toggleLocale}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-surface-border px-3 py-2 font-mono text-xs text-ink-muted"
                >
                  <Languages size={14} /> {locale.toUpperCase()}
                </button>
                <button
                  onClick={toggleTheme}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-ink-muted"
                >
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
