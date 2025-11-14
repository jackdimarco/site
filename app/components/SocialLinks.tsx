import { GitHubIcon, LinkedInIcon, TwitterIcon, EmailIcon } from "@/lib/icons";
import type { ReactNode } from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/jackdimarco",
    icon: <GitHubIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jackdimarco",
    icon: <LinkedInIcon />,
  },
  {
    name: "Twitter",
    url: "https://x.com/jackbdimarco",
    icon: <TwitterIcon />,
  },
  {
    name: "Email",
    url: "mailto:hello@jdimarco.com",
    icon: <EmailIcon />,
  },
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
          className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
          aria-label={`Visit ${link.name} profile`}
        >
          <span className="w-5 h-5">{link.icon}</span>
          <span className="text-base">{link.name}</span>
        </a>
      ))}
    </nav>
  );
}
