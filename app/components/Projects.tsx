"use client";

import { memo } from "react";
import { ScrambleText } from "./ScrambleText";
import { AsteriskIcon } from "@/lib/icons";

export const Projects = memo(function Projects() {
  return (
    <section className="space-y-4">
      <h2 className="text-section-heading flex items-center gap-2">
        <span className="color-block-square">
          <AsteriskIcon className="w-4 h-4" />
        </span>
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
});
