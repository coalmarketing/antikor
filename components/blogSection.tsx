"use client";

import type { BlogPost } from "@/utils/getPosts";
import Link from "next/link";
import Card from "./card";

function stripMarkdown(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, "") // headings
    .replace(/(\*\*|__)(.*?)\1/g, "$2") // bold
    .replace(/(\*|_)(.*?)\1/g, "$2") // italic
    .replace(/~~(.*?)~~/g, "$1") // strikethrough
    .replace(/`{1,3}[^`]*`{1,3}/g, "") // inline code / code blocks
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // links and images
    .replace(/^[-*+]\s+/gm, "") // unordered list markers
    .replace(/^\d+\.\s+/gm, "") // ordered list markers
    .replace(/^>\s+/gm, "") // blockquotes
    .replace(/[-]{3,}|[*]{3,}|[_]{3,}/g, "") // horizontal rules
    .replace(/\n+/g, " ") // collapse newlines
    .trim();
}

export const BlogCardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="w-full text-left p-12 pt-4 pr-20">{children}</div>;

export default function BlogSectionClient({
  posts,
  limit,
}: {
  posts: BlogPost[];
  limit?: number;
}) {
  if (!posts?.length) return <p>Žádné příspěvky nebyly nalezeny.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full mx-auto">
      {posts.slice(0, limit).map((post) => (
        <Link
          href={`/blog/${post.slug}`}
          key={post.slug}
          className="block hover:scale-101 transition duration-300 z-50 grayscale-100 hover:grayscale-0"
        >
          <Card className="z-50">
            <div className="w-full h-40 bg-steel-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image ?? "/img/Manticore.png"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <BlogCardWrapper>
              <h3 className="text-2xl font-bold leading-tight mb-2">
                {post.title}
              </h3>
              <p className="text-steel-600 text-sm mt-2 font-semibold">
                {new Date(post.date).toLocaleDateString("cs-CZ")}
              </p>
              <div className="text-light/80 text-sm mt-2 line-clamp-3">
                {(() => {
                  const plain = stripMarkdown(post.body);
                  return plain.length > 120
                    ? plain.slice(0, 120) + "..."
                    : plain;
                })()}
              </div>
            </BlogCardWrapper>
          </Card>
        </Link>
      ))}
    </div>
  );
}
