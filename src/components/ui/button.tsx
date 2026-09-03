import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  variant?: "primary" | "ghost" | "outline";
  size?: "md" | "lg";
  children: ReactNode;
  className?: string;
}

const variants = {
  primary:
    "bg-accent text-accent-ink hover:brightness-110 shadow-[0_6px_0_0_rgba(0,0,0,0.16)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.16)] active:translate-y-1",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  outline: "bg-transparent text-ink border border-ink/25 hover:border-ink/60",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-200 whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: BaseProps & { href: string }) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}
