"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
}

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-gradient-to-r from-cyan to-violet text-void-soft shadow-glow-violet hover:brightness-110",
  secondary:
    "glass text-ink hover:border-cyan/50",
  ghost: "text-ink-muted hover:text-ink",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
