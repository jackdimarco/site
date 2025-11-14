interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
}

const JOBS: Job[] = [
  {
    company: "Company 1",
    role: "Job Title 1",
    period: "2022 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    company: "Company 2",
    role: "Job Title 2",
    period: "2020 - 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    company: "Company 3",
    role: "Job Title 3",
    period: "2019 - 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
];

export function Experience() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="space-y-8">
        {JOBS.map((job) => (
          <div key={`${job.company}-${job.period}`} className="space-y-2">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="text-lg font-medium">{job.role}</h3>
              <span className="text-sm text-muted">{job.period}</span>
            </div>
            <p className="text-base font-medium text-muted">{job.company}</p>
            <p className="text-body text-muted">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
