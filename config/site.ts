export const siteConfig = {
  name: "Jack DiMarco",
  description: "Personal website of Jack DiMarco, Software Engineer",

  // Bio text displayed on the homepage
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",

  // Social media links
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your.email@example.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
