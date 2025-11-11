import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { SocialLinks } from "./components/SocialLinks";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center px-6">
      <ThemeToggle />
      <div className="w-full max-w-2xl">
        <main className="flex flex-col min-h-screen py-20 space-y-16 md:space-y-20">
          <Hero />
          <About />
          <SocialLinks />
        </main>
      </div>
    </div>
  );
}
