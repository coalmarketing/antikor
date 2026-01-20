"use client";

import type { OpenPosition } from "@/utils/getOpenPositions";

import Card from "./card";
import Button from "./button";
import Link from "next/link";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function PositionDescription({ description }: { description: string }) {
  return (
    <div className="text-light/80 text-sm mt-2 mb-4 prose prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
    </div>
  );
}

export const OpenPositionCardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="w-full text-left py-6 pl-12 pr-20">{children}</div>;

export default function OpenPositionsSectionClient({
  positions,
}: {
  positions: OpenPosition[];
}) {
  if (!positions?.length)
    return (
      <Card>
        <OpenPositionCardWrapper>
          <h3 className="text-2xl font-bold">
            Momentálně nemáme vypsané, žádné pozice
          </h3>
          <Card>
            <OpenPositionCardWrapper>
              <p className="text-base mt-2 mb-8 font-semibold">
                Sledujte nás všude a zkuste to znovu později. Nebo nám rovnou
                napište na{" "}
                <a
                  href="mailto:info@antikor.cz"
                  className="underline text-steel"
                >
                  info@antikor.cz
                </a>
                , zašlete nám svůj životopis!
              </p>
              <p>
                <strong className="text-steel font-bold">
                  Neustále hledáme nové kolegy a rádi se na něčem domluvíme!
                </strong>
              </p>
            </OpenPositionCardWrapper>
          </Card>
        </OpenPositionCardWrapper>
      </Card>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto">
      {positions.map((position) => (
        <Card key={position.slug}>
          <OpenPositionCardWrapper>
            <p className="text-steel-500 text-sm mt-2 font-semibold uppercase">
              {position.type}
            </p>
            <h3 className="text-2xl font-bold">{position.title}</h3>
            <p className="text-steel-600 text-sm mt-2 font-semibold">
              {position.location}
            </p>
            <PositionDescription
              description={
                position.blurb ? position.blurb : position.description
              }
            />
            <div className="mb-6">
              <Link href={`/kariera/${position.slug}`}>
                <Button label="Detaily pozice" />
              </Link>
            </div>

            <Link href="mailto:zdenekmaixner@gmail.com" target="_blank">
              <Button label="Napište nám!" transparent />
            </Link>
            <div className="text-sm">
              Nebo nám zavolejte na{" "}
              <a href="tel:+420737423925" className="underline text-steel">
                +420 737 423 925
              </a>
            </div>
          </OpenPositionCardWrapper>
        </Card>
      ))}
      <Card>
        <OpenPositionCardWrapper>
          <p className="text-base mt-2 mb-8 font-semibold">
            Nenašli jste, co hledáte? Sledujte nás všude a zkuste to znovu
            později. Nebo nám rovnou napište na{" "}
            <a
              href="mailto:zdenekmaixner@gmail.com"
              className="underline text-steel"
            >
              zdenekmaixner@gmail.com
            </a>
            , zašlete nám svůj životopis!
          </p>
          <p>
            <strong className="text-steel font-bold">
              Neustále hledáme nové kolegy a rádi se na něčem domluvíme!
            </strong>
          </p>
        </OpenPositionCardWrapper>
      </Card>
    </div>
  );
}
