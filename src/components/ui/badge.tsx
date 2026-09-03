import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-surface px-3 py-1 font-mono text-xs uppercase tracking-wide text-ink-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
