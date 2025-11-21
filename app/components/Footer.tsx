"use client";

import { memo } from "react";
import { ScrambleText } from "./ScrambleText";
import { GitHubIcon } from "@/lib/icons";

export const Footer = memo(function Footer() {
  return (
    <footer className="mt-auto pt-8">
      <div className="border-t border-border/30 pt-6 space-y-1 opacity-50">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-mono">
              <span className="text-accent">//</span> <ScrambleText text="SYS v0.1" />
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-accent">//</span> <ScrambleText text="Be safe, friend. Don't you dare go hollow." />
            </p>
          </div>
          <a
            href="https://github.com/jackdimarco/site"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center theme-button"
            aria-label="View source code on GitHub"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
});
