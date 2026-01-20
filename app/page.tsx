import Button from "@/components/button";
import Card from "@/components/card";

import Divider from "@/components/divider";
import HeroBanner from "@/components/heroBanner";
import LogoLoop from "@/components/LogoLoop";
import Section from "@/components/section";
import { UspSection } from "@/components/usp";
import { imageLogos } from "@/data/clientLogos";
import { uspPoints } from "@/data/uspPoints";
import Image from "next/image";
// import { getPosts } from "@/utils/getPosts";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Zdeněk Maixner - ANTIKOR s.r.o. | Zakázková kovovýroba a CNC obrábění z nerezi",
  description:
    "Specializujeme se na přesné CNC obrábění, klempířskou výrobu a svařování. Dodáváme díly pro automotive i strojírenství. Kvalita dle IATF 16949 z Letohradu.",
  alternates: { canonical: "/" },
};

const HomePageInfoCardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="w-full text-left p-12 pt-8 pr-20">{children}</div>;
};

const HomePage = async () => {
  // const posts = await getPosts();
  return (
    <>
      {/*
      ========================================================================
      HERO BANNER SECTION
      ========================================================================
      */}
      <HeroBanner />

      {/*
      ========================================================================
      SERVICES SECTION
      ========================================================================
      */}
      <Section anchor="služby">
        <div className="flex items-center gap-1 mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logos/head-blue.svg"
            className="h-6 w-auto object-cover"
            alt=""
          />
          <p className="text-lg font-semibold text-steel uppercase tracking-widest">
            Naše služby
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-balance uppercase font-heading text-center">
          Síla mýtu,
          <br />
          precziznost stroje
        </h2>
        <Divider />
        <p className="my-4 mx-[5%] md:mx-[10%] lg:mx-[20%] xl:mx-[25%] text-md font-normal text-pretty text-light/80 text-center">
          <Balancer>
            Specializujeme se na komplexní řešení v&nbsp;oblasti zpracování
            kovů. Naše moderní technologie a&nbsp;hluboké odborné znalosti nám
            umožňují nabídnout širokou škálu služeb, které přesně odpovídají
            potřebám našich zákazníků.{" "}
            <span className="text-steel-600 font-bold">
              Síla mýtu, preciznost stroje
            </span>{" "}
            &ndash; to je naše krédo.
          </Balancer>
        </p>
        <div className="grid grid-cols-12 w-full gap-5 md:gap-10 my-10 place-content-start">
          <div className="col-span-12 lg:col-span-4">
            <Card>
              <div className="w-full h-40 bg-steel-700">
                <Image
                  src="/uploads/6k5a8061.jpg"
                  alt="Obrobna"
                  className="w-full h-full object-cover"
                  width={1280}
                  height={720}
                />
              </div>
              <HomePageInfoCardWrapper>
                <p className="text-3xl font-bold">Obrobna</p>

                <ul className="list-disc list-inside marker:text-steel-600 my-4">
                  <li>CNC soustružení</li>
                  <li>CNC frézování</li>
                </ul>

                <Button
                  label="Dozvědět se více"
                  href="/sluzby-a-technologie#obrobna"
                  transparent
                />
              </HomePageInfoCardWrapper>
            </Card>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Card>
              <div className="w-full h-40 bg-steel-700">
                <Image
                  src="/uploads/6k5a8001.jpg"
                  alt="Klempírna"
                  className="w-full h-full object-cover"
                  width={1280}
                  height={720}
                />
              </div>
              <HomePageInfoCardWrapper>
                <p className="text-3xl font-bold">Klempírna</p>

                <ul className="list-disc list-inside marker:text-steel-600 my-4">
                  <li>CNC ohraňování</li>
                  <li>sváření MAG A TIG</li>
                  <li>stáčení plechů</li>
                  <li>stříhání na nůžkách</li>
                  <li>broušení a leštění</li>
                  <li>řezání materiálu</li>
                </ul>

                <Button
                  label="Dozvědět se více"
                  href="/sluzby-a-technologie#klempirna"
                  transparent
                />
              </HomePageInfoCardWrapper>
            </Card>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <Card>
              <div className="w-full h-40 bg-steel-700">
                <Image
                  src="/img/certificate-mockup.webp"
                  alt="Klempírna"
                  className="w-full h-full object-cover mix-blend-normal"
                  width={1280}
                  height={720}
                />
              </div>
              <HomePageInfoCardWrapper>
                <p className="text-3xl font-bold">Naše certifikace</p>

                <ul className="list-disc list-inside marker:text-steel-600 my-4">
                  <li> IATF 16949:2016</li>
                </ul>
                <ul className="list-disc list-inside marker:text-steel-600 my-4">
                  <li> ISO 9001:2015 </li>
                </ul>

                <Button label="Dozvědět se více" href="/o-nas#" transparent />
              </HomePageInfoCardWrapper>
            </Card>
          </div>

          <div className="col-span-12 sm:col-span-7 md:col-span-9">
            <Card tip>
              <div className="w-full text-left p-[10%] pr-[22%] z-10">
                <p className="text-3xl font-bold">
                  Proč <span className="uppercase text-steel">mantikora</span>?
                </p>
                <p className="mt-4 text-md font-normal text-pretty text-light/80">
                  <Balancer>
                    <span className="text-steel-600 font-bold">Mantikora</span>{" "}
                    je bájná bytost s lidskou tváří, tělem lva a štířím ocasem.
                    Představuje spojení síly a rozumu, stejně jako naše práce
                    spojuje při obrábění oceli robustní výkon se strojovou
                    přesností a lidským intelektem.
                  </Balancer>
                </p>
              </div>

              <div className="absolute right-0 top-[50%] translate-y-[-40%] w-1/4 aspect-square rotate-15 -scale-x-100 mix-blend-luminosity">
                <Image
                  src="/img/manticore-drawing.webp"
                  alt="Mantikora"
                  className="object-contain"
                  sizes="250px"
                  fill
                />
              </div>
            </Card>
          </div>

          <div className="col-span-12 sm:col-span-5 md:col-span-3">
            <Link href="#kontakt">
              <Card tip theme="steel" className="justify-center">
                <div className="w-full text-left p-[10%] pr-20">
                  <p className="text-4xl lg:text-2xl xl:text-3xl font-bold">
                    Kontaktujte nás! <br />
                    <span className="text-6xl leading-6">&#8594;</span>
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        <p className="text-lg font-semibold text-light uppercase tracking-widest mt-32 mb-6">
          Spolupracujeme
        </p>
        <LogoLoop
          logos={imageLogos}
          logoHeight={45}
          speed={60}
          gap={80}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#1e1e1e"
          className="opacity-60 hover:opacity-100 transition-opacity"
          ariaLabel="Partneři ANTIKOR s.r.o."
        />
      </Section>

      {/*
      ========================================================================
      USP SECTION
      ========================================================================
      */}
      <Section>
        <div className="flex items-center gap-1 mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logos/head-blue.svg"
            className="h-6 w-auto object-cover"
            alt=""
          />
          <p className="text-lg font-semibold text-steel uppercase tracking-widest">
            Proč do toho jít s&nbsp;ANTIKOREM?
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-balance uppercase font-heading text-center">
          Nejsme pouhou pohádkou
          <br />
        </h2>
        <Divider />
        <p className="my-4 mx-[5%] md:mx-[10%] lg:mx-[20%] xl:mx-[25%] text-md font-normal text-pretty text-light/80 text-center">
          <Balancer>
            Věříme, že spolupráce se&nbsp;společností{" "}
            <span className="text-steel-600 font-bold">
              Zdeněk Maixner - ANTIKOR s.&nbsp;r.&nbsp;o.
            </span>{" "}
            přináší našim klientům jasné výhody. Nejsme pouhou pohádkou &ndash;
            naše filozofie je postavena na&nbsp;
            <span className="text-steel-600 font-bold">
              čtyřech klíčových pilířích
            </span>
            , které zaručují vaši spokojenost a&nbsp;úspěch projektu:
          </Balancer>
        </p>
        <UspSection uspPoints={uspPoints} columnCount={4} />
        <div className="flex flex-row justify-center content-center gap-10 mt-2 mb-12">
          <Button label="Poptat službu" href="#kontakt" />
          <Button
            label="Nahlédněte do výroby"
            href="/o-nas#galerie"
            transparent
          />
        </div>
      </Section>

      {/*
      ========================================================================
      BLOG SECTION
      ========================================================================
      */}
      {/* <Section anchor="blog" adaptiveHeight>
        <div className="flex items-center gap-1 mb-4">

          <img
            src="/img/logos/head-blue.svg"
            className="h-6 w-auto object-cover"
            alt=""
          />
          <p className="text-lg font-semibold text-steel uppercase tracking-widest">
            Co nového v&nbsp;ANTIKORU?
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-balance uppercase font-heading text-center">
          Blog
        </h2>
        <Divider />
        <BlogSection posts={posts} limit={2} /> 
        <div className="bg-steel/10 w-screen h-screen absolute top-0 left-0 hero-polygon"></div>

        <div className="bg-steel/10 w-screen h-screen absolute top-0 left-0 hero-polygon-3 pointer-events-none"></div>
        <div className="mt-8 z-50">
          <Button label="Více příspěvků" href="/blog" />
        </div>
      </Section> */}
    </>
  );
};

export default HomePage;
