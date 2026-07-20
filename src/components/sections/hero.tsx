"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { useI18n } from "@/lib/i18n-context";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ParticlesBackground } from "@/components/layout/particles-background";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { t } = useI18n();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !titleRef.current) return;

    const chars = titleRef.current.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { opacity: 0, y: 24, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: 0.015,
        ease: "power3.out",
        delay: 0.9,
      }
    );
  }, []);

  const renderChars = (text: string) =>
    text.split("").map((char, i) => (
      <span className="char inline-block" key={`${char}-${i}`}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background: grid + glow + scanline + particules (signature effect) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg bg-glow-gradient opacity-80" />
        <ParticlesBackground />
        <div className="absolute inset-x-0 top-0 h-40 overflow-hidden opacity-30">
          <div className="h-full w-full animate-scanline bg-gradient-to-b from-transparent via-cyan/40 to-transparent" />
        </div>
        <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-violet/20 blur-[120px]" />
        <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-cyan/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-mono text-xs text-signal"
        >
          <ShieldCheck size={14} />
          {t.hero.eyebrow}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-2 font-mono text-sm text-ink-muted sm:text-base"
        >
          {siteConfig.name}
        </motion.p>

        <h1
          ref={titleRef}
          className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          {renderChars(t.hero.title)}
          <br />
          <span className="text-gradient">{renderChars(t.hero.titleAccent)}</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-6 max-w-xl text-lg text-ink-muted"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.55 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={17} />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.75 }}
          className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-surface-border pt-8"
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-1 text-xs text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint sm:flex"
      >
        <span className="font-mono text-[11px]">{t.hero.scroll}</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
