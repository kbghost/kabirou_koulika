"use client";

import { Award, FileText } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { certifications } from "@/lib/site-config";

export function Certifications() {
  const { t, locale } = useI18n();

  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.certifications.eyebrow} title={t.certifications.title} />

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <GlassCard key={cert.id} delay={i * 0.05} className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                <Award size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-ink">
                  {locale === "fr" ? cert.titleFr : cert.titleEn}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {cert.issuer} — {cert.date}
                </p>
                {cert.fileUrl ? (
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-cyan hover:underline"
                  >
                    <FileText size={13} />
                    {t.certifications.view}
                  </a>
                ) : (
                  <p className="mt-3 font-mono text-xs text-ink-faint">
                    {t.certifications.pending}
                  </p>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
