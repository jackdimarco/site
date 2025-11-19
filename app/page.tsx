import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Writing } from "./components/Writing";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Writing />
    </>
  );
}
