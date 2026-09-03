import { EducationEntry, AchievementEntry } from "@/types";

export interface ExperienceEntry {
  role: string;
  company: string;
  type?: string;
  period: string;
  duration?: string;
  location?: string;
  description?: string;
  skills?: string[];
  reportUrl?: string;
  reportLabel?: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer Intern",
    company: "Incarnate",
    type: "Full-time",
    period: "May 2026 - Present",
    duration: "4 mos",
    location: "Sri Lanka",
    description:
      "Building and shipping full-stack client platforms end to end - Next.js frontends paired with Laravel/PHP CMS backends. Developed admin CMS panels from scratch, integrated third-party APIs including Google Maps, and handled infrastructure and deployment across DigitalOcean, Plesk, and Namecheap.",
    skills: ["Next.js", "TypeScript", "Laravel", "PHP", "Google Maps API", "DigitalOcean", "Plesk"],
  },
  {
    role: "Industry Outreach Lead",
    company: "IEEE WIE Affinity Group of IIT",
    period: "Jan 2026 - Present",
    duration: "8 mos",
    description:
      "Responsible for leading outreach efforts and securing sponsorships for IEEE WIE events and initiatives. Coordinate with industry partners to build strategic collaborations and maintain strong professional relationships that support successful programs.",
    skills: ["Teamwork", "Communication", "Time Management"],
  },
  {
    role: "Co-Founder",
    company: "CrackCode",
    type: "Self-employed",
    period: "Oct 2025 - Present",
    duration: "11 mos",
    description:
      "CrackCode is an AI-driven online learning platform created for programmers to develop their coding skills through interactive challenges and problem-solving exercises. It supports users in enhancing their understanding of algorithms and technical concepts while helping them prepare effectively for software engineering interviews and careers in the tech industry.",
    skills: ["MERN Stack", "Full-Stack Development", "Agile Methodologies", "AI Integration"],
  },
  {
    role: "External Pilot Tester",
    company: "Miwayz",
    type: "Part-time",
    period: "Apr 2026 - Jul 2026",
    duration: "4 mos",
    location: "Colombo, Western Province, Sri Lanka · On-site",
    description:
      "Participated as an External Pilot Tester for a ride-hailing application, conducting functional, usability, and exploratory testing across key user workflows. Identified and reported bugs, provided user-focused feedback, and validated fixes to improve the overall reliability and user experience of the application.",
    skills: ["Software Testing", "Functional Testing", "Bug Reporting", "Usability Testing", "QA"],
    reportUrl: "/reports/miwayz-pilot-testing-report.pdf",
    reportLabel: "View pilot testing report",
  },
];

export const education: EducationEntry[] = [
  {
    years: "2024 - Present",
    title: "BSc(Hons) Computer Science",
    place: "University of Westminster - via IIT Sri Lanka",
    badge: "3rd Year Undergraduate",
  },
  {
    years: "2021 - 2023",
    title: "G.C.E Advanced Level",
    place: "Southlands College",
    detail: "Physical Science",
    badge: "1C and 2S Passes",
  },
  {
    years: "2020",
    title: "G.C.E Ordinary Level",
    place: "Southlands College",
    badge: "7A, 1B and 1C passes",
  },
];

export const achievements: AchievementEntry[] = [
  {
    year: "2025",
    title: "Advanced Tier - Coderally 6.0",
    place: "Competitive Programming",
    detail:
      "Achieved selection to the Advanced Tier based on selection week performance, showcasing technical skills, collaboration, and innovative problem-solving under competitive conditions.",
  },
];