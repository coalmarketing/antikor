"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ClientLogo = {
  src: string;
  alt: string;
  href?: string;
};

export async function getClients(): Promise<ClientLogo[]> {
  const dir = path.join(process.cwd(), "content/clients");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const { data } = matter(
        fs.readFileSync(path.join(dir, filename), "utf-8")
      );
      return {
        src: (data.logo as string) || "",
        alt: (data.title as string) || "",
        href: (data.url as string) || undefined,
        order: (data.order as number | undefined) ?? 99,
        published: data.published !== false,
      };
    })
    .filter((c) => c.published && c.src)
    .sort((a, b) => a.order - b.order)
    .map(({ src, alt, href }) => ({ src, alt, href }));
}
