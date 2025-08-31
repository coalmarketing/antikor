import Section from "@/components/section";
import SubPageHeader from "@/components/subPageHeader";

const SubPage = () => {
  return (
    <>
      <SubPageHeader
        title="Blog"
        claim="Toto je claim podstránky."
        description="Krátký popis nebo úvodní text k této podstránce. Můžete zde stručně představit obsah nebo účel stránky."
      />
      <Section adaptiveHeight>
        <h2 className="text-3xl font-bold mb-4">Sekce s obsahem</h2>
        <p className="text-lg text-light/80">
          Toto je ukázková sekce pro další obsah podstránky. Můžete zde přidat
          libovolné komponenty, texty nebo obrázky dle potřeby.
        </p>
      </Section>
    </>
  );
};

export default SubPage;
