"use client";

import {
  LayoutTemplate,
  Server,
  Code2,
  Gauge,
  ShieldCheck,
  Rocket,
  Settings,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { services } from "@/lib/site-config";

const icons = {
  layout: LayoutTemplate,
  server: Server,
  code: Code2,
  gauge: Gauge,
  shield: ShieldCheck,
  rocket: Rocket,
  settings: Settings,
};

export function Services() {
  const { t, locale } = useI18n();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} lead={t.services.lead} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <GlassCard key={service.key} delay={i * 0.05}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {locale === "fr" ? service.titleFr : service.titleEn}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {locale === "fr" ? service.descFr : service.descEn}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
