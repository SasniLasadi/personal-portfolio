import { siteConfig } from "@/config/site";

export function Stats() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
      <div className="grid grid-cols-2 gap-8 gap-y-10 sm:grid-cols-3 sm:gap-10">
        {siteConfig.stats.map((item) => (
          <div key={item.label} className="border-l-2 border-accent pl-5">
            <p className="font-display text-4xl font-extrabold text-ink">{item.value}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-soft">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}