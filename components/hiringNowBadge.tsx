// components/hiringNowBadgeClient.tsx
"use client";

import Button from "./button";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function HiringNowBadgeClient({
  hasOpenPositions,
}: {
  hasOpenPositions: boolean;
}) {
  const [dismissed, setDismissed] = useState(false);
  const show = hasOpenPositions && !dismissed;
  if (!show) return null;

  return (
    <div className="fixed bottom-2 right-2 z-50 m-4">
      <div className="relative bg-gradient-to-r from-steel-600 to-steel-700 rounded-xl w-[350px] px-6 pt-6 pb-2 border border-light/20">
        <div className="absolute top-2 right-2">
          <button onClick={() => setDismissed(true)} aria-label="Zavřít">
            <XMarkIcon className="h-6 w-6 text-white hover:cursor-pointer" />
          </button>
        </div>
        <div className="font-semibold text-xl text-white">
          Hledáme nové kolegy!
        </div>
        <p className="text-sm text-white">Přidej se do našeho týmu!</p>
        <Link href="/kariera">
          <Button
            label="Prohlédnout volná místa"
            transparent
            monochrome
            inverted
          />
        </Link>
      </div>
    </div>
  );
}
