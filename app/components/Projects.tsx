import { Link } from "./Link";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["Technology 1", "Technology 2", "Technology 3"],
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    tech: ["Technology 1", "Technology 2", "Technology 3", "Technology 4"],
    link: "https://github.com/example/project",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    tech: ["Technology 1", "Technology 2", "Technology 3"],
    link: "https://github.com/example/project",
  },
];

export function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="space-y-6">
        {PROJECTS.map((project) => (
          <div key={project.title} className="space-y-2">
            <div className="flex items-baseline gap-2 flex-wrap">
              <h3 className="text-lg font-medium">{project.title}</h3>
              {project.link && (
                <Link href={project.link}>
                  <span className="text-sm">View →</span>
                </Link>
              )}
            </div>
            <p className="text-body text-muted">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-2 py-1 rounded-sm bg-muted text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
