"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Terminal } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { siteConfig } from "@/lib/site-config";

const navKeys = [
  ["home", "#home"],
  ["about", "#about"],
  ["skills", "#skills"],
  ["services", "#services"],
  ["projects", "#projects"],
  ["contact", "#contact"],
] as const;

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-surface-border py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-violet text-void-soft">
                <Terminal size={16} />
              </span>
              {siteConfig.name}
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-muted">{t.footer.built}</p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-cyan">
              {t.footer.quickLinks}
            </p>
            <ul className="grid grid-cols-2 gap-2.5">
              {navKeys.map(([key, href]) => (
                <li key={key}>
                  <a href={href} className="text-sm text-ink-muted hover:text-cyan">
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-cyan">Social</p>
            <div className="flex gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-ink-muted transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <Github size={17} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-ink-muted transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-ink-muted transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-8 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © {year} {siteConfig.name}. {t.footer.rights}
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 rounded-full border border-surface-border px-4 py-2 font-mono text-xs text-ink-muted transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            {t.footer.backToTop}
            <ArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
