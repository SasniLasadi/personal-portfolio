import { InternshipProject } from "@/types";

export const internshipProjects: InternshipProject[] = [
  {
    slug: "mirailand-real-estate-platform",
    title: "Mirailand - Japan Real Estate Platform",
    company: "Incarnate",
    period: "2026 June - 2026 August",
    summary:
      "A full-stack, Japan focused real estate platform for buyers and sellers worldwide - own the Laravel backend, admin CMS, and the interactive property map with dynamic filtering, extending a teammate's Next.js frontend foundation.",
    body: [
      "Mirailand is a full-stack, Japan focused real estate platform built to let buyers and sellers anywhere in the world browse, list, and manage properties across Japan, from Akiya homes to newly built apartments with freehold ownership, remote purchasing, and full English support built in from the ground up.",
      "Buyers browse listings nationwide through an interactive map with live price markers, filtering by region, property type, price range, and building age to narrow results before viewing full property details, photos, and location info. Sellers list a property through a guided multi step form - building type, address, floor count, parking, and photos which routes into an admin review queue before going live on the map. Both buyers and sellers authenticate via OTP rather than passwords, and once approved, admins manage every listing's status, pricing, and visibility from a central CMS dashboard.",
    ],
    stack: ["Laravel", "PHP", "Filament CMS", "Next.js", "MySQL", "Google Maps API", "DigitalOcean", "Plesk"],
    liveUrl: "https://mirailand.com/",
    caseStudyUrl: "https://github.com/SasniLasadi/mirailand-case-study",
    contribution: [
      "Built and maintain the Laravel backend - REST APIs, admin workflows, and a Filament based CMS for managing property listings.",
      "Implemented OTP based authentication for buyer and seller accounts.",
      "Built the interactive property map with dynamic filtering - region, price, property type, and building age, synced live to map markers.",
      "Extended a teammate's Next.js frontend foundation with new features and UI improvements.",
      "Owned production deployment and a hosting migration across DigitalOcean, Plesk, and Cloudflare.",
    ],
    cover: "/images/projects/mirailand/hero-homepage.jpg",
    gallery: [
      "/images/projects/mirailand/properties-map.jpg",
      "/images/projects/mirailand/property-detail.jpg",
      "/images/projects/mirailand/list-property-form.jpg",
      "/images/projects/mirailand/cms-dashboard.jpg",
    ],
    featured: true,
    confidential: false,
  },
  {
    slug: "living-hope-ndis-disability-services",
    title: "Living Hope - NDIS Disability Services",
    company: "Incarnate",
    period: "2026 August - 2026 August",
    summary:
      "A WCAG 2.1 AA accessible website and custom admin CMS for a WA-based NDIS disability services provider - built the backend and admin CMS behind the referral system and lead management.",
    body: [
      "Living Hope is a registered NDIS disability services provider based in Perth, offering personalised support and care across Western Australia. The public site is built accessibility first WCAG 2.1 AA tools like a high contrast toggle and page zoom controls sit in a persistent top bar, alongside multi language support, so the site works for the range of visitors NDIS services need to reach: participants, families, carers, and support coordinators.",
      "The core of the site is its referral system. Visitors choose between two referral paths, Self-Referral/Family/Carer, or Support Coordinator/Plan Manager and then move through a multi step form covering referrer information and full participant details, including NDIS number and home address. Every submission, along with contact messages and newsletter subscribers, lands in a custom PHP admin dashboard where staff track leads, manage blog content and the media gallery, and monitor site visit analytics (today, this week, and all time) from a single screen.",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Custom Admin CMS"],
    liveUrl: "https://livinghope.au/",
    contribution: [
      "Built the backend for the referral system, processing submissions from both referral paths (self/family/carer vs. support coordinator/plan manager) and storing referrer and participant details with server side validation.",
      "Built a custom PHP/MySQL admin CMS from scratch, lead management for Contact, Referral, and Subscribe submissions, a blog post editor, and a media gallery manager.",
      "Added site visit analytics to the admin dashboard (today / this week / all time) so the team can track traffic without a third party tool.",
    ],
    cover: "/images/projects/living-hope/hero-homepage.jpg",
    gallery: [
      "/images/projects/living-hope/service-page.jpg",
      "/images/projects/living-hope/admin-dashboard.jpg",
      "/images/projects/living-hope/referral-form.jpg",
    ],
    featured: true,
    confidential: false,
  },
  {
    slug: "green-hill-360-villa",
    title: "Green Hill 360 - Boutique Villa Website & CMS",
    company: "Incarnate",
    period: "2026 July - 2026 August",
    summary:
      "A full-stack boutique villa website and custom admin CMS for a mountain retreat in Sri Lanka's Uva Province - built entirely solo, from the public site to every content management screen.",
    body: [
      "Green Hill 360 is a boutique villa in Haliela, Uva Province, Sri Lanka, marketed around its 360° mountain views, outdoor mini pool, and Sri Lankan hospitality. The public site covers Home, Rooms, Gallery, Food, and Location pages, with three parallel booking paths - WhatsApp, email, and Booking.com plus a booking enquiry form that generates a pre-filled email client side, so guests can send their dates without either party needing a backend account or paid form service.",
      "Every piece of dynamic content is managed through a custom admin CMS built for non-technical staff: gallery photos organised by category, room amenities shown in the 'In Every Room' list, the food menu, each dish with its own category, icon, and spice level, with a graceful 'Photo coming soon' fallback for dishes without an image yet, nearby attractions for the Location page, and incoming contact messages. Every change goes live on the public site immediately.",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Custom Admin CMS"],
    liveUrl: "https://greenhill360villa.com/",
    contribution: [
      "Designed and built the entire public facing site solo - Home, Rooms, Gallery, Food, and Location pages - end to end.",
      "Built a custom admin CMS from scratch covering five content areas: gallery photos, room amenities, food menu, nearby attractions, and contact messages.",
      "Built the food menu system with per-dish metadata - category, icon, and spice level plus a 'Photo coming soon' fallback for dishes without an uploaded image.",
      "Implemented a client side, pre-filled email booking enquiry flow requiring no backend or account, alongside WhatsApp and Booking.com as alternate booking paths.",
      "Owned the entire project independently, from initial build through to ongoing content updates.",
    ],
    cover: "/images/projects/green-hill-360/hero-homepage.jpg",
    gallery: [
      "/images/projects/green-hill-360/food-page.jpg",
      "/images/projects/green-hill-360/contact-booking.jpg",
      "/images/projects/green-hill-360/admin-dashboard.jpg",
      "/images/projects/green-hill-360/gallery-admin.jpg",
      "/images/projects/green-hill-360/food-admin.jpg",
    ],
    featured: true,
    confidential: false,
  },
  {
    slug: "incarnate-tours",
    title: "Incarnate Tours - Sri Lanka Travel Experiences",
    company: "Incarnate",
    period: "2026 August - 2026 August",
    summary:
      "A travel and trip planning website for Incarnate's own Sri Lanka tours brand - built entirely solo, centred on a WhatsApp first planning flow instead of a fixed booking form.",
    body: [
      "Incarnate Tours is a travel brand by Incarnate (Pvt) Ltd, based in Haliela, connecting travellers with authentic Sri Lankan experiences, family friendly holidays, romantic escapes, wildlife adventures, and peaceful solo retreats. The site is organised around Experiences, Destinations, and Wellness, spotlighting hidden local spots most tours skip like Mini World's End near Lunugala and Bomburu Ella (Perawella Falls) on the Uva Paranagama border, alongside a dedicated Wellness & Ayurveda section offering traditional spa and fish therapy treatments in Haliela.",
      "Rather than a fixed checkout flow, trip planning is built around direct conversation: 'Plan My Trip' and 'Chat on WhatsApp' calls to action run throughout the site, backed by a dedicated 24/7 phone line for wildlife trips. Visitors describe their trip length and interests and get a custom itinerary and quote back with no obligation. The site also ships with a dark mode toggle and a persistent accessibility widget available on every page.",
    ],
    stack: ["HTML/CSS", "JavaScript", "TypeScript", "PHP", "MySQL"],
    liveUrl: "https://incarnate.lk/tours/",
    contribution: [
      "Designed and built the entire public facing site solo - Home, Experiences, Destinations, and Wellness pages, end to end.",
      "Built the destinations and wellness content, showcasing curated local spots (Mini World's End, Bomburu Ella/Perawella Falls) and the Ayurvedic Spa and Fish Therapy offerings.",
      "Built the WhatsApp first trip planning flow as the primary call to action, backed by a dedicated 24/7 contact line for wildlife trips, instead of a fixed booking form.",
      "Implemented dark mode and a site wide accessibility widget.",
      "Owned the entire project independently, from initial build through to ongoing content updates.",
    ],
    cover: "/images/projects/incarnate-tours/hero-banner.jpg",
    gallery: [
      "/images/projects/incarnate-tours/destinations-page.jpg",
      "/images/projects/incarnate-tours/wellness-page.jpg",
      "/images/projects/incarnate-tours/why-travel-with-us.jpg",
      "/images/projects/incarnate-tours/hero-trip-planning.jpg",
    ],
    featured: true,
    confidential: false,
  },
];

export function getInternshipProjectBySlug(slug: string) {
  return internshipProjects.find((p) => p.slug === slug);
}