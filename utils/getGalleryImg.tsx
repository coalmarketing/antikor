"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type GalleryImage = {
  title: string;
  image: string;
};

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const dir = path.join(process.cwd(), "content/gallery");
  const files = fs.readdirSync(dir);

  return files
    .map((filename): GalleryImage => {
      const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(fileContent);
      return {
        title: data.title || "",
        image: data.image || "",
      };
    })
    .sort((a, b) => (a.title < b.title ? 1 : -1));
}
