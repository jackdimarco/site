"use client";

import { ScrambleText } from "./ScrambleText";

export function Hero() {
  return (
    <h1 className="text-heading flex items-center gap-3">
      <span className="color-block">//</span>
      <ScrambleText text="JACK DIMARCO" />
    </h1>
  );
}
