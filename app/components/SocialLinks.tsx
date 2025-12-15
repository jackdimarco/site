import { GitHubIcon, LinkedInIcon, TwitterIcon, EmailIcon } from "@/lib/icons";

const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/jackdimarco", Icon: GitHubIcon },
  { name: "LinkedIn", url: "https://linkedin.com/in/jackdimarco", Icon: LinkedInIcon },
  { name: "Twitter / X", url: "https://x.com/jackbdimarco", Icon: TwitterIcon },
  { name: "Email", url: "mailto:hello@jdimarco.com", Icon: EmailIcon },
];

export function SocialLinks() {
  return (
    <nav className="flex flex-wrap gap-4 items-center" aria-label="Social media links">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-transparent transition-all social-link-button"
          aria-label={`Visit ${link.name} profile`}
        >
          <link.Icon className="w-5 h-5" />
          <span className="text-sm">{link.name}</span>
        </a>
      ))}
    </nav>
  );
}
