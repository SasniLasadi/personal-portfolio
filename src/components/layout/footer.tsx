import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  { icon: Github, href: siteConfig.social.github, label: "GitHub", external: true },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn", external: true },
  { icon: Phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, label: "Phone" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 py-12 text-center md:flex-row md:items-center md:justify-between md:px-10 md:text-left">
        <div>
          <p className="font-display text-lg font-extrabold text-ink">{siteConfig.logotype}</p>
          <p className="mt-1 font-body text-sm text-ink-soft">{siteConfig.location}</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-ink/10 bg-bg-soft text-ink transition-colors hover:bg-ink hover:text-hero-bg"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-ink-soft/70">
          © {new Date().getFullYear()} {siteConfig.name} · Colombo, Sri Lanka
        </p>
      </div>
    </footer>
  );
}