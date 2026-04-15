"use client";

import Image from "next/image";
import Button from "./button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { RegionalSupportEntry } from "@/utils/getRegionalSupport";

export default function RegionalSupportCard({
  entry,
}: {
  entry: RegionalSupportEntry;
}) {
  return (
    <div className="bg-steel/5 rounded-3xl shadow-sm border border-steel/10 overflow-hidden h-full">
      <div className="p-6 md:p-10">
        {entry.logo && (
          <Image
            width={150}
            height={200}
            src={entry.logo}
            alt={entry.logo_alt ?? ""}
            className="mb-3"
          />
        )}
        <h3 className="text-lg md:text-xl font-semibold mb-3">{entry.title}</h3>
        <div className="prose prose-invert prose-sm text-light/80 [&_strong]:text-light [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:marker:text-steel">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {entry.body}
          </ReactMarkdown>
        </div>
        {entry.link_url && entry.link_label && (
          <div className="mt-4">
            <Button
              label={entry.link_label}
              href={entry.link_url}
              transparent
            />
          </div>
        )}
      </div>
    </div>
  );
}
