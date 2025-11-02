"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TechnologieBento() {
  return (
    <section className="w-full mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-4 gap-6 auto-rows-[minmax(200px,1fr)]">
      {/* Left Quote & Intro */}
      <motion.div
        className="col-span-1 md:col-span-2 lg:col-span-6 xl:col-span-2 flex flex-col justify-center p-8 bg-steel/30 rounded-3xl shadow-sm relative overflow-hidden z-10"
        whileHover={{ y: -5 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-left text-balance text-steel">
          Technologie, se kterými pracujeme
        </h2>
        <div className="mt-6">
          <p className="italic font-bold text-2xl md:text-3xl relative z-20">
            &quot;Kromě nových strojů, máme pár relativně starých, ale jsou to
            držáky a pod správným servisem jedou o sto péro...&quot;
          </p>
          <p className="font-bold text-steel mt-3">
            – Ing. Zdeněk Maixner, jednatel ANTIKOR
          </p>
          <div className="w-108 h-108 bg-steel/10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 -z-10" />
        </div>
      </motion.div>

      {/* CNC Equipment */}
      <motion.div
        className="col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-2 bg-steel/5 rounded-3xl shadow-sm border border-steel/10 overflow-hidden"
        whileHover={{ y: -5 }}
      >
        <div className="p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="h-2 w-2 bg-steel rounded-full" />
            CNC strojní vybavení
          </h3>
          <p>
            Hlavní výbavou společnosti jsou{" "}
            <span className="font-medium">
              korejská soustružnická centra HYUNDAI s protivřetenem
            </span>
            , která zajišťují vysokou přesnost a spolehlivý výkon.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            O bezchybný provoz se stará profesionální servis společnosti{" "}
            <span className="font-medium">PROFIKA s. r. o.</span>
          </p>
          <div className="mt-4 p-4 border border-steel/20 bg-steel/30 rounded-xl text-sm">
            <span className="font-medium">Dlouhodobá spolehlivost:</span> stále
            provozujeme jeden stroj z roku 2005 a dva stroje z roku 2006.
          </div>
          <h4 className="mt-4 font-semibold text-steel">
            CNC ohraňovací lisy (klempírna)
          </h4>
          <ul className="mt-2 list-disc pl-6 marker:text-steel space-y-1">
            <li>
              Hydraulický ohraňovací lis{" "}
              <span className="font-medium">APHS 31240</span>
            </li>
            <li>
              Hydraulický ohraňovací lis{" "}
              <span className="font-medium">APHS 3108 × 160</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Metrology */}
      <motion.div
        className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-1 bg-steel/5 rounded-3xl shadow-sm border border-steel/10 overflow-hidden"
        whileHover={{ y: -5 }}
      >
        <div className="p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="h-2 w-2 bg-steel rounded-full" />
            Měrové středisko
          </h3>
          <p>
            Pro přesné měření a kontrolu kvality využíváme špičkové měřicí
            přístroje:
          </p>
          <ul className="mt-3 list-disc pl-6 marker:text-steel space-y-2">
            <li>
              <span className="font-medium">
                Profiloměr MITUTOYO CONTRACER CV 2100M4
              </span>{" "}
              (X = 100 mm, Z2 = 350 mm)
            </li>
            <li>
              <span className="font-medium">
                Výškoměr MITUTOYO LINEAR HEIGHT LH 600E
              </span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Software */}
      <motion.div
        className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-1 bg-steel/5 rounded-3xl shadow-sm border border-steel/10 overflow-hidden"
        whileHover={{ y: -5 }}
      >
        <div className="p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="h-2 w-2 bg-steel rounded-full" />
            Používaný software
          </h3>
          <ul className="space-y-3 list-disc pl-6 marker:text-steel">
            <li>
              <span className="font-medium">HELIOS Inuvio</span> – ERP systém od{" "}
              <span className="font-medium">Asseco Solutions</span>, zajišťující
              komplexní správu firemních procesů.
            </li>
            <li>
              <span className="font-medium">GibbsCAM</span> – technologický{" "}
              <span className="font-medium">CAD/CAM software</span> pro přípravu
              CNC programů.
            </li>
            <li>
              <span className="font-medium">
                Autodesk Inventor Professional
              </span>{" "}
              – 3D CAD nástroj pro modelování, analýzu napětí a návrh rámů a
              kabelových svazků.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* CSR Section */}
      <motion.div
        className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 bg-steel/30 rounded-3xl shadow-sm border border-steel/10 overflow-hidden"
        whileHover={{ y: -5 }}
      >
        <div className="p-6 md:p-10">
          <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="h-2 w-2 bg-steel rounded-full" />
            Podpora regionu a společenská odpovědnost
          </h3>
          <p>
            Společnost <span className="font-medium">ANTIKOR</span> je nejenom
            českou, ale je tradiční letohradskou společností na Kunčicích.
            Podporujeme konkrétní potřeby, projekty pro lepší život, sport a
            dobrovolné aktivity V letošním roce jsme přispěli na tyto projekty:
          </p>
          <ul className="mt-4 list-disc pl-6 marker:text-steel space-y-2">
            <li>
              <span className="font-medium">
                Vodácký klub RAFT KLUB gymnázium Letohrad, p. s.
              </span>{" "}
              – účast na{" "}
              <span className="font-medium">
                Mistrovství světa juniorů 2025 ve Slovinsku
              </span>
            </li>
            <li>
              <span className="font-medium">
                Sbor dobrovolných hasičů Letohrad
              </span>{" "}
              – oslava{" "}
              <span className="font-medium">150 let od založení sboru</span>
            </li>
            <li>
              <span className="font-medium">Šárka Jansová</span> – podpora v
              rámci <span className="font-medium">BENEFICE OD SRDCE</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
