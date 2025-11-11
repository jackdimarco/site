import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section className="w-full max-w-2xl">
      <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
        {siteConfig.bio}
      </p>
    </section>
  );
}
