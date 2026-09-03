import { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { internshipProjects } from "@/content/internship";

const BASE_URL = "https://personal-portfolio-sand-kappa.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/resume",
    "/gallery",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const internshipRoutes = internshipProjects.map((p) => ({
    url: `${BASE_URL}/projects/internship/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...internshipRoutes];
}