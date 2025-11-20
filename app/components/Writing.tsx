"use client";

import { ScrambleText } from "./ScrambleText";

export function Writing() {
  return (
    <section className="space-y-6">
      <h2 className="text-section-heading flex items-center gap-2">
        <span className="color-block-square"></span>
        <ScrambleText text="WRITING" />
      </h2>
      <p className="text-sm font-mono text-muted-foreground">
        <ScrambleText text="Coming soon..." />
      </p>
    </section>
  );
}
