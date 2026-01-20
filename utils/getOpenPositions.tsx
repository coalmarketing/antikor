"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type OpenPosition = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  location?: string;
  type?: string;
  published?: boolean;
  image?: string;
};

export async function getOpenPositions(): Promise<OpenPosition[]> {
  const dir = path.join(process.cwd(), "content/positions");
  const files = fs.readdirSync(dir);

  return files
    .map((filename): OpenPosition => {
      const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "",
        blurb: data.blurb || "",
        description: data.description || "",
        location: data.location || undefined,
        type: data.type || undefined,
        published: data.published !== false,
        image: data.image || undefined,
      };
    })
    .filter((pos) => pos.published)
    .sort((a, b) => a.title.localeCompare(b.title));
}
