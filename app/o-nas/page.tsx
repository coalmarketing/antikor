import Image from "next/image";

import Card from "@/components/card";
import Divider from "@/components/divider";
import GallerySection from "@/components/gallerySection";

import Section from "@/components/section";
import SubPageHeader from "@/components/subPageHeader";

import { getGalleryImages } from "@/utils/getGalleryImg";
import Balancer from "react-wrap-balancer";
import TechnologieBento from "@/components/bento";

const AboutPage = async () => {
  const images = await getGalleryImages();
  return (
    <>
      <SubPageHeader
        title="O nás"
        claim="Síla mýtu, precziznost stroje"
        description="Chcete se stát součástí týmu, kde se snoubí síla mýtu s precizností
          stroje? Hledáte smysluplnou práci v dynamickém oboru kovovýroby, CNC
          obrábění nebo klempířské výroby? Pak je ANTIKOR tím pravým místem pro
          vás!"
        imageUrl="/uploads/dji_0071.jpg"
      />
      <Section adaptiveHeight>
        <div className="flex flex-col lg:flex-row gap-12 w-full">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-balance font-heading text-left mr-auto uppercase">
              O nás
            </h2>
            <Divider alignment="left" />
            <p className="text-lg text-light/80 text-left mb-8">
              Jsme společností zabývající se strojírenskou
              výrobou&mdash;obráběním, především pro společnosti Bosch
              Powertrain s.r.o. a OEZ s.r.o. Další výrobou je
              klempířská&mdash;zakázková, a to pro kohokoliv.
            </p>
            <p className="text-lg text-light/80 text-left mb-8">
              Zásadní je dohoda se zákazníkem. Pokud je u nás technologicky
              zpracovatelná, v kvalitě a v čase, pak nastává čas na jednání o
              ceně. Pokud se dohodneme, vyrábíme. Na prvním místě je spokojenost
              zákazníka. Jsme hrdí na to, že jsme trpěliví a vytrvalí, v našich
              plánech do budoucna.
            </p>
          </div>

          <div className="flex-2 flex flex-col gap-4">
            <Card>
              <Image
                fill
                src="/uploads/6k5a8014.jpg"
                alt="Image 1"
                className="object-cover"
              />
            </Card>
          </div>
        </div>

        <div className="w-full mt-10">
          <Card tip>
            <div className="w-full text-left p-[10%] pr-[22%] z-10">
              <p className="text-3xl font-bold">
                Proč <span className="uppercase text-steel">mantikora</span>?
              </p>
              <p className="mt-4 text-lg font-normal text-pretty text-light/80">
                <Balancer>
                  <span className="text-steel-600 font-bold">Mantikora</span> je
                  bájná bytost s lidskou tváří, tělem lva a štířím ocasem.
                  Představuje spojení síly a rozumu, stejně jako naše práce
                  spojuje při obrábění oceli robustní výkon se strojovou
                  přesností a lidským intelektem.
                </Balancer>
              </p>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/Manticore.svg"
              className="absolute bottom-0 md:-bottom-80 lg:-bottom-80 xl:-bottom-120 -right-20 h-auto w-[500px] md:w-[600px] lg:w-[600px] xl:w-[850px] object-cover z-10 -scale-x-100"
              alt=""
            />
          </Card>
        </div>
      </Section>

      <Section adaptiveHeight anchor="sluzby-a-technologie">
        <TechnologieBento />
        {/* CNC výroba */}
        <div
          className="flex flex-col md:flex-row gap-10 mb-16 items-center"
          id="cnc-vyroba"
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Obrobna</h2>
            <p className="text-lg text-light/80 mb-4">
              <Balancer>
                Naše CNC výroba představuje špičku v oblasti precizního obrábění
                a tváření kovů. Využíváme nejmodernější CNC stroje, které nám
                umožňují dosáhnout maximální přesnosti, opakovatelnosti a
                efektivity. Ať už potřebujete složité nerezové komponenty,
                prototypy nebo sériovou výrobu ocelových dílů, naše CNC
                technologie zajistí prvotřídní výsledky a antikorozní ochranu.
              </Balancer>
            </p>
            <ul className="list-disc ml-6 text-light/80 text-lg">
              <li>
                <span className="text-steel-500 font-semibold">
                  CNC frézování:
                </span>{" "}
                Pro složité tvary a vysokou přesnost.
              </li>
              <li>
                <span className="text-steel-500 font-semibold">
                  CNC soustružení:
                </span>{" "}
                Pro rotační díly s dokonalou povrchovou úpravou.
              </li>
              <li>
                <span className="text-steel-500 font-semibold">
                  CNC ohýbání:
                </span>{" "}
                Precizní ohýbání plechů pro různé aplikace.
              </li>
              <li>
                <span className="text-steel-500 font-semibold">
                  Zakázková výroba kovových dílů:
                </span>{" "}
                Řešení na míru pro vaše specifické požadavky.
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Card>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/6k5a7986.jpg"
                alt="Obrobna"
                className="w-full h-64 object-cover rounded"
              />
            </Card>
          </div>
        </div>
        <Divider />
        {/* Klempířská výroba */}
        <div
          className="flex flex-col md:flex-row gap-10 my-16 items-center"
          id="klempirska-vyroba"
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Klempírna</h2>
            <p className="text-lg text-light/80 mb-4">
              <Balancer>
                V oblasti klempířské výroby jsme vaším spolehlivým partnerem pro
                zakázkovou výrobu z plechů. Od jednoduchých prvků po komplexní
                konstrukce &ndash; s precizností a důrazem na detail
                zpracováváme různé druhy plechů, včetně oceli, nerezu a hliníku.
                Naše klempířské práce jsou zárukou funkčnosti, estetiky a dlouhé
                životnosti, a to i v náročných podmínkách.
              </Balancer>
            </p>
            <ul className="list-disc ml-6 text-light/80 text-lg">
              <li>
                <span className="text-steel-500 font-semibold">
                  Výrobu plechových dílů na míru:
                </span>{" "}
                Přesné řešení pro vaše projekty.
              </li>
              <li>
                <span className="text-steel-500 font-semibold">
                  Ohýbání a stříhání plechů:
                </span>{" "}
                Dle vašich specifikací s maximální precizností.
              </li>
              <li>
                <span className="text-steel-500 font-semibold">
                  Svařování a montáž klempířských prvků:
                </span>{" "}
                Kompletní realizace od návrhu po instalaci.
              </li>
              <li>
                <span className="text-steel-500 font-semibold">
                  Antikorozní úpravy:
                </span>{" "}
                Zajištění dlouhé životnosti a odolnosti proti vnějším vlivům.
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Card>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/6k5a7986.jpg"
                alt="Klempírna"
                className="w-full h-64 object-cover rounded"
              />
            </Card>
          </div>
        </div>
      </Section>

      <Section adaptiveHeight>
        <h2
          id="galerie"
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-balance font-heading mx-auto uppercase"
        >
          Galerie
        </h2>
        <Divider />
        <GallerySection images={images} />
      </Section>
    </>
  );
};

export default AboutPage;
