"use client";

import { memo } from "react";
import Image from "next/image";
import { Link } from "./Link";
import { ScrambleText } from "./ScrambleText";
import { SectionHeader } from "./SectionHeader";
import { JOBS } from "@/lib/data";

export const Experience = memo(function Experience() {
  return (
    <section className="space-y-4">
      <SectionHeader title="EXPERIENCE" number="01" />

      <div>
        <div className="border-cyber" />
        {JOBS.map((job) => (
          <div key={`${job.company}-${job.period}`}>
            <div className="py-1">
              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 w-8 h-8 bg-muted flex items-center justify-center overflow-hidden">
                  {job.logo ? (
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={24}
                      height={24}
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
            <div className="border-cyber" />
          </div>
        ))}
      </div>
    </section>
  );
});
