import { SocialLinks } from "./SocialLinks";
import { Link } from "./Link";

export function About() {
  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <p className="text-body text-muted">
          I'm currently a Senior Software Engineer at{" "}
          <Link href="https://www.salesforce.com">Salesforce</Link>, building AI automation
          tools. Before that, I studied Computer Science at the{" "}
          <Link href="https://www.gatech.edu">Georgia Institute of Technology</Link>, where I
          graduated with a Bachelor's degree.
        </p>
        <p className="text-body text-muted">
          I currently live in Atlanta, Georgia with my beautiful wife and our dog{" "}
          <Link href="/millie">Millie</Link>. In my free time I enjoy lifting, walking my dog,
          playing music, and experimenting with new tech.
        </p>
      </div>
      <SocialLinks />
    </section>
  );
}
