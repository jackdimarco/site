"use client";

import Image from "next/image";
import { ScrambleText } from "./ScrambleText";

export function Hero() {
  return (
    <h1 className="text-heading flex items-center gap-3">
      <span className="color-block !p-0.5 aspect-square">
        <Image
          src="/icon.png"
          alt="JD"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </span>
      <ScrambleText text="JACK DIMARCO" />
    </h1>
  );
}
