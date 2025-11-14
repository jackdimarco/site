import Image from "next/image";

const PHOTO_FILENAMES = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

export default function MilliePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {PHOTO_FILENAMES.map((filename, index) => (
        <div key={filename} className="aspect-square rounded-sm overflow-hidden bg-muted">
          <Image
            src={`/millie/${filename}`}
            alt={`Millie photo ${index + 1}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
