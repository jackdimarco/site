"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb, type BreadcrumbItem } from "./Breadcrumb";
import { ThemeToggle } from "./ThemeToggle";

function buildBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  const isHome = segments.length === 0;

  const items: BreadcrumbItem[] = [{ label: "home", href: isHome ? undefined : "/" }];

  segments.forEach((segment, index) => {
    const isCurrentPage = index === segments.length - 1;
    const href = isCurrentPage ? undefined : `/${segments.slice(0, index + 1).join("/")}`;
    items.push({ label: segment, href });
  });

  return items;
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-2xl flex items-center justify-between gap-8">
      <Breadcrumb items={buildBreadcrumbItems(pathname)} />
      <ThemeToggle />
    </header>
  );
}
