"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Info } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { projects, type Project } from "@/lib/site-config";

function ProjectMockup({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-xl border border-surface-border bg-gradient-to-br from-surface-raised to-void-soft">
      <div className="absolute left-3 top-3 flex gap-1.5 z-10">
        <span className="h-2.5 w-2.5 rounded-full bg-alert/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal/50" />
      </div>
      <span className="font-display text-4xl font-bold text-ink-faint/30">{initials}</span>
      <div className="absolute inset-0 grid-bg opacity-40" />
    </div>
  );
}

function ProjectThumbnail({ project }: { project: Project }) {
  const [errored, setErrored] = useState(false);

  if (!project.image || errored) {
    return <ProjectMockup name={project.name} />;
  }

  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl border border-surface-border">
      <div className="absolute left-3 top-3 z-10 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-alert/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal/50" />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-500 hover:scale-105"
        onError={() => setErrored(true)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void-soft/70 via-transparent to-transparent" />
    </div>
  );
}

export function Projects() {
  const { t, locale } = useI18n();

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} lead={t.projects.lead} />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <GlassCard key={project.id} delay={i * 0.06} className="flex flex-col">
              <ProjectThumbnail project={project} />

              <div className="mt-5 flex flex-1 flex-col">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
                  <Badge tone={project.type === "original" ? "signal" : "violet"}>
                    {project.type === "original" && t.projects.typeLabels.original}
                    {project.type === "clone" &&
                      `${t.projects.typeLabels.clone}${project.referenceName ? ` — ${project.referenceName}` : ""}`}
                    {project.type === "inspired" &&
                      `${t.projects.typeLabels.inspired}${project.referenceName ? ` ${project.referenceName}` : ""}`}
                  </Badge>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-ink-muted">
                  {locale === "fr" ? project.descriptionFr : project.descriptionEn}
                </p>

                {project.type !== "original" && (
                  <p className="mt-3 flex items-start gap-2 text-xs text-ink-faint">
                    <Info size={13} className="mt-0.5 shrink-0" />
                    {locale === "fr"
                      ? "Projet personnel non affilié, réalisé à but d'entraînement."
                      : "Non-affiliated personal project, built for training purposes."}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-surface-border px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-surface-border px-3.5 py-1.5 text-xs text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
                    >
                      <ExternalLink size={13} />
                      {t.projects.demo}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-surface-border px-3.5 py-1.5 text-xs text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
                    >
                      <Github size={13} />
                      {t.projects.code}
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
