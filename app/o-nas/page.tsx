import Card from "@/components/card";
import Divider from "@/components/divider";

import Section from "@/components/section";
import SubPageHeader from "@/components/subPageHeader";

import Balancer from "react-wrap-balancer";

import { LogoLoop } from "@/components/LogoLoop";
import { imageLogos } from "@/data/clientLogos";
import { Metadata } from "next";
import YouTubeEmbed from "@/components/youtubeEmbed";
import { getRegionalSupport } from "@/utils/getRegionalSupport";
import RegionalSupportCard from "@/components/regionalSupportCard";

export const metadata: Metadata = {
  title:
    "O firmě Zdeněk Miaxner - ANTIKOR s.r.o. | Tradice strojírenské výroby a kvalita",
  description:
    "Jsme rodinná strojírenská firma z Letohradu. Spojujeme dlouholetou tradici s moderními technologiemi. Zakládáme si na preciznosti, stabilitě a férovém přístupu.",
  alternates: { canonical: "/o-nas" },
};

const AboutPage = async () => {
  const regionalSupport = await getRegionalSupport();

  return (
    <>
      <SubPageHeader
        title="O nás"
        claim="Mantikoří síla v nás"
        description="Jsme strojírenská firma, vyrábějící kovové díly od soustružených a frézovaných komponent až po ohýbané plechové prvky z oceli, nerezu i hliníku. Spojujeme dlouhodobé know-how s moderní technologií, díky čemuž máme kontrolu nad každým rozměrem, kvalitou i termínem. Nabízíme spolehlivou výrobu vždy s důrazem na poctivost, přesnost a dobré řemeslo."
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
              <YouTubeEmbed id="x1ONFbObTbE" title="ANTIKOR - O nás" />
            </Card>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 mt-10 gap-6">
          <div className="col-span-3 md:col-span-2">
            <Card tip>
              <div className="w-full text-left p-[10%] pr-[22%] z-10">
                <p className="text-3xl font-bold">
                  Proč <span className="uppercase text-steel">mantikora</span>?
                </p>
                <p className="mt-4 text-lg font-normal text-pretty text-light/80">
                  <Balancer>
                    <span className="text-steel-600 font-bold">Mantikora</span>{" "}
                    je bájná bytost s lidskou tváří, tělem lva a štířím ocasem.
                    Představuje spojení síly a rozumu, stejně jako naše práce
                    spojuje při obrábění oceli robustní výkon se strojovou
                    přesností a lidským intelektem.
                  </Balancer>
                </p>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/Manticore.svg"
                className="absolute -bottom-60 md:-bottom-80 lg:-bottom-80 xl:-bottom-130 -right-40 md:-right-60 lg:-right-80 h-auto w-125 md:w-150 lg:w-150 xl:w-212.5 z-10 -scale-x-100"
                alt="Mantikora"
              />
            </Card>
          </div>
          <div className="col-span-3 md:col-span-1">
            <Card>
              <div className="w-full h-40 bg-steel-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/certificate-mockup.webp"
                  alt="Klempírna"
                  className="w-full h-full object-cover mix-blend-normal"
                />
              </div>
              <div className="w-full text-left p-12 pt-8 pr-20">
                <p className="text-3xl font-bold">Naše certifikace</p>

                <ul className="list-disc list-inside marker:text-steel-600 my-4">
                  <li> IATF 16949:2016</li>
                </ul>
                <ul className="list-disc list-inside marker:text-steel-600 my-4">
                  <li> ISO 9001:2015 </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        <p className="text-lg font-semibold text-light uppercase tracking-widest mt-32 mb-6">
          Spolupracujeme
        </p>
        <LogoLoop
          logos={imageLogos}
          logoHeight={45}
          speed={25}
          gap={80}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#1e1e1e"
          className="opacity-60 hover:opacity-100 transition-opacity"
          ariaLabel="Partneři ANTIKOR s.r.o."
        />
      </Section>

      <Section adaptiveHeight>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-balance font-heading mx-auto uppercase">
          Podpora regionu
        </h2>
        <Divider />{" "}
        <p className="mt-4 text-lg font-normal text-pretty text-light/80 text-center mb-12">
          <Balancer>
            <span className="text-steel-600 font-bold">Mantikora</span> je bájná
            bytost s lidskou tváří, tělem lva a štířím ocasem. Představuje
            spojení síly a rozumu, stejně jako naše práce spojuje při obrábění
            oceli robustní výkon se strojovou přesností a lidským intelektem.
          </Balancer>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {regionalSupport.map((entry) => (
            <RegionalSupportCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
