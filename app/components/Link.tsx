import { memo } from "react";
import NextLink from "next/link";
import type { ComponentProps } from "react";

type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  href: string;
};

export const Link = memo(function Link({ href, children, className, ...props }: LinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const baseClassName = className ?? "text-accent hover:opacity-70 transition-opacity";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClassName}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={baseClassName} {...props}>
      {children}
    </NextLink>
  );
});
