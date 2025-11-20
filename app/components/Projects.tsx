"use client";

import { ScrambleText } from "./ScrambleText";

export function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-section-heading flex items-center gap-2">
        <span className="color-block-square"></span>
        <ScrambleText text="PROJECTS" />
        <span className="text-xs font-mono text-muted-foreground ml-auto">
          <ScrambleText text="[02]" />
        </span>
      </h2>
      <p className="text-sm font-mono text-muted-foreground">
        <ScrambleText text="In development..." />
      </p>
    </section>
  );
}
