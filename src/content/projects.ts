import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "crackcode-gamified-learning-platform",
    title: "CrackCode Gamified Learning Platform",
    summary:
      "A gamified, narrative-driven MERN platform that turns programming lessons into detective missions.",
    category: "Education / Learning",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Judge0", "Monaco Editor"],
    githubUrl: "https://github.com/CrackCode-dev/CrackCode-Main",
    liveUrl: "https://app.crackcodehq.com",
    cover: "/images/projects/crackcode-app/logo.jpg",
    featured: true,
    body: [
      "Global dropout rates in introductory programming regularly exceed 30%, largely because traditional, text-heavy platforms fail to keep beginners engaged. CrackCode addresses that directly: instead of isolated exercises, coding concepts are embedded in detective storylines, a learner might use loops to patrol neighborhoods or conditionals to track down a suspect, with immediate feedback from a sandboxed Judge0 execution engine.",
      "It's built by a six person team (2 frontend, 2 backend, 2 ML) on the MERN stack using Agile/Scrum across five sprints. My focus was the leaderboard system: a Node.js/Express API handling token accumulation and ranking logic, Redis for fast real time score updates and ranking lookups, MongoDB schemas for persisting weekly and global leaderboard data, and the React frontend surfacing live rankings with filters.",
    ],
    highlights: [
      "Built as a 'Narrative Learning Environment' - every coding challenge is embedded in a detective storyline instead of a dry exercise list",
      "Own the backend: Node.js/Express APIs, MongoDB schemas, JWT authentication, bcrypt password hashing, and secure session management",
      "Integrated Judge0 for sandboxed, real time code execution, and the Monaco Editor for a VS Code like in browser IDE",
      "A custom Persona Driven AI agent turns raw Judge0 error logs into narrative styled hints using few shot prompt engineering, guiding learners without giving away the answer",
      "Delivered in 5 Agile/Scrum sprints by a 6 person team (2 frontend, 2 backend, 2 ML), with a rotating Scrum Master",
    ],
    gallery: [
      "/images/projects/crackcode-app/hq-dashboard.jpg",
      "/images/projects/crackcode-app/case-log-challenges.jpg",
      "/images/projects/crackcode-app/leaderboard.jpg",
      "/images/projects/crackcode-app/career-roadmap.jpg",
    ],
  },
  {
    slug: "smart-campus-api",
    title: "Smart Campus API",
    summary:
      "A RESTful API for managing campus rooms, sensors, and sensor readings, built with JAX-RS (Jersey) and deployed on Apache Tomcat.",
    category: "Backend / API",
    stack: ["Java", "JAX-RS (Jersey)", "Apache Tomcat", "REST API"],
    githubUrl: "https://github.com/SasniLasadi/smart-campus-api",
    cover: "/images/projects/smart_campus_api_badge.png",
    featured: true,
    body: [
      "Smart Campus API is a RESTful backend for managing campus infrastructure - rooms, sensors, and their historical readings, built with JAX-RS (Jersey) and deployed on Apache Tomcat 9. It covers three linked resources with a full CRUD surface, sub resource routing for readings nested under sensors, and query parameter based filtering, such as filtering sensors by type.",
      "Beyond basic CRUD, the API was built around correct REST semantics: idempotent DELETE operations, a 409 Conflict when deleting a room that still has sensors attached, 422 Unprocessable Entity for semantically invalid payloads (like a sensor referencing a non-existent room), and 403 Forbidden for invalid state transitions. Cross-cutting concerns like request logging are handled through JAX-RS filters rather than duplicated per endpoint, and a global exception mapper prevents internal Java stack traces from ever reaching API consumers.",
    ],
    highlights: [
      "Full CRUD across three linked resources - Rooms, Sensors, and Sensor Readings, using JAX-RS sub resource locators for nested routing",
      "Correct REST semantics throughout: idempotent DELETE, 409 Conflict for in-use rooms, 422 for semantically invalid payloads, 403 for invalid sensor state transitions",
      "Query parameter based filtering (e.g. ?type=CO2) instead of path based filtering, keeping the URL structure representing resources, not queries",
      "Centralized JAX-RS filters for request/response logging and a global exception mapper that hides internal stack traces from API consumers",
      "Deployed on Apache Tomcat 9 with a static in-memory data store shared safely across JAX-RS's per-request resource instantiation",
    ],
  },
    {
    slug: "pizza-delight-website",
    title: "Pizza Delight Website",
    summary:
      "A four page React ordering site for a fictional pizzeria - Home, Menu, About, and Contact, with a responsive nav and a menu rendered from a shared data file.",
    category: "Web Page / Marketing",
    stack: ["React", "React Router", "Material UI", "Emotion", "CSS"],
    githubUrl: "https://github.com/SasniLasadi/Pizza-Delight-Website",
    cover: "/images/projects/pizza-delight.png",
    featured: true,
    body: [
      "A marketing site for a fictional pizzeria, built with Create React App and React Router across four routes: a hero landing page with an 'Order Now' call to action, a menu page rendering six pizzas from a single shared data file, an About page with a full-bleed hero image, and a Contact page with a two-column layout pairing a photo against an enquiry form.",
      "The navbar uses Material UI's icon set for a mobile hamburger toggle, with all four links wired to real routes. Each menu item is a reusable component fed by name, image, and price props so adding a new pizza to the menu is a one line change to the data file, not a new component.",
    ],
    highlights: [
      "Four routes via React Router - Home, Menu, About, and Contact, sharing a persistent Navbar and Footer",
      "Menu items rendered dynamically from a single MenuList data array, each passed into a reusable MenuItem component",
      "Mobile responsive navbar with a Material UI icon driven toggle for the collapsed link menu, all four nav links pointing to real pages",
      "Contact page pairs a full bleed photo with a name/email/message enquiry form",
      "Footer with Material UI social icons (Instagram, Twitter, Facebook, LinkedIn)",
    ],
  },
  {
    slug: "zero-hunger-website",
    title: "Zero Hunger Website",
    summary:
      "A web project promoting UN SDG 2: Zero Hunger, with an interactive homepage, profile page, sitemap, splash screen, and feedback page.",
    category: "Web Page / UN SDG 2",
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/SasniLasadi/Zero-Hunger-Website",
    cover: "/images/projects/zero-hunger.png",
    featured: false,
    body: [
      "Built to raise awareness around UN Sustainable Development Goal 2 - Zero Hunger, this multi page site includes an interactive homepage, a profile page, a sitemap, a splash screen, and a feedback page, built from scratch in HTML, CSS, and vanilla JavaScript.",
    ],
    highlights: [
      "Multi-page site built entirely from scratch - no frameworks, covering homepage, profile, sitemap, splash screen, and feedback flow",
      "Designed around a real advocacy goal: raising awareness for UN SDG 2 (Zero Hunger)",
      "Interactive homepage elements built in vanilla JavaScript",
      "Includes a feedback page, giving visitors a direct way to respond to the campaign",
    ],
  },
  {
    slug: "traffic-data-analysis-system",
    title: "Traffic Data Analysis System",
    summary:
      "A Python project that analyses traffic data from a CSV file using data processing and visualisation techniques.",
    category: "Data / Analytics",
    stack: ["Python", "CSV", "Data Analysis"],
    githubUrl: "https://github.com/SasniLasadi/Traffic-Data-Analysis-System",
    cover: "/images/projects/traffic-data.png",
    featured: false,
    body: [
      "A Python based analysis tool that reads raw traffic data from CSV files and processes it into readable patterns and visualisations, applying core data processing techniques to a real world civic dataset.",
    ],
    highlights: [
      "Processes raw, real world traffic CSV data into clean, readable patterns",
      "Applies core data processing techniques - cleaning, aggregation, and visualisation, end to end",
      "Built entirely in Python without relying on a prebuilt dashboard tool",
      "Works with a real civic dataset rather than synthetic/sample data",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}