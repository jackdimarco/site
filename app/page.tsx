import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Writing } from "./components/Writing";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <About />
      <Experience />
      <Projects />
      <Writing />
    </div>
  );
}
