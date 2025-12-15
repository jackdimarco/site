import Image from "next/image";
import { Link } from "./Link";
import { SocialLinks } from "./SocialLinks";

export function About() {
  return (
    <section className="space-y-8 py-5 md:py-6 section-bordered">
      <div className="flex items-center gap-3">
        <Image
          src="/pfp.jpeg"
          alt="Jack DiMarco"
          width={48}
          height={48}
          className="flex-shrink-0"
        />
        <h1 className="text-heading leading-none">
          Jack DiMarco
        </h1>
      </div>
      <div className="space-y-3">
        <p className="text-body text-muted-foreground">
          I&apos;m currently a Senior Software Engineer at <Link href="https://www.salesforce.com">Salesforce</Link>, building AI agents for Commerce. Before that, I studied Computer Science at the <Link href="https://www.gatech.edu">Georgia Institute of Technology</Link>, where I graduated with a Bachelor&apos;s degree.
        </p>
        <p className="text-body text-muted-foreground">
          I live in Atlanta, Georgia with my beautiful wife and our dog <Link href="/millie">Millie</Link>. In my free time I enjoy lifting, walking my dog, playing guitar, and experimenting with new tech.
        </p>
      </div>
      <SocialLinks />
    </section>
  );
}
