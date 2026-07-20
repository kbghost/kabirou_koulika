"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/site-config";

function TiltCard({
  name,
  role,
  quote,
  delay,
}: {
  name: string;
  role: string;
  quote: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-40, 40], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-40, 40], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass rounded-2xl p-7"
      >
        <Quote size={22} className="text-cyan/60" style={{ transform: "translateZ(20px)" }} />
        <p
          className="mt-4 text-sm leading-relaxed text-ink-muted"
          style={{ transform: "translateZ(30px)" }}
        >
          {quote}
        </p>
        <div className="mt-6 flex items-center gap-3" style={{ transform: "translateZ(20px)" }}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan/30 to-violet/30 font-display text-sm font-semibold text-ink">
            {name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium text-ink">{name}</p>
            <p className="text-xs text-ink-faint">{role}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Testimonials() {
  const { locale } = useI18n();

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="$ cat testimonials.json"
          title={locale === "fr" ? "Témoignages" : "Testimonials"}
          lead={
            locale === "fr"
              ? "Emplacements prêts pour tes futurs retours clients — à remplacer par de vrais témoignages."
              : "Placeholders ready for your future client feedback — replace with real testimonials."
          }
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((item, i) => (
            <TiltCard
              key={item.name + i}
              name={item.name}
              role={item.role}
              quote={locale === "fr" ? item.quoteFr : item.quoteEn}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
