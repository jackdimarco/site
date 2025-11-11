import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section className="w-full max-w-2xl">
      <p className="text-base md:text-lg leading-relaxed text-muted">
        {siteConfig.bio}
      </p>
    </section>
  );
}
