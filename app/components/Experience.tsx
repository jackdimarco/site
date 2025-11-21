"use client";

import { memo } from "react";
import Image from "next/image";
import { Link } from "./Link";
import { JOBS } from "@/lib/data";
import { ScrambleText } from "./ScrambleText";

export const Experience = memo(function Experience() {
  return (
    <section className="space-y-6">
      <h2 className="text-section-heading flex items-center gap-2">
        <span className="color-block-square"></span>
        <ScrambleText text="EXPERIENCE" />
        <span className="text-xs font-mono text-muted-foreground ml-auto">
          <ScrambleText text="[01]" />
        </span>
      </h2>

      <div>
        <div className="border-cyber-secondary" />
        {JOBS.map((job) => (
          <div key={`${job.company}-${job.period}`}>
            <div className="py-2">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-muted flex items-center justify-center overflow-hidden">
                  {job.logo ? (
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xs text-muted-foreground">Logo</span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-2">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      {job.companyUrl ? (
                        <Link href={job.companyUrl} className="font-bold text-sm md:text-base">
                          <ScrambleText text={job.company} />
                        </Link>
                      ) : (
                        <span className="font-bold text-sm md:text-base">
                          <ScrambleText text={job.company} />
                        </span>
                      )}
                      <span className="text-muted-foreground text-xs md:text-sm">
                        <ScrambleText text={job.role} />
                      </span>
                    </div>
                    <span className="text-xs md:text-sm font-mono text-muted-foreground whitespace-nowrap md:ml-auto">
                      <ScrambleText text={job.period} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-cyber-secondary" />
          </div>
        ))}
      </div>
    </section>
  );
});
