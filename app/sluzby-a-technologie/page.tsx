import Balancer from "react-wrap-balancer";
import SubPageHeader from "@/components/subPageHeader";
import Section from "@/components/section";
import Divider from "@/components/divider";
import Card from "@/components/card";

const SluzbyATechnologiePage = () => {
  return (
    <>
      <SubPageHeader
        title="Služby a technologie"
        claim="Síla mýtu, preciznost stroje"
        description="Specializujeme se na komplexní řešení v oblasti zpracování kovů. Naše moderní technologie a hluboké odborné znalosti nám umožňují nabídnout širokou škálu služeb, které přesně odpovídají potřebám našich zákazníků. Síla mýtu, preciznost stroje – to je naše krédo."
      />
      <Section adaptiveHeight>
        {/* CNC výroba */}
        <div
          className="flex flex-col md:flex-row gap-10 mb-16 items-center"
          id="cnc-vyroba"
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">CNC výroba</h2>
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
                src="/img/products/cnc.jpg"
                alt="CNC výroba"
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
            <h2 className="text-3xl font-bold mb-4">Klempířská výroba</h2>
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
                src="/img/products/klempir.jpg"
                alt="Klempířská výroba"
                className="w-full h-64 object-cover rounded"
              />
            </Card>
          </div>
        </div>
        <Divider />
        {/* Stohovač sudů */}
        <div
          className="flex flex-col md:flex-row gap-10 mt-16 items-center"
          id="stohovac-sudu"
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Stohovač sudů</h2>
            <p className="text-lg text-light/80 mb-4">
              <Balancer>
                Stohovač sudů a přepravek je možné použít pro sudy 50, 30 nebo
                20 litrů. Přepravky klasické na 20 lahví.
              </Balancer>
            </p>
            <p className="text-lg text-light/80 mb-4">
              <Balancer>
                Využití v pivovarnických nebo sodovkárenských provozech, ve
                spojení s válečkovou nebo jinou dopravníkovou dráhou - expedice,
                skladování.
              </Balancer>
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Card>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/products/ANTIKOR-hero-thumb.png"
                alt="Stohovač sudů"
                className="w-full h-64 object-cover rounded"
              />
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SluzbyATechnologiePage;
