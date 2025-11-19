import Image from "next/image";
import { Link } from "./Link";
import { JOBS } from "@/lib/data";

export function Experience() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="border-y border-dotted-spaced divide-dotted-spaced">
        {JOBS.map((job) => (
          <div
            key={`${job.company}-${job.period}`}
            className="flex items-center justify-between gap-2 py-2"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-10 h-10 rounded-sm bg-muted/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                {job.logo ? (
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={30}
                    height={30}
                    className="object-contain rounded-sm"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs text-muted">Logo</span>
                )}
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  {job.companyUrl ? (
                    <Link href={job.companyUrl} className="hover:opacity-70 transition-opacity">
                      <span className="font-bold">{job.company}</span>
                    </Link>
                  ) : (
                    <span className="font-bold">{job.company}</span>
                  )}
                  <span className="text-muted">{job.role}</span>
                </div>
              </div>
            </div>
            <span className="text-sm text-muted whitespace-nowrap">
              {job.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
