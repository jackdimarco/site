import { siteConfig } from "@/config/site";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <header className="w-full max-w-2xl flex items-center justify-between gap-8">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        {siteConfig.name}
      </h1>
      <SocialLinks />
    </header>
  );
}
