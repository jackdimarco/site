import { SectionHeader } from "./SectionHeader";

export function Writing() {
  return (
    <section className="space-y-4 py-5 md:py-6 section-bordered">
      <SectionHeader title="Writing" number="03" />
      <p className="text-sm text-muted-foreground">
        In development...
      </p>
    </section>
  );
}
