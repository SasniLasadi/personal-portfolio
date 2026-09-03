export const siteConfig = {
  name: "Sasni Lasadi",
  logotype: "Sasni Lasadi",
  role: "Software Engineering Intern & CS Undergraduate",
  tagline: "Crafting solutions through code.",
  description:
    "Passionate about building full-stack products, from backend systems and infra to client facing web platforms.",
  email: "sasnilasadi@gmail.com",
  phone: "+94 77 858 5691",
  location: "Colombo, Sri Lanka",
  company: "SE intern at Incarnate",
  university: "Informatics Institute of Technology (IIT), Sri Lanka",
  degree: "BSc(Hons) Computer Science - awarded by University of Westminster",
  social: {
    github: "https://github.com/SasniLasadi",
    linkedin: "https://www.linkedin.com/in/sasni-lasadi-6bb1ab32a/",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  currentlyBuilding: [
    "Building and shipping full-stack client platforms - Next.js frontends, Laravel/PHP CMS backends",
    "Handling infra & deployment: DigitalOcean, Plesk, Namecheap hosting, Cloudflare, SSL",
    "Integrating third-party APIs (Google Maps) and building admin CMS panels from scratch",
    "Contributing to CrackCode - a gamified MERN stack programming learning platform",
  ],
  techStack: [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { category: "Backend", items: ["PHP", "Laravel", "Node.js", "Express", "Flat-file JSON CMS"] },
    { category: "Data", items: ["MongoDB", "MySQL"] },
    { category: "DevOps / Infra", items: ["Git", "GitHub", "DigitalOcean", "Plesk", "Cloudflare", "AWS"] },
    { category: "Other", items: ["Go", ".NET", "WordPress / Elementor"] },
  ],
  stats: [
    { value: "12+", label: "Projects Built" },
    { value: "15+", label: "Technologies" },
    { value: "2024", label: "Started Coding" },
  ],
} as const;
