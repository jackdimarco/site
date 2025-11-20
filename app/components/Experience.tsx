import Image from "next/image";
import { Link } from "./Link";
import { JOBS } from "@/lib/data";

export function Experience() {
  return (
    <section className="space-y-6">
      <h2 className="text-section-heading">
        <span className="text-accent mr-2 -ml-6">//</span>
        EXPERIENCE
      </h2>

      <div>
        <div className="border-cyber" />
        {JOBS.map((job) => (
          <div key={`${job.company}-${job.period}`}>
            <div className="flex items-center justify-between gap-3 py-2">
              <div className="flex items-center gap-3 min-w-0">
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

                <div className="min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    {job.companyUrl ? (
                      <Link href={job.companyUrl} className="font-bold">
                        {job.company}
                      </Link>
                    ) : (
                      <span className="font-bold">{job.company}</span>
                    )}
                    <span className="text-muted-foreground text-sm">{job.role}</span>
                  </div>
                </div>
              </div>

              <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                {job.period}
              </span>
            </div>
            <div className="border-cyber" />
          </div>
        ))}
      </div>
    </section>
  );
}
