import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "signal" | "violet" | "alert";
}) {
  const tones = {
    default: "border-surface-border text-ink-muted",
    signal: "border-signal/30 text-signal bg-signal/10",
    violet: "border-violet/30 text-violet bg-violet/10",
    alert: "border-alert/30 text-alert bg-alert/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
