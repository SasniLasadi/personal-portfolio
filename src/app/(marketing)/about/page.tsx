import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, GraduationCap, Briefcase, Rocket, Wrench, BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { TechStack } from "@/components/sections/tech-stack";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = { title: "About" };

const tags = ["Full-Stack Development", "Software Engineering", "Problem Solving"];

export default function AboutPage() {
  return (
    <>
      {/* Introduction */}
      <section className="mx-auto max-w-content px-6 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[1fr_1.2fr]">
          <div className="w-full max-w-md overflow-hidden rounded-[2rem] border border-ink/10 bg-surface md:max-w-none">
            <Image
              src="/images/portrait.jpg"
              alt={`Portrait of ${siteConfig.name}`}
              width={800}
              height={795}
              className="h-auto w-full"
            />
          </div>

          <div>
            <p className="font-mono text-sm text-ink-soft">00 / About</p>

            <h1 className="mt-3 text-balance font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Hi, I&rsquo;m Sasni
            </h1>

            <div className="mt-6 flex flex-col gap-4 font-body text-base leading-relaxed text-ink-soft text-left md:text-justify">
              <p>
                I&rsquo;m a Computer Science undergraduate interested in building practical 
                software solutions, with experience in frontend 
                development, backend systems, and API integration.
              </p>

              <p>
                I&rsquo;ve gained hands-on experience developing and maintaining client projects, 
                solving technical problems, and contributing to different stages of the 
                software development process. I&rsquo;m continuously strengthening my technical 
                skills and working towards building reliable, user-focused applications.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink/15 bg-surface px-3.5 py-1.5 font-mono text-xs uppercase tracking-wide text-ink-soft"
                >
                  {tag}
                </span>
              ))}
            </div>

            <dl className="mt-9 grid grid-cols-1 gap-5 border-t border-ink/10 pt-8 sm:grid-cols-2">
              <div>
                <dt className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                  <GraduationCap size={14} className="text-accent-warm" />
                  University
                </dt>
                <dd className="mt-2 font-body text-sm text-ink">
                  {siteConfig.university}
                </dd>
              </div>

              <div>
                <dt className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                  <BookOpen size={14} className="text-accent-warm" />
                  Degree
                </dt>
                <dd className="mt-2 font-body text-sm text-ink">
                  {siteConfig.degree}
                </dd>
              </div>

              <div>
                <dt className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                  <MapPin size={14} className="text-accent-warm" />
                  Location
                </dt>
                <dd className="mt-2 font-body text-sm text-ink">
                  {siteConfig.location}
                </dd>
              </div>

              <div>
                <dt className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                  <Briefcase size={14} className="text-accent-warm" />
                  Current role
                </dt>
                <dd className="mt-2 font-body text-sm text-ink">
                  Software Engineer Intern
                </dd>
              </div>
            </dl>

            <div className="mt-9">
              <ButtonLink href="/contact" size="lg">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Current work */}
      <section className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-24">
        <p className="font-mono text-sm text-ink-soft">01 / Currently</p>

        <h2 className="mt-3 flex max-w-xl items-center gap-2.5 text-balance font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          <Rocket size={26} className="text-accent-warm" />
          What I&rsquo;m working on
        </h2>

        <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-ink-soft">
          My current focus is applying what I learn to real-world software,
          improving existing features, and understanding how applications
          perform beyond the development environment.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {siteConfig.currentlyBuilding.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-ink/10 bg-surface p-5 font-body text-sm leading-relaxed text-ink-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Technical expertise */}
      <section className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-mono text-sm text-ink-soft">02 / Expertise</p>

            <h2 className="mt-3 flex items-center gap-2.5 text-balance font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              <Wrench size={24} className="text-accent-warm" />
              My technical toolkit
            </h2>

            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ink-soft">
              I work across frontend and backend development, using different
              technologies to build features, connect services, and manage
              application data. I continue to strengthen my fundamentals
              through hands-on projects, debugging, and exploring better ways
              to design and maintain software.
            </p>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-surface p-6 sm:p-8">
            <TechStack stack={siteConfig.techStack} />
          </div>
        </div>
      </section>
    </>
  );
}