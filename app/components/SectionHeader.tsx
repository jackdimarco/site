"use client";

import { memo } from "react";
import { AsteriskIcon } from "@/lib/icons";
import { ScrambleText } from "./ScrambleText";

interface SectionHeaderProps {
  title: string;
  number: string;
}

export const SectionHeader = memo(function SectionHeader({
  title,
  number,
}: SectionHeaderProps) {
  return (
    <h2 className="text-section-heading flex items-center gap-2">
      <span className="color-block-square">
        <AsteriskIcon className="w-4 h-4" />
      </span>
      <ScrambleText text={title} />
      <span className="text-xs font-mono text-muted-foreground ml-auto">
        <ScrambleText text={`[${number}]`} />
      </span>
    </h2>
  );
});
