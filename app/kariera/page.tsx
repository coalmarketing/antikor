import Divider from "@/components/divider";
import OpenPositionsSectionClient from "@/components/openPositionsSection";
import Section from "@/components/section";
import SubPageHeader from "@/components/subPageHeader";
import { getOpenPositions } from "@/utils/getOpenPositions";

const SubPage = async () => {
  const positions = await getOpenPositions();
  return (
    <>
      <SubPageHeader
        title="Kariéra"
        claim="Přidejte se pod vlajku mantikory!"
        description="Chcete se stát součástí týmu, kde se snoubí síla mýtu s precizností
          stroje? Hledáte smysluplnou práci v dynamickém oboru kovovýroby, CNC
          obrábění nebo klempířské výroby? Pak je ANTIKOR tím pravým místem pro
          vás! "
      />
      <Section adaptiveHeight>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-balance font-heading text-left mr-auto">
          Volné pozice
        </h2>
        <Divider alignment="left" />
        <p className="text-lg text-light/80 text-left mb-8">
          Nabízíme stabilní a inspirativní pracovní prostředí, kde podporujeme
          profesní růst a rozvoj každého člena týmu. Věříme, že naši zaměstnanci
          jsou klíčem k našemu úspěchu, a proto investujeme do jejich vzdělávání
          a pohody. Přidejte se k nám a pomozte nám tvořit budoucnost precizních
          ocelových a nerezových řešení!
        </p>
        <OpenPositionsSectionClient positions={positions} />
      </Section>
    </>
  );
};

export default SubPage;
