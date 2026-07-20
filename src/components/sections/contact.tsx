"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          lead={t.contact.lead}
          align="center"
        />

        <GlassCard hover={false} className="mx-auto flex max-w-lg flex-col items-center gap-6 py-12 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan"
          >
            <Mail size={26} />
          </motion.div>

          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-2 font-display text-xl font-semibold text-ink transition-colors hover:text-cyan sm:text-2xl"
          >
            {siteConfig.email}
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-6 py-3 text-sm font-medium text-void-soft shadow-glow-violet transition-transform hover:-translate-y-0.5"
          >
            <Mail size={15} />
            {t.contact.send}
          </a>
        </GlassCard>
      </div>
    </section>
  );
}
