"use client";

import type { BlogPost } from "@/utils/getPosts";
import Link from "next/link";
import Card from "./card";

export const BlogCardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="w-full text-left p-12 pt-4 pr-20">{children}</div>;

export default function BlogSectionClient({ posts }: { posts: BlogPost[] }) {
  if (!posts?.length) return <p>Žádné příspěvky nebyly nalezeny.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-3/4 mx-auto">
      {posts.slice(0, 2).map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
          <Card>
            <div className="w-full h-40 bg-steel-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image ?? "/img/Manticore.png"}
                alt={post.title}
                className="w-full h-full object-cover mix-blend-luminosity opacity-50"
              />
            </div>
            <BlogCardWrapper>
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <p className="text-steel-600 text-sm mt-2 font-semibold">
                {new Date(post.date).toLocaleDateString("cs-CZ")}
              </p>
              <div className="text-light/80 text-sm mt-2 line-clamp-3">
                {post.body.slice(0, 120)}
                {post.body.length > 120 ? "..." : ""}
              </div>
            </BlogCardWrapper>
          </Card>
        </Link>
      ))}
    </div>
  );
}
