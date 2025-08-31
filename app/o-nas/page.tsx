import Card from "@/components/card";
import Divider from "@/components/divider";
import GallerySection from "@/components/gallerySection";

import Section from "@/components/section";
import SubPageHeader from "@/components/subPageHeader";

import { uspPoints } from "@/data/uspPoints";
import { getGalleryImages } from "@/utils/getGalleryImg";

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
          vás! "
      />
      <Section adaptiveHeight>
        <div className="flex flex-col lg:flex-row gap-12 w-full">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-balance font-heading text-left mr-auto uppercase">
              O nás
            </h2>
            <Divider alignment="left" />
            <p className="text-lg text-light/80 text-left mb-8">
              ANTIKOR s. r. o. je vaší zárukou poctivého řemesla a moderních
              technologií v oblasti zakázkové výroby nerezových a ocelových
              dílů. S dlouholetou tradicí a inovativním přístupem se
              specializujeme na precizní kovovýrobu a komplexní řešení pro
              průmysl i stavebnictví. Naše poslání je jasné: dodávat robustní a
              trvanlivá řešení, která překonávají očekávání našich klientů a
              odolávají zkoušce času.
            </p>
            <p className="text-lg text-light/80 text-left mb-8">
              Díky týmu zkušených odborníků a špičkovému technologickému
              vybavení jsme schopni realizovat i ty nejnáročnější projekty s
              maximální přesností a spolehlivostí. Věříme v individuální
              přístup, kvalitu bez kompromisů a budování dlouhodobých
              partnerství. Zdeněk Maixner – ANTIKOR s.r.o. – síla v naší oceli.
            </p>
          </div>
          <div className="flex-2 flex flex-col gap-8 lg:pl-20 pt-10">
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tight text-balance font-heading text-left mr-auto uppercase">
              4 pilíře naší práce
            </h3>
            {uspPoints.map((usp) => (
              <div
                key={usp.title}
                className="flex flex-row items-center justify-center gap-6 border-b border-light/20 bg-dark pb-8 last:border-0 last:pb-0"
              >
                <div>{usp.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-steel-700 mb-1">
                    {usp.title}
                  </h3>
                  <p className="text-light/80 text-base text-sm">
                    {usp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section adaptiveHeight>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-balance font-heading mx-auto uppercase">
          Galerie
        </h2>
        <Divider />
        <GallerySection images={images} />
      </Section>
    </>
  );
};

export default AboutPage;
