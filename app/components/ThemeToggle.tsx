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
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center theme-button shadow-lg z-50"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      type="button"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
