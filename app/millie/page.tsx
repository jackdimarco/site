import Image from "next/image";

const PHOTO_FILENAMES = [
  "millie1.jpeg",
  "millie2.JPEG",
  "millie3.JPEG",
  "millie4.JPEG",
  "millie5.JPG",
  "millie6.JPEG",
  "millie7.JPEG",
  "millie8.JPG",
  "millie9.JPEG",
  "millie10.JPEG",
  "millie11.JPEG",
  "millie12.JPEG",
  "millie13.JPG",
  "millie14.JPG",
  "millie15.JPEG",
  "millie16.JPEG",
  "millie17.JPEG",
  "millie18.JPEG",
];

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
