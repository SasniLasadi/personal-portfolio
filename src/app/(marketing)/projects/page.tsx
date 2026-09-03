import type { Metadata } from "next";
import { ProjectGrid } from "@/components/sections/project-grid";
import { InternshipCard } from "@/components/sections/internship-card";
import { projects } from "@/content/projects";
import { internshipProjects } from "@/content/internship";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-content px-6 py-12 md:px-10 md:py-16">
        <p className="font-mono text-sm text-ink-soft">01 / Selected Projects</p>
        <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
          Recent projects
        </h1>
        <p className="mt-4 max-w-xl font-body text-base text-ink-soft">
          A collection of coursework, personal builds, and side projects from gamified learning
          platforms to data analysis tools.
        </p>

        <div className="mt-12">
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-24">
        <p className="font-mono text-sm text-ink-soft">02 / Internship</p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
          Projects at Incarnate
        </h2>
        <p className="mt-4 max-w-xl font-body text-base text-ink-soft">
          As a Software Engineering Intern, I’ve been working on real client platforms, infrastructure, 
          and ongoing product development. While some project details remain confidential, 
          I’m excited to share a glimpse of what I’ve been building.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {internshipProjects.map((project) => (
            <InternshipCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
