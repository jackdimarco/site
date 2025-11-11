export const siteConfig = {
  name: "Jack DiMarco",
  description: "Jack DiMarco's personal website",

  // Bio text displayed on the homepage
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",

  // Social media links
  links: {
    github: "https://github.com/jackdimarco",
    linkedin: "https://linkedin.com/in/jackdimarco",
    twitter: "https://x.com/jackbdimarco",
    email: "mailto:hello@jdimarco.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
