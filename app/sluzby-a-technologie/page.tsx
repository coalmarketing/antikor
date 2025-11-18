import Card from "@/components/card";
import Divider from "@/components/divider";
import GallerySection from "@/components/gallerySection";

import Section from "@/components/section";
import SubPageHeader from "@/components/subPageHeader";

import { getGalleryImages } from "@/utils/getGalleryImg";
import Balancer from "react-wrap-balancer";
import TechnologieBento from "@/components/bento";

const ServicesPage = async () => {
  const images = await getGalleryImages();
  return (
    <>
      <SubPageHeader
        title="Naše technologie"
        claim="Síla mýtu, precziznost stroje"
        description="V ANTIKORU vyrábíme přesné kovové díly – od soustružených a frézovaných komponent až po ohýbané plechové prvky z oceli, nerezu i hliníku. Pracujeme na moderních i dlouhodobě prověřených CNC strojích HYUNDAI a využíváme přesné měřicí technologie MITUTOYO, takže máme kontrolu nad každým rozměrem i výslednou kvalitou. Nabízíme spolehlivou sériovou výrobu, prototypy i technicky náročné zakázky."
        imageUrl="/uploads/6k5a8090.jpg"
        anchor="sluzby-a-technologie"
      />

      <Section adaptiveHeight>
        {/* CNC výroba */}
        <div
          className="flex flex-col md:flex-row gap-10 mb-16 items-center"
          id="obrobna"
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
            </ul>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <Card>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/6k5a8090.jpg"
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
          id="klempirna"
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
          <div className="flex-1 flex justify-center w-full">
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

        <TechnologieBento />
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

export default ServicesPage;
