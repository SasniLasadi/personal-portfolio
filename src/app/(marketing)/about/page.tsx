import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, GraduationCap, Briefcase, Rocket, Wrench } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Stats } from "@/components/sections/stats";
import { TechStack } from "@/components/sections/tech-stack";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = { title: "About" };

const tags = ["Full-Stack", "SE Intern", "Sri Lanka", "Est. 2024"];

export default function AboutPage() {
  return (
    <>
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

            <div className="mt-6 flex flex-col gap-4 font-body text-base leading-relaxed text-ink-soft text-justify">
              <p>
                Software engineering intern &amp; CS undergrad passionate about building
                full-stack products, from backend systems and infra to client facing web
                platforms.
              </p>
              <p>
                I&rsquo;m a third year Computer Science undergraduate at IIT Sri Lanka, pursuing
                a BSc(Hons) in Computer Science awarded by the University of Westminster.
                Alongside my studies, I&rsquo;m currently interning at {siteConfig.company},
                shipping full-stack client platforms and handling everything from frontend builds
                to infra and deployment.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-sm text-ink-soft">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} className="text-accent-warm" /> {siteConfig.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap size={15} className="text-accent-warm" /> {siteConfig.university}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={15} className="text-accent-warm" /> {siteConfig.company}
              </span>
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
                <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">University</dt>
                <dd className="mt-1 font-body text-sm text-ink">{siteConfig.university}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">Degree</dt>
                <dd className="mt-1 font-body text-sm text-ink">{siteConfig.degree}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">Location</dt>
                <dd className="mt-1 font-body text-sm text-ink">{siteConfig.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">Currently</dt>
                <dd className="mt-1 font-body text-sm text-ink">{siteConfig.company}</dd>
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

      <section className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-24">
        <p className="font-mono text-sm text-ink-soft">01 / Currently</p>
        <h2 className="mt-3 flex max-w-xl items-center gap-2.5 text-balance font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          <Rocket size={26} className="text-accent-warm" /> What I&rsquo;m working on
        </h2>

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

      <section className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-mono text-sm text-ink-soft">02 / Expertise</p>
            <h2 className="mt-3 flex items-center gap-2.5 text-balance font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              <Wrench size={24} className="text-accent-warm" /> Tech I work with
            </h2>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ink-soft">
              A growing toolkit built through coursework, internship work, and personal projects. Each tool earns its place by solving a real problem in a shipped project, not by trend. 
              The result is a stack that spans from infra and deployment to polished, client-facing interfaces.
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
