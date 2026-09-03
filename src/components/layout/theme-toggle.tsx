"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    // Dark theme is the default for this site — only fall back to a
    // stored preference when the person has explicitly toggled it.
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      aria-label="Toggle color theme"
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}