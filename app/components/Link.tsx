import NextLink from "next/link";
import type { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function Link({ href, children, className }: LinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const baseClassName = className ?? "underline hover:opacity-70 transition-opacity";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClassName}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={baseClassName}>
      {children}
    </NextLink>
  );
}
