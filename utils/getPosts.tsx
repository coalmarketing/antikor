"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  filename: string;
  title: string;
  date: string;
  body: string;
  image: string;
};

function sanitizeSlug(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getPosts(): Promise<BlogPost[]> {
  const dir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(dir);

  return files
    .map((filename): BlogPost => {
      const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(fileContent);
      const filenameSlug = filename.replace(/\.md$/, "");
      return {
        slug: data.slug || sanitizeSlug(filenameSlug),
        filename: filenameSlug,
        title: data.title || "",
        date: data.date || "",
        body: content,
        image: data.image || "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
