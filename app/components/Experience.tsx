import Image from "next/image";
import { Link } from "./Link";
import { SectionHeader } from "./SectionHeader";
import { JOBS } from "@/lib/data";

export function Experience() {
  return (
    <section className="space-y-4 py-5 md:py-6 section-bordered">
      <SectionHeader title="Experience" />

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
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2">
                    <div className="flex items-baseline gap-2">
                      {job.companyUrl ? (
                        <Link href={job.companyUrl} className="font-semibold whitespace-nowrap">
                          {job.company}
                        </Link>
                      ) : (
                        <span className="font-semibold whitespace-nowrap">
                          {job.company}
                        </span>
                      )}
                      <span className="text-muted-foreground text-sm">
                        {job.role}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {index < JOBS.length - 1 && <div className="divider-dotted ml-1" />}
          </div>
        ))}
      </div>
    </section>
  );
}
