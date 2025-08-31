import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Card from "@/components/card";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const files = fs.readdirSync("content/blog");
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const filePath = path.join("content/blog", `${params.slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <main className="max-w-screen overflow-x-hidden bg-dark pt-20">
      <section className="w-3/4 mx-auto px-[5%] py-12 pt-20 pb-54 mb-16 overflow-x-hidden flex flex-col items-center rounded-xl">
        <a
          href="/blog"
          className="text-steel-600 text-base mt-12 mb-6 hover:underline"
        >
          ← Zpět na blog
        </a>
        {data.image && (
          <Card className="w-full max-h-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </Card>
        )}
        <h1 className="text-light text-left text-4xl font-bold mt-12">
          {data.title}
        </h1>
        {data.date && (
          <p className="text-sm font-bold text-steel-500 my-8">
            {new Date(data.date).toLocaleDateString("cs-CZ")}
          </p>
        )}

        <article className="prose prose-lg max-w-none w-full text-center text-light">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
