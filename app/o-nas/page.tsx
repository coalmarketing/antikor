import Image from "next/image";

import Card from "@/components/card";
import Divider from "@/components/divider";

import Section from "@/components/section";
import SubPageHeader from "@/components/subPageHeader";

import Balancer from "react-wrap-balancer";

import { LogoLoop } from "@/components/LogoLoop";
import { imageLogos } from "@/data/clientLogos";
import Button from "@/components/button";

const AboutPage = async () => {
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
              <Image
                fill
                src="/uploads/6k5a8014.jpg"
                alt="Image 1"
                className="object-cover"
              />
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
                className="absolute bottom-0 md:-bottom-80 lg:-bottom-80 xl:-bottom-150 -right-30 h-auto w-[500px] md:w-[600px] lg:w-[600px] xl:w-[850px] z-10 -scale-x-100"
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
        <Divider />
        {/* CSR Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card tip>
            <div className="p-6 md:p-10">
              <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                Podpora regionu a společenská odpovědnost
              </h3>
              <p>
                Společnost <span className="font-medium">ANTIKOR</span> je
                nejenom českou, ale je tradiční letohradskou společností na
                Kunčicích. Podporujeme konkrétní potřeby, projekty pro lepší
                život, sport a dobrovolné aktivity V letošním roce jsme přispěli
                na tyto projekty:
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
          </Card>
          <div className="bg-steel/5 rounded-3xl shadow-sm border border-steel/10 overflow-hidden">
            <div className="p-6 md:p-10">
              <Image
                width={150}
                height={200}
                src="/img/konsorcium.png"
                alt="Konsorcium zaměstnavatelů Orlicka"
                className="mb-3 brightness-200"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                ANTIKOR podporuje Konsorcium zaměstnavatelů Orlicka
              </h3>
              <p>
                Jsme dlouholetým členem{" "}
                <strong>Konsorcia zaměstnavatelů Orlicka</strong>, které od roku
                2016 propojuje progresivní firmy a střední školy v regionu za
                podpory města Letohrad. Společně s PSŠ Letohrad a Střední školou
                gastronomickou a technickou Žamberk se podílíme na rozvoji
                odborného vzdělávání, zapojení žáků do praxe a posilování
                spolupráce mezi průmyslem a vzdělávacími institucemi. Projekt je
                realizován také s podporou EU.
              </p>
              <Button
                label="Více o Konsorciu"
                href="https://konsorcium.eu/"
                transparent
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
