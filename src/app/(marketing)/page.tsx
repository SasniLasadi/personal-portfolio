import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ProjectGrid } from "@/components/sections/project-grid";
import { InternshipCard } from "@/components/sections/internship-card";
import { ButtonLink } from "@/components/ui/button";
import { getFeaturedProjects } from "@/content/projects";
import { internshipProjects } from "@/content/internship";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const featuredInternships = internshipProjects.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <Stats />

      <section className="mx-auto max-w-content px-6 pb-24 md:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">Selected work</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Recent projects
            </h2>
          </div>
          <ButtonLink href="/projects" variant="outline">
            All projects
            <ArrowRight size={16} />
          </ButtonLink>
        </div>

        <ProjectGrid projects={featured} />
      </section>

      {featuredInternships.length > 0 && (
        <section className="mx-auto max-w-content px-6 pb-24 md:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">Industry experience</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                Internship work
              </h2>
            </div>
            <ButtonLink href="/projects" variant="outline">
              All projects
              <ArrowRight size={16} />
            </ButtonLink>
          </div>

          <div className="flex flex-col gap-6">
            {featuredInternships.map((project) => (
              <InternshipCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}