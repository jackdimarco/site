"use client";

import { memo } from "react";
import { ScrambleText } from "./ScrambleText";
import { SectionHeader } from "./SectionHeader";

export const Writing = memo(function Writing() {
  return (
    <section className="space-y-4">
      <SectionHeader title="WRITING" number="03" />
      <p className="text-sm font-mono text-muted-foreground">
        <ScrambleText text="In development..." />
      </p>
    </section>
  );
});
