"use client";

import { useTheme } from "next-themes";
import { useState, useLayoutEffect } from "react";
import { SunIcon, MoonIcon } from "@/lib/icons";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useLayoutEffect runs before paint, making this the recommended approach
  // for preventing hydration mismatches with SSR
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by rendering placeholder during SSR
  if (!mounted) {
    return <div className="absolute top-8 right-0 w-10 h-10" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="absolute top-8 right-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
      style={{
        backgroundColor: 'var(--color-muted)',
        color: 'var(--color-muted-foreground)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-muted)';
      }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      type="button"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
