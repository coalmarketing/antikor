"use client";

import { useEffect, useState } from "react";
import type { GalleryImage } from "@/utils/getGalleryImg";
import Card from "./card";
import Image from "next/image";

export default function GallerySection({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images?.length) return <p>Žádné příspěvky nebyly nalezeny.</p>;

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full mx-auto">
        {images.map((image, idx) => (
          <button
            key={image.title}
            onClick={() => setSelectedIndex(idx)}
            className="block hover:scale-[1.01] transition duration-300 z-10 focus:outline-none"
          >
            <Card className="z-10 aspect-square cursor-pointer">
              <div className="w-full h-full">
                <Image
                  src={image.image ?? ""}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  fill
                  loading="lazy"
                />
              </div>
            </Card>
          </button>
        ))}
      </div>

      {/* Full-size modal */}
      {selectedIndex !== null && (
        <ModalViewer
          images={images}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onChangeIndex={(i) => setSelectedIndex(i)}
        />
      )}
    </>
  );
}

// Internal modal viewer with navigation and keyboard support
function ModalViewer({
  images,
  index,
  onClose,
  onChangeIndex,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onChangeIndex: (next: number) => void;
}) {
  const total = images.length;
  const current = images[index];

  const goPrev = () => onChangeIndex((index - 1 + total) % total);
  const goNext = () => onChangeIndex((index + 1) % total);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, index, onClose, total]);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Prohlížeč galerie"
    >
      <div
        className="relative max-w-5xl w-[90%] mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl z-50 cursor-pointer"
          aria-label="Zavřít"
        >
          &times;
        </button>

        {/* Prev button */}
        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white font-black rounded-full w-11 h-11 grid place-items-center pb-1/2 z-50"
          aria-label="Předchozí obrázek"
        >
          &lt;
        </button>

        {/* Next button */}
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white font-black rounded-full w-11 h-11 grid place-items-center pb-1/2 z-50"
          aria-label="Další obrázek"
        >
          &gt;
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.image ?? ""}
          alt={current.title}
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-lg"
        />
        <p className="text-center text-white mt-4 text-lg font-medium">
          {current.title}
        </p>
      </div>
    </div>
  );
}
