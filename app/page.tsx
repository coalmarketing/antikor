import Card from "@/components/card";
import Divider from "@/components/divider";
import HeroBanner from "@/components/heroBanner";
import Section from "@/components/section";
import Balancer from "react-wrap-balancer";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <Section>
        <div className="flex items-center gap-1 mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/head-blue.svg"
            className="h-6 w-auto object-cover"
            alt=""
          />
          <p className="text-lg font-semibold text-steel uppercase tracking-widest">
            Co nabízíme?
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-balance uppercase font-heading">
          Síla mýtu, precziznost stroje
        </h2>
        <Divider />
        <div className="grid grid-cols-2 w-full gap-10">
          <Card>
            <div className="w-full text-left pr-20">
              <p className="text-3xl font-bold">
                Proč <span className="uppercase text-steel">mantikora</span>?
              </p>
              <p className="mt-4 text-md font-normal text-pretty text-light/80">
                <Balancer>
                  <span className="text-steel-700">Mantikora</span> je bájná
                  bytost s lidskou tváří, tělem lva a štířím ocasem. Představuje
                  spojení síly a rozumu, stejně jako naše práce spojuje robustní
                  výkon s přesností a promyšleností při obrábění oceli.
                </Balancer>
              </p>
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-2 w-full gap-10">
          <div></div>
          <Card tip>
            <div className="w-full text-left pr-20">
              <p className="text-3xl font-bold">
                Proč <span className="uppercase text-steel">mantikora</span>?
              </p>
              <p className="mt-4 text-md font-normal text-pretty text-light/80">
                <Balancer>
                  <span className="text-steel-700">Mantikora</span> je bájná
                  bytost s lidskou tváří, tělem lva a štířím ocasem. Představuje
                  spojení síly a rozumu, stejně jako naše práce spojuje robustní
                  výkon s přesností a promyšleností při obrábění oceli.
                </Balancer>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
