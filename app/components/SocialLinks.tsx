"use client";

import { siteConfig } from "@/config/site";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  EmailIcon,
} from "@/lib/icons";
import type { ReactNode } from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: siteConfig.links.github,
      icon: <GitHubIcon />,
    },
    {
      name: "LinkedIn",
      url: siteConfig.links.linkedin,
      icon: <LinkedInIcon />,
    },
    {
      name: "Twitter",
      url: siteConfig.links.twitter,
      icon: <TwitterIcon />,
    },
    {
      name: "Email",
      url: siteConfig.links.email,
      icon: <EmailIcon />,
    },
  ];

  return (
    <nav
      className="flex flex-wrap gap-4 items-center w-full max-w-2xl"
      aria-label="Social media links"
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-lg flex items-center justify-center transition-colors"
          style={{
            backgroundColor: 'var(--color-muted)',
            color: 'var(--color-muted-foreground)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-muted)';
          }}
          aria-label={`Visit ${link.name} profile`}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  );
}
