import Image from "next/image";

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
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
    </h2>
  );
}
