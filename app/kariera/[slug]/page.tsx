import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Card from "@/components/card";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";

export async function generateStaticParams() {
  const files = fs.readdirSync("content/positions");
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const filePath = path.join(
    process.cwd(),
    "content/positions",
    `${(await params).slug}.md`,
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  const title = data.seoTitle ?? `${data.title} | Kariéra ANTIKOR Letohrad`;

  const description =
    data.seoDescription ??
    `Volná pracovní pozice ${data.title} ve společnosti ANTIKOR s.r.o. v Letohradě. Přidejte se k nám.`;

  const canonical = `/kariera/${(await params).slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      locale: "cs_CZ",
      images: data.image
        ? [
            {
              url: data.image,
              width: 1200,
              height: 630,
              alt: data.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: data.image ? [data.image] : undefined,
    },
  };
}

export default async function PositionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/positions", `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return (
    <main className="max-w-screen overflow-x-hidden bg-dark pt-20">
      <section className="w-3/4 mx-auto px-[5%] py-12 pt-20 pb-54 mb-16 overflow-x-hidden flex flex-col items-center rounded-xl">
        <Link
          href="/kariera"
          className="text-steel-600 text-base mt-12 mb-6 hover:underline"
        >
          ← Zpět na seznam pozic
        </Link>
        {data.image && (
          <Card className="w-full max-h-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image}
              alt={data.title ?? ""}
              className="w-full h-full object-cover"
            />
          </Card>
        )}
        <div className="flex items-center gap-1 mb-4 mt-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logos/head-blue.svg"
            className="h-6 w-auto object-cover"
            alt=""
          />
          <p className="text-lg font-semibold text-steel uppercase tracking-widest">
            Volná pozice
          </p>
        </div>
        <h1 className="text-light text-left text-4xl font-bold ">
          {data.title}
        </h1>

        <div className="flex flex-col gap-2 mt-4 text-white/70">
          <p className="">
            <strong>Lokalita:</strong> {data.location}
          </p>
          <p className="">
            <strong>Typ úvazku:</strong> {data.type}
          </p>
        </div>

        <article className="w-full">
          <div
            className="prose prose-lg prose-invert max-w-2xl mx-auto prose-headings:text-light
    prose-headings:font-bold
    prose-headings:tracking-tight

    prose-h2:text-xl
    prose-h2:mt-10 prose-h2:mb-4

    prose-p:text-light/80
    prose-p:leading-relaxed
    prose-p:text-base

    prose-ul:pl-6
    prose-li:marker:text-steel
    prose-li:text-base

    prose-a:text-steel
    prose-a:font-medium
    prose-a:underline
    prose-a:underline-offset-4
    prose-a:hover:text-steel-400"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {String(data.description ?? "")}
            </ReactMarkdown>
          </div>
        </article>
      </section>
    </main>
  );
}
