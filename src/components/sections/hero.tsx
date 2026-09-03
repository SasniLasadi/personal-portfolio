import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-77px)] items-center overflow-hidden bg-hero-bg"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/images/hero-illustration-light.svg"
          alt=""
          fill
          priority
          className="object-cover dark:hidden"
        />
        <Image
          src="/images/hero-illustration-dark.svg"
          alt=""
          fill
          priority
          className="hidden object-cover dark:block"
        />
      </div>

      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-content grid-cols-1 items-center gap-14 px-6 py-16 md:grid-cols-2 md:gap-10 md:px-10 md:py-20">
        <div className="animate-fade-up text-center md:text-left">
          <p className="font-mono text-sm text-ink-soft">{siteConfig.role}</p>

          <h1 className="mt-4 text-balance font-display text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
            Crafting <br />
            <em className="text-accent-warm not-italic">solutions</em>
            <br />
            through code.
          </h1>

          <p className="mx-auto mt-6 max-w-md font-body text-base leading-relaxed text-ink-soft md:mx-0">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-display text-base font-semibold text-hero-bg shadow-[0_6px_0_0_rgba(0,0,0,0.25)] transition-all duration-200 hover:brightness-110 active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.25)]"
            >
              View my work
              <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/30 px-7 py-3.5 font-display text-base font-semibold text-ink transition-all duration-200 hover:border-ink/60"
            >
              Download CV
              <Download size={16} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:120ms] md:max-w-lg">
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-surface shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)]">
            <Image
              src="/images/portrait.jpg"
              alt={`Portrait of ${siteConfig.name}`}
              width={640}
              height={795}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}