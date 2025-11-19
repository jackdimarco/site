"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PHOTO_FILENAMES.map((filename, index) => (
          <button
            key={filename}
            onClick={() => setSelectedImage(filename)}
            className="aspect-square rounded-sm overflow-hidden bg-muted cursor-pointer"
            aria-label={`View Millie photo ${index + 1}`}
          >
            <Image
              src={`/millie/${filename}`}
              alt={`Millie photo ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <Image
            src={`/millie/${selectedImage}`}
            alt="Millie photo enlarged"
            width={1200}
            height={1200}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
