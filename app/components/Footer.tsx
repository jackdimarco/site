import { RSSIcon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="mt-auto section-bordered">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Site v1.0
          </p>
          <p className="text-sm text-muted-foreground">
            Be safe, friend.
          </p>
        </div>
        <a
          href="/feed.xml"
          className="w-10 h-10 aspect-square flex items-center justify-center theme-button flex-shrink-0"
          aria-label="RSS feed"
        >
          <RSSIcon className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
