"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { educationTimeline } from "@/lib/site-config";

export function Education() {
  const { t, locale } = useI18n();

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />

        <div className="relative border-l border-surface-border pl-8">
          {educationTimeline.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-cyan/40 bg-void text-cyan">
                <GraduationCap size={15} />
              </span>
              <p className="font-mono text-xs text-cyan">{entry.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                {locale === "fr" ? entry.degreeFr : entry.degreeEn}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{entry.school}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {locale === "fr" ? entry.descFr : entry.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
