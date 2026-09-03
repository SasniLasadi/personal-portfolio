import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, CheckCircle2 } from "lucide-react";
import { getProjectBySlug, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-content px-6 py-10 md:px-10 md:py-14">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={14} /> All projects
      </Link>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent-warm">
            {project.category}
          </p>
          <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
            {project.summary}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 font-display text-sm font-semibold text-ink transition-colors hover:border-ink/60"
          >
            <Github size={15} /> Source
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-accent-ink shadow-[0_5px_0_0_rgba(0,0,0,0.16)] transition-all hover:brightness-110 active:translate-y-1 active:shadow-[0_1px_0_0_rgba(0,0,0,0.16)]"
            >
              Live demo <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-ink/15 bg-bg-soft px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-ink-soft"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-ink/10 bg-bg-soft">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-lg font-bold text-ink">Overview</h2>
          {project.body.map((paragraph, i) => (
            <p key={i} className="font-body text-base leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="rounded-3xl border border-ink/10 bg-surface p-6 sm:p-7">
            <h2 className="font-display text-lg font-bold text-ink">Key highlights</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2.5 font-body text-sm leading-relaxed text-ink-soft">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-warm" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="mt-14">
          <h2 className="font-display text-lg font-bold text-ink">More screenshots</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink/10 bg-bg-soft"
              >
                <Image
                  src={src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}