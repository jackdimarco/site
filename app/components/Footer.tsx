import { BonfireIcon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="mt-auto pt-8">
      <div
        className="border-t pt-6"
        style={{ borderColor: "color-mix(in srgb, var(--color-muted-foreground) 15%, transparent)" }}
      >
        <p className="text-sm text-muted-foreground font-mono flex items-center gap-2">
          <span className="text-accent">//</span> Be safe, friend. Don't you dare go hollow.
          <BonfireIcon className="w-4 h-4 text-accent opacity-70" />
        </p>
      </div>
    </footer>
  );
}
