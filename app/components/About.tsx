import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section className="w-full max-w-2xl">
      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {siteConfig.bio}
      </p>
    </section>
  );
}
