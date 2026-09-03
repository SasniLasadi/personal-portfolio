import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg px-6 text-center text-ink">
      <p className="font-mono text-sm text-ink-soft">404</p>
      <h1 className="font-display text-4xl font-extrabold">This page wandered off.</h1>
      <p className="max-w-sm font-body text-ink-soft">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <ButtonLink href="/">Back home</ButtonLink>
    </div>
  );
}
