import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { SocialLinks } from "./components/SocialLinks";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex justify-center px-6">
      <div className="w-full max-w-2xl relative">
        <ThemeToggle />
        <main className="flex flex-col min-h-screen py-20 space-y-16 md:space-y-20">
          <Hero />
          <About />
          <SocialLinks />
        </main>
      </div>
    </div>
  );
}
