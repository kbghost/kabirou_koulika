import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "var(--color-void)",
          soft: "var(--color-void-soft)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          raised: "var(--color-surface-raised)",
          border: "var(--color-surface-border)",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          faint: "var(--color-ink-faint)",
        },
        cyan: {
          DEFAULT: "#4CDFE8",
          dim: "#2CA9B3",
        },
        violet: {
          DEFAULT: "#7C6FFF",
          dim: "#5B4FD6",
        },
        signal: {
          DEFAULT: "#3DDC84",
        },
        alert: {
          DEFAULT: "#FF6B6B",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "glow-gradient":
          "radial-gradient(circle at 50% 0%, rgba(124,111,255,0.18), transparent 60%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
        "glow-cyan": "0 0 40px rgba(76,223,232,0.25)",
        "glow-violet": "0 0 40px rgba(124,111,255,0.25)",
      },
      animation: {
        blink: "blink 1.1s steps(2, start) infinite",
        scanline: "scanline 3.5s linear infinite",
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
