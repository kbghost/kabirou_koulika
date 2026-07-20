"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Users, BookMarked, Star, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { siteConfig } from "@/lib/site-config";

interface GithubUser {
  public_repos: number;
  followers: number;
  avatar_url: string;
  html_url: string;
}

interface GithubRepo {
  name: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

export function GithubStats() {
  const { t } = useI18n();
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${siteConfig.githubUsername}`),
          fetch(
            `https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=100&sort=updated`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const userData: GithubUser = await userRes.json();
        const reposData: GithubRepo[] = await reposRes.json();

        if (!cancelled) {
          setUser(userData);
          setRepos(reposData);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const languageCounts = repos.reduce<Record<string, number>>((acc, repo) => {
    if (repo.language) acc[repo.language] = (acc[repo.language] ?? 0) + 1;
    return acc;
  }, {});

  const topLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const maxLangCount = topLanguages[0]?.[1] ?? 1;

  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4);

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.github.eyebrow} title={t.github.title} lead={t.github.lead} />

        {status === "loading" && (
          <p className="font-mono text-sm text-ink-faint">{t.github.loading}</p>
        )}

        {status === "error" && (
          <GlassCard hover={false}>
            <p className="text-sm text-ink-muted">{t.github.error}</p>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-cyan hover:underline"
            >
              <Github size={14} />
              {t.github.viewProfile}
            </a>
          </GlassCard>
        )}

        {status === "ready" && user && (
          <div className="grid gap-6 lg:grid-cols-3">
            <GlassCard hover={false} className="flex flex-col items-center text-center lg:col-span-1">
              <Image
                src={user.avatar_url}
                alt={siteConfig.githubUsername}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full border border-surface-border"
              />
              <p className="mt-4 font-display text-base font-semibold text-ink">
                @{siteConfig.githubUsername}
              </p>
              <div className="mt-6 grid w-full grid-cols-2 gap-4 border-t border-surface-border pt-6">
                <div>
                  <p className="flex items-center justify-center gap-1.5 font-display text-2xl font-semibold text-ink">
                    <BookMarked size={16} className="text-cyan" />
                    {user.public_repos}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">{t.github.repos}</p>
                </div>
                <div>
                  <p className="flex items-center justify-center gap-1.5 font-display text-2xl font-semibold text-ink">
                    <Users size={16} className="text-violet" />
                    {user.followers}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">{t.github.followers}</p>
                </div>
              </div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-surface-border px-4 py-2 text-xs text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <ExternalLink size={13} />
                {t.github.viewProfile}
              </a>
            </GlassCard>

            <GlassCard hover={false} className="lg:col-span-2">
              <p className="mb-5 font-mono text-xs uppercase tracking-wider text-cyan">
                {t.github.topLanguages}
              </p>
              <div className="space-y-3">
                {topLanguages.map(([lang, count], i) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                  >
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-ink">{lang}</span>
                      <span className="text-ink-faint">{count}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-border">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
                        style={{ width: `${(count / maxLangCount) * 100}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {topRepos.length > 0 && (
                <div className="mt-7 grid gap-3 border-t border-surface-border pt-6 sm:grid-cols-2">
                  {topRepos.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-surface-border px-3.5 py-2.5 text-sm text-ink transition-colors hover:border-cyan/50"
                    >
                      <span className="truncate font-mono text-xs">{repo.name}</span>
                      <span className="flex items-center gap-1 text-xs text-ink-faint">
                        <Star size={12} />
                        {repo.stargazers_count}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}
