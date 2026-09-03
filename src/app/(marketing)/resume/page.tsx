import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { education, achievements, experience } from "@/content/education";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-content px-6 py-12 md:px-10 md:py-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-sm text-ink-soft">04 / Resume</p>
          <h1 className="mt-3 max-w-xl text-balance font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            The journey so far.
          </h1>
        </div>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-accent-ink shadow-[0_6px_0_0_rgba(0,0,0,0.16)] transition-all hover:brightness-110 active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.16)]"
        >
          <Download size={16} /> Download CV (PDF)
        </a>
      </div>

      <div className="mt-14">
        <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ink/20">01</span>
          Experience
        </div>

        <div className="flex flex-col gap-8 border-l border-ink/10 pl-6">
          {experience.map((entry) => (
            <div key={`${entry.role}-${entry.company}`} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />

              <h3 className="font-display text-lg font-bold text-ink">{entry.role}</h3>
              <p className="mt-0.5 font-mono text-xs text-ink-soft">
                {entry.period}
                {entry.duration ? ` · ${entry.duration}` : ""}
              </p>

              <p className="mt-1.5 font-body text-sm text-ink-soft">
                {entry.company}
                {entry.type ? ` · ${entry.type}` : ""}
              </p>

              {entry.location && (
                <p className="mt-0.5 font-body text-xs text-ink-soft/80">{entry.location}</p>
              )}

              {entry.description && (
                <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-ink-soft">
                  {entry.description}
                </p>
              )}

              {entry.skills && entry.skills.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-bg-soft px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-accent-warm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {entry.reportUrl && (
                <a
                  href={entry.reportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent hover:underline"
                >
                  <FileText size={14} />
                  {entry.reportLabel ?? "View report"}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2">
        <div>
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ink/20">02</span>
            Education
          </div>

          <div className="flex flex-col gap-8 border-l border-ink/10 pl-6">
            {education.map((entry) => (
              <div key={entry.title} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="font-mono text-xs text-ink-soft">{entry.years}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{entry.title}</h3>
                <p className="mt-0.5 font-body text-sm text-ink-soft">{entry.place}</p>
                {entry.detail && (
                  <p className="mt-0.5 font-body text-sm text-ink-soft">{entry.detail}</p>
                )}
                {entry.badge && (
                  <span className="mt-2 inline-block rounded-full bg-bg-soft px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-accent-warm">
                    {entry.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ink/20">03</span>
            Achievements
          </div>

          <div className="flex flex-col gap-6">
            {achievements.map((entry) => (
              <div
                key={entry.title}
                className="rounded-3xl border border-accent/30 bg-bg-soft p-6"
              >
                <p className="font-mono text-xs text-ink-soft">{entry.year}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{entry.title}</h3>
                <p className="mt-0.5 font-body text-sm text-accent-warm">{entry.place}</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
                  {entry.detail}
                </p>
              </div>
            ))}

            <div className="mt-4 rounded-3xl border border-ink/10 bg-surface p-6 text-center">
              <p className="font-body text-sm text-ink-soft">Want the full picture?</p>
              <a
                href="/resume.pdf"
                download
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 px-6 py-2.5 font-display text-sm font-semibold text-ink transition-colors hover:border-ink/60"
              >
                <Download size={15} /> Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}