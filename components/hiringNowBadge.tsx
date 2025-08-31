"use client";

import { useState, useEffect } from "react";

import { OpenPosition, getOpenPositions } from "@/utils/getOpenPositions";
import Button from "./button";
import { XMarkIcon } from "@heroicons/react/24/solid";

const HiringNowBadge = () => {
  const [pos, setPos] = useState<OpenPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getOpenPositions();
      setPos(data);
      setLoading(false);
    })();
  }, []);

  return (
    <div
      className="fixed bottom-2 right-2 z-50 m-4 transition-opacity duration-500"
      style={{ opacity: !loading && pos.length !== 0 && !dismissed ? 1 : 0 }}
    >
      <div className="relative bg-gradient-to-r from-steel-600 to-steel-700 rounded-xl w-[350px] px-6 pt-6 pb-2 border border-light/20">
        <div className="absolute top-2 right-2">
          <button onClick={() => setDismissed(true)}>
            <XMarkIcon className="h-6 w-6 text-white hover:cursor-pointer" />
          </button>
        </div>
        <div className="font-semibold text-xl text-white">
          Hledáme nové kolegy!
        </div>
        <p className="text-sm text-white">Přidej se do našeho týmu!</p>
        <Button
          label={"Prohlédnout volná místa"}
          transparent
          monochrome
          inverted
        />
      </div>
    </div>
  );
};

export default HiringNowBadge;
