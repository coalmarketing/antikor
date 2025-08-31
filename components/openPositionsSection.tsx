"use client";

import type { OpenPosition } from "@/utils/getOpenPositions";

import Card from "./card";
import Button from "./button";

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
          <p className="text-steel-600 text-sm mt-2 font-semibold">
            Sledujte nás všude a zkuste to znovu později. Nebo nám rovnou
            napište na <a href="mailto:info@antikor.cz">info@antikor.cz</a>,
            zašlete nám svůj životopis a uvidíme, zda pro vás něco nenajdeme!
          </p>
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
            <div className="text-light/80 text-sm mt-2 mb-8">
              {position.description}
            </div>
            <Button label="Napište nám!" transparent />
          </OpenPositionCardWrapper>
        </Card>
      ))}
    </div>
  );
}
