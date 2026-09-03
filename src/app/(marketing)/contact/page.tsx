import type { Metadata } from "next";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Get in touch" };

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-content grid-cols-1 gap-14 px-6 py-12 md:grid-cols-[1fr_1.3fr] md:px-10 md:py-16">
      <div>
        <p className="font-mono text-sm text-ink-soft">05 / Contact</p>
        <h1 className="mt-3 text-balance font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
          Always open to a good <span className="text-accent">conversation.</span>
        </h1>
        <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-ink-soft">
          Whether it&apos;s a collaboration idea, a project you&apos;d like a second pair of
          hands on, or just a chance to connect - feel free to reach out.
        </p>

        <div className="mt-10 flex flex-col gap-5">
          <ContactDetail
            icon={<Mail size={16} />}
            label="Email"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
          <ContactDetail
            icon={<Github size={16} />}
            label="GitHub"
            value="SasniLasadi"
            href={siteConfig.social.github}
          />
          <ContactDetail
            icon={<Linkedin size={16} />}
            label="LinkedIn"
            value="sasni-lasadi"
            href={siteConfig.social.linkedin}
          />
          <ContactDetail
            icon={<Phone size={16} />}
            label="Phone"
            value={siteConfig.phone}
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          />
          <ContactDetail icon={<MapPin size={16} />} label="Location" value={siteConfig.location} />
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-surface p-6 sm:p-8">
        <ContactForm />
      </div>
    </section>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink">
        {icon}
      </span>
      <span>
        <span className="block font-mono text-[11px] uppercase tracking-wide text-ink-soft">
          {label}
        </span>
        <span className="block font-body text-sm text-ink">{value}</span>
      </span>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group">
      {content}
    </a>
  );
}