"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { skills, type Skill } from "@/lib/site-config";

function LevelDots({ level }: { level: Skill["level"] }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-4 rounded-full transition-colors ${
            i <= level ? "bg-gradient-to-r from-cyan to-violet" : "bg-surface-border"
          }`}
        />
      ))}
    </div>
  );
}

export function Skills() {
  const { t } = useI18n();

  const groups = [
    { key: "frontend" as const, items: skills.frontend },
    { key: "backend" as const, items: skills.backend },
    { key: "tools" as const, items: skills.tools },
    { key: "security" as const, items: skills.security },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} lead={t.skills.lead} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, gi) => (
            <GlassCard key={group.key} delay={gi * 0.07} hover={false}>
              <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-cyan">
                {t.skills.categories[group.key]}
              </h3>
              <ul className="space-y-4">
                {group.items.map((skill, i) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-sm text-ink">{skill.name}</span>
                    <LevelDots level={skill.level} />
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
