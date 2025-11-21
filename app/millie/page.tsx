"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";

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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd || !selectedImage) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    const currentIndex = PHOTO_FILENAMES.indexOf(selectedImage);

    if (isLeftSwipe && currentIndex < PHOTO_FILENAMES.length - 1) {
      setSelectedImage(PHOTO_FILENAMES[currentIndex + 1]);
    }
    if (isRightSwipe && currentIndex > 0) {
      setSelectedImage(PHOTO_FILENAMES[currentIndex - 1]);
    }
  }, [touchStart, touchEnd, selectedImage]);

  useEffect(() => {
    if (!selectedImage) {
      // Blur the focused element when modal closes
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = PHOTO_FILENAMES.indexOf(selectedImage);
        if (currentIndex < PHOTO_FILENAMES.length - 1) {
          setSelectedImage(PHOTO_FILENAMES[currentIndex + 1]);
        }
      } else if (e.key === "ArrowLeft") {
        const currentIndex = PHOTO_FILENAMES.indexOf(selectedImage);
        if (currentIndex > 0) {
          setSelectedImage(PHOTO_FILENAMES[currentIndex - 1]);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {PHOTO_FILENAMES.map((filename, index) => (
          <button
            key={filename}
            onClick={() => setSelectedImage(filename)}
            className="relative aspect-square cursor-pointer group focus:outline-none"
            aria-label={`View Millie photo ${index + 1}`}
          >
            <div
              className="absolute inset-0 -translate-x-0.5 -translate-y-0.5 bg-[var(--color-accent)] group-hover:bg-[var(--color-accent-secondary)] transition-colors"
            />
            <div className="relative w-full h-full overflow-hidden bg-muted border border-border group-hover:border-accent transition-colors">
              <Image
                src={`/millie/${filename}`}
                alt={`Millie photo ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (() => {
        const currentIndex = PHOTO_FILENAMES.indexOf(selectedImage);
        const prevImage = currentIndex > 0 ? PHOTO_FILENAMES[currentIndex - 1] : null;
        const nextImage = currentIndex < PHOTO_FILENAMES.length - 1 ? PHOTO_FILENAMES[currentIndex + 1] : null;

        return (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex items-center justify-center touch-none"
            onClick={() => setSelectedImage(null)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 md:w-10 md:h-10 flex items-center justify-center bg-white text-black hover:bg-accent active:bg-accent transition-colors"
              aria-label="Close"
            >
              <CloseIcon className="w-6 h-6" />
            </button>

            {/* Navigation buttons - hidden on mobile, shown on desktop */}
            {prevImage && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(prevImage);
                }}
                className="hidden md:flex absolute left-4 z-10 w-12 h-12 items-center justify-center bg-white text-black hover:bg-accent transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
            )}

            {nextImage && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(nextImage);
                }}
                className="hidden md:flex absolute right-4 z-10 w-12 h-12 items-center justify-center bg-white text-black hover:bg-accent transition-colors"
                aria-label="Next photo"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            )}

            <Image
              src={`/millie/${selectedImage}`}
              alt="Millie photo enlarged"
              width={1200}
              height={1200}
              className="w-auto h-auto max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)] object-contain pointer-events-none"
              onClick={(e) => e.stopPropagation()}
              priority
            />

            {/* Preload adjacent images using hidden Image components */}
            {prevImage && (
              <Image
                src={`/millie/${prevImage}`}
                alt=""
                width={1200}
                height={1200}
                className="hidden"
                priority
              />
            )}
            {nextImage && (
              <Image
                src={`/millie/${nextImage}`}
                alt=""
                width={1200}
                height={1200}
                className="hidden"
                priority
              />
            )}
          </div>
        );
      })()}
    </>
  );
}
