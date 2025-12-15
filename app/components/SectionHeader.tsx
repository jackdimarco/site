import Image from "next/image";

interface SectionHeaderProps {
  title: string;
  number: string;
}

export function SectionHeader({ title, number }: SectionHeaderProps) {
  return (
    <h2 className="text-section-heading flex items-center gap-2">
      <Image
        src="/icon.svg"
        alt=""
        width={24}
        height={24}
        className="flex-shrink-0"
      />
      {title}
      <span className="text-xs text-muted-foreground ml-auto">
        [{number}]
      </span>
    </h2>
  );
}
