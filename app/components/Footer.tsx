import { GitHubIcon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="mt-auto section-bordered">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            v1.0
          </p>
          <p className="text-sm text-muted-foreground">
            Be safe, friend.
          </p>
        </div>
        <a
          href="https://github.com/jackdimarco/site"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 aspect-square flex items-center justify-center theme-button flex-shrink-0"
          aria-label="View source code on GitHub"
        >
          <GitHubIcon className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
