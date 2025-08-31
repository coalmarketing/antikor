"use client";

import type { GalleryImage } from "@/utils/getGalleryImg";
import Link from "next/link";
import Card from "./card";

export default function GallerySection({
  images: images,
}: {
  images: GalleryImage[];
}) {
  if (!images?.length) return <p>Žádné příspěvky nebyly nalezeny.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full mx-auto">
      {images.slice(0, 2).map((image) => (
        <Link
          href={`/gallery/${image.title}`}
          key={image.title}
          className="block hover:scale-101 transition duration-300 z-50"
        >
          <Card className="z-50 aspect-square">
            <div className="w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.image ?? ""}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
