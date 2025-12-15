import Image from "next/image";
import { Link } from "./Link";
import { SectionHeader } from "./SectionHeader";
import { JOBS } from "@/lib/data";

export function Experience() {
  return (
    <section className="space-y-4 py-5 md:py-6 section-bordered">
      <SectionHeader title="Experience" number="01" />

      <div>
        {JOBS.map((job, index) => (
          <div key={`${job.company}-${job.period}`}>
            <div className="py-1.5">
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
                        <Link href={job.companyUrl} className="font-semibold text-sm md:text-base">
                          {job.company}
                        </Link>
                      ) : (
                        <span className="font-semibold text-sm md:text-base">
                          {job.company}
                        </span>
                      )}
                      <span className="text-muted-foreground text-xs md:text-sm">
                        {job.role}
                      </span>
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap md:ml-auto">
                      {job.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {index < JOBS.length - 1 && <div className="divider-dotted" />}
          </div>
        ))}
      </div>
    </section>
  );
}
