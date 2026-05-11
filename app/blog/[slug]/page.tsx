import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Card from "@/components/card";
import Link from "next/link";
import { getPosts } from "@/utils/getPosts";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-screen overflow-x-hidden bg-dark pt-20">
      <section className="max-w-4xl mx-auto px-[5%] py-12 pt-20 pb-54 mb-16 overflow-x-hidden flex flex-col items-center rounded-xl">
        <Link
          href="/blog"
          className="text-steel-600 text-base mt-12 mb-6 hover:underline"
        >
          ← Zpět na blog
        </Link>

        {post.image.trim() !== "" && (
          <Card className="w-full h-40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </Card>
        )}

        <h1 className="text-light text-left text-4xl font-bold mt-12">
          {post.title}
        </h1>

        {post.date && (
          <p className="text-sm font-bold text-steel-500 my-8 text-left w-full">
            {new Date(post.date).toLocaleDateString("cs-CZ")}
          </p>
        )}

        <article className="prose prose-lg max-w-none w-full text-left text-light prose-strong:text-light prose-headings:text-steel prose-a:text-steel">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
