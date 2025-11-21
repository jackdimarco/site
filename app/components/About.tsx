"use client";

import { memo } from "react";
import { SocialLinks } from "./SocialLinks";
import { Link } from "./Link";
import { ScrambleText } from "./ScrambleText";

export const About = memo(function About() {
  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <p className="text-body text-muted-foreground">
          <ScrambleText text="I'm currently a Senior Software Engineer at " />
          <Link href="https://www.salesforce.com"><ScrambleText text="Salesforce" /></Link>
          <ScrambleText text=" building AI automation tools for Commerce. Before that, I studied Computer Science at the " />
          <Link href="https://www.gatech.edu"><ScrambleText text="Georgia Institute of Technology" /></Link>
          <ScrambleText text=", where I graduated with a Bachelor's degree." />
        </p>
        <p className="text-body text-muted-foreground">
          <ScrambleText text="I live in Atlanta, Georgia with my beautiful wife and our dog " />
          <Link href="/millie"><ScrambleText text="Millie" /></Link>
          <ScrambleText text=". In my free time I enjoy lifting, walking my dog, playing guitar, and experimenting with new tech." />
        </p>
      </div>
      <SocialLinks />
    </section>
  );
});
