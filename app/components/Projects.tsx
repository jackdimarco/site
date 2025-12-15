import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section className="space-y-4 py-5 md:py-6 section-bordered">
      <SectionHeader title="Projects" number="02" />
      <p className="text-sm text-muted-foreground">
        In development...
      </p>
    </section>
  );
}
