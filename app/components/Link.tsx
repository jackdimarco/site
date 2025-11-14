import NextLink from "next/link";
import type { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
}

export function Link({ href, children }: LinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const className = "underline hover:opacity-70 transition-opacity";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
}
