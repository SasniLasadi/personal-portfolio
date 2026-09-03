import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-surface transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-ink/10 bg-bg-soft">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-2.5 py-1 font-mono text-[11px] text-ink-soft">
          {String(index + 1).padStart(3, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="font-mono text-[11px] uppercase tracking-wide text-accent-warm">
          {project.category}
        </p>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold text-ink">{project.title}</h3>
          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </div>
        <p className="font-body text-sm leading-relaxed text-ink-soft">{project.summary}</p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-bg-soft px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
