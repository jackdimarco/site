import { BonfireIcon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="mt-auto pt-8">
      <div
        className="border-t pt-6"
        style={{ borderColor: "color-mix(in srgb, var(--color-muted-foreground) 15%, transparent)" }}
      >
        <p className="text-sm text-muted font-mono flex items-center gap-2">
          <span className="opacity-50">//</span> Be safe, friend. Don't you dare go hollow.
          <BonfireIcon className="w-4 h-4 opacity-50" />
        </p>
      </div>
    </footer>
  );
}
