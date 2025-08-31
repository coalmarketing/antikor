"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  body: string;
  image: string;
};

export async function getPosts(): Promise<BlogPost[]> {
  const dir = path.join(process.cwd(), "public/content/blog");
  const files = fs.readdirSync(dir);

  return files
    .map((filename): BlogPost => {
      const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(fileContent);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "",
        date: data.date || "",
        body: content,
        image: data.image || "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
