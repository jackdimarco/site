import NextLink from "next/link";
import { FolderIcon } from "@/lib/icons";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-3 text-lg font-mono h-10">
      <FolderIcon className="w-6 h-6 text-accent" />
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-3">
          {item.href ? (
            <NextLink
              href={item.href}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </NextLink>
          ) : (
            <span className="text-foreground">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <span className="text-border">/</span>
          )}
        </span>
      ))}
    </nav>
  );
}
