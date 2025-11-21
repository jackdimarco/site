"use client";

import { memo } from "react";
import { ScrambleText } from "./ScrambleText";
import { SectionHeader } from "./SectionHeader";

export const Projects = memo(function Projects() {
  return (
    <section className="space-y-4">
      <SectionHeader title="PROJECTS" number="02" />
      <p className="text-sm font-mono text-muted-foreground">
        <ScrambleText text="In development..." />
      </p>
    </section>
  );
});
