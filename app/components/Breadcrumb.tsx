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
    <nav className="flex items-center gap-2 text-body text-muted">
      <FolderIcon className="w-4 h-4" />
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-2">
          {item.href ? (
            <NextLink
              href={item.href}
              className="hover:text-foreground transition-colors underline"
            >
              {item.label}
            </NextLink>
          ) : (
            <span className="text-foreground">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
}
