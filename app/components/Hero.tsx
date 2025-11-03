import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <header className="w-full max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
        {siteConfig.name}
      </h1>
    </header>
  );
}
