"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type RegionalSupportEntry = {
  slug: string;
  title: string;
  body: string;
  logo?: string;
  logo_alt?: string;
  link_label?: string;
  link_url?: string;
  order?: number;
};

export async function getRegionalSupport(): Promise<RegionalSupportEntry[]> {
  const dir = path.join(process.cwd(), "content/regional-support");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((filename): RegionalSupportEntry & { published: boolean } => {
      const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(fileContent);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "",
        body: content || "",
        logo: data.logo || undefined,
        logo_alt: data.logo_alt || undefined,
        link_label: data.link_label || undefined,
        link_url: data.link_url || undefined,
        order: data.order ?? undefined,
        published: data.published !== false,
      };
    })
    .filter((e) => e.published)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}
