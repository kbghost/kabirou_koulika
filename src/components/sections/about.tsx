"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-xl text-ink sm:text-2xl"
            >
              {t.about.lead}
            </motion.p>

            <div className="mt-6 space-y-4">
              {t.about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                  className="leading-relaxed text-ink-muted"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {t.about.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <GlassCard>
              <p className="font-mono text-xs uppercase tracking-wider text-cyan">
                {t.about.availableFor}
              </p>
              <ul className="mt-5 space-y-3">
                {t.about.availableWith.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink">
                    <CheckCircle2 size={16} className="shrink-0 text-signal" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
