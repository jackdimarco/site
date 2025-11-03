# Personal Website

A minimal, modern personal website built with Next.js, featuring dark/light mode and a clean, Apple-inspired design.

## Features

- ⚡ Built with **Next.js 16** and **React 19**
- 🎨 **Tailwind CSS v4** for styling
- 🌓 Dark/light mode with **next-themes**
- 📱 Fully responsive design
- ♿ Accessible with proper ARIA labels and semantic HTML
- 🎯 TypeScript for type safety
- 🚀 Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

### Configuration

All site content is centralized in `config/site.ts`. Update this file to personalize your website:

```typescript
export const siteConfig = {
  name: "Your Name",
  description: "Your description",
  bio: "Your bio text here...",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your.email@example.com",
  },
};
```

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── About.tsx          # Bio section
│   │   ├── Hero.tsx           # Name/title
│   │   ├── SocialLinks.tsx    # Social media buttons
│   │   ├── ThemeProvider.tsx  # Theme context
│   │   └── ThemeToggle.tsx    # Dark/light mode toggle
│   ├── globals.css            # Global styles & Tailwind config
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── config/
│   └── site.ts                # Site configuration
├── lib/
│   └── icons/
│       └── index.tsx          # SVG icon components
└── public/                     # Static assets
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Theme**: next-themes
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono

## Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to any platform that supports Next.js.

## License

MIT
