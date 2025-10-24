"use client";

import { useState } from "react";
import type { GalleryImage } from "@/utils/getGalleryImg";
import Card from "./card";

export default function GallerySection({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  if (!images?.length) return <p>Žádné příspěvky nebyly nalezeny.</p>;

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full mx-auto">
        {images.slice(0, 2).map((image) => (
          <button
            key={image.title}
            onClick={() => setSelectedImage(image)}
            className="block hover:scale-[1.01] transition duration-300 z-10 focus:outline-none"
          >
            <Card className="z-10 aspect-square cursor-pointer">
              <div className="w-full h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.image ?? ""}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </button>
        ))}
      </div>

      {/* Full-size modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-[90%] mx-auto"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl z-50 cursor-pointer"
              aria-label="Zavřít"
            >
              &times;
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage.image ?? ""}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
            <p className="text-center text-white mt-4 text-lg font-medium">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
