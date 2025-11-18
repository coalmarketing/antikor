import Divider from "@/components/divider";
import OpenPositionsSectionClient from "@/components/openPositionsSection";
import Section from "@/components/section";
import SubPageHeader from "@/components/subPageHeader";
import { getOpenPositions } from "@/utils/getOpenPositions";

const CareerPage = async () => {
  const positions = await getOpenPositions();
  return (
    <>
      <SubPageHeader
        title="Kariéra"
        claim="Přidejte se pod vlajku mantikory!"
        description="Jsme moderní a stabilní strojírenská firma z Letohradu s tradicí a motivací přenášet naše řemeslo do nové doby. Hledáme nové kolegy, kteří chtějí zakotvit v našem týmu a růst společně s námi."
        imageUrl="/uploads/6k5a7977.jpg"
      />
      <Section adaptiveHeight>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-balance font-heading text-left mr-auto uppercase">
          Volné pozice
        </h2>
        <Divider alignment="left" />
        <p className="text-lg text-light/80 text-left mb-8">
          Hledáme posily do výroby i mladé lidi, kteří se chtějí učit řemeslu.
          Nabízíme práci v prostředí, kde má zkušenost stejnou váhu jako chuť
          zkoušet nové věci. Dáváme i prostor studentům, kteří chtějí získat
          praxi ve strojírenství. Přidejte se k nám a pomozte nám posouvat
          poctivou práci s kovem dál.
        </p>
        <OpenPositionsSectionClient positions={positions} />
      </Section>
    </>
  );
};

export default CareerPage;
