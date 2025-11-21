"use client";

import { memo } from "react";
import { ScrambleText } from "./ScrambleText";

export const Writing = memo(function Writing() {
  return (
    <section className="space-y-6">
      <h2 className="text-section-heading flex items-center gap-2">
        <span className="color-block-square"></span>
        <ScrambleText text="WRITING" />
        <span className="text-xs font-mono text-muted-foreground ml-auto">
          <ScrambleText text="[03]" />
        </span>
      </h2>
      <p className="text-sm font-mono text-muted-foreground">
        <ScrambleText text="In development..." />
      </p>
    </section>
  );
});
