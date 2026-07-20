"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ children, className, hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -6, borderColor: "rgba(76,223,232,0.4)" } : undefined}
      className={cn(
        "glass rounded-2xl p-6 transition-shadow",
        hover && "hover:shadow-glow-cyan",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
