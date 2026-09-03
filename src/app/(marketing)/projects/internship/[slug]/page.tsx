import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Briefcase, FileText, Lock, CheckCircle2 } from "lucide-react";
import { getInternshipProjectBySlug, internshipProjects } from "@/content/internship";

export function generateStaticParams() {
  return internshipProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getInternshipProjectBySlug(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default function InternshipProjectPage({ params }: { params: { slug: string } }) {
  const project = getInternshipProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-content px-6 py-12 md:px-10 md:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={14} /> All projects
      </Link>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-accent-warm">
            <Briefcase size={13} /> {project.company} · {project.period}
          </p>
          <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
            {project.summary}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 font-display text-sm font-semibold text-ink transition-colors hover:border-ink/60"
            >
              <FileText size={15} /> Case study
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-accent-ink shadow-[0_5px_0_0_rgba(0,0,0,0.16)] transition-all hover:brightness-110 active:translate-y-1 active:shadow-[0_1px_0_0_rgba(0,0,0,0.16)]"
            >
              Visit site <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>

      <dl className="mt-8 grid grid-cols-1 gap-6 border-y border-ink/10 py-6 sm:grid-cols-2">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">Role</dt>
          <dd className="mt-1 font-body text-sm text-ink">Software Engineering Intern</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">Duration</dt>
          <dd className="mt-1 font-body text-sm text-ink">{project.period}</dd>
        </div>
      </dl>

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

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-3xl border border-ink/10 bg-bg-soft">
        <Image src={project.cover} alt={project.title} fill priority className="object-cover" />
        {project.confidential && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-surface/90 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
            <Lock size={12} /> Placeholder — NDA
          </span>
        )}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="font-display text-lg font-bold text-ink">Overview</h2>
          {project.body && project.body.length > 0 ? (
            project.body.map((paragraph, i) => (
              <p key={i} className="mt-4 font-body text-base leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
              {project.summary}
            </p>
          )}
        </div>

        <div className="rounded-3xl border border-ink/10 bg-surface p-6 sm:p-7">
          <h2 className="font-display text-lg font-bold text-ink">My contribution</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {project.contribution.map((item) => (
              <li key={item} className="flex gap-2.5 font-body text-sm leading-relaxed text-ink-soft">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-warm" />
                {item}
              </li>
            ))}
          </ul>
        </div>
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
                <Image src={src} alt={project.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}