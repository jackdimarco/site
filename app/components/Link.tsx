import NextLink from "next/link";
import type { ComponentProps } from "react";

type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  href: string;
};

export function Link({ href, children, className, ...props }: LinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={className} {...props}>
      {children}
    </NextLink>
  );
}
