import { TechCategory } from "@/types";

export function TechStack({ stack }: { stack: readonly TechCategory[] }) {
  return (
    <div className="flex flex-col gap-6">
      {stack.map((group) => (
        <div key={group.category}>
          <p className="mb-2.5 font-mono text-[11px] uppercase tracking-wide text-accent-warm">
            {group.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/15 bg-bg-soft px-3 py-1.5 font-display text-sm font-medium text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
