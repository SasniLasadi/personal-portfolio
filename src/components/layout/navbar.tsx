"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-bg">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="font-display text-lg font-extrabold tracking-tight text-ink">
          {siteConfig.logotype}
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {siteConfig.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 font-body text-[15px] transition-colors",
                  active
                    ? "font-semibold text-ink after:absolute after:-bottom-[21px] after:left-0 after:right-0 after:h-[2px] after:bg-accent after:content-['']"
                    : "text-ink-soft hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-ink/10 transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 overflow-hidden px-6 py-3">
          {siteConfig.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-2 py-2 font-body text-base transition-colors",
                  active ? "font-semibold text-ink" : "text-ink-soft"
                )}
              >
                {active && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}