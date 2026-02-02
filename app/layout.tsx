import type { Metadata } from "next";

import localFont from "next/font/local";
import { Saira } from "next/font/google";

import "./globals.css";

import NavbarDesktop from "@/components/navbar";
import { navigationItems } from "@/data/navbarItems";
import Footer from "@/components/footer";
import Divider from "@/components/divider";
import Section from "@/components/section";
import Balancer from "react-wrap-balancer";
import HiringNowBadge from "@/components/hiringNowBadge";

import { getOpenPositions } from "@/utils/getOpenPositions";
import SocialsButtons from "@/components/socialsButtons";
import Script from "next/script";

// ✅ NEW: Decap settings loader
import { getGeneralSettings, type Contact } from "@/utils/getContacts";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

const specialGothicExtendedBold = localFont({
  src: "../public/fonts/SpecialGothicExtendedBold.woff2",
  display: "swap",
  variable: "--font-special",
});

const siteUrl = "https://antikor.net";
const siteName = "Zdeněk Maixner - ANTIKOR s.r.o.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  alternates: { canonical: "/" },
  keywords: [
    "Strojírenská výroba",
    "CNC obrábění kovů",
    "Zakázková kovovýroba",
    "Sériová výroba dílů",
    "Klempířská výroba",
    "CNC frézování a soustružení",
    "CNC ohraňování plechů",
    "Svařování TIG/MAG",
    "Zpracování nerezi a hliníku",
    "Výroba pro automotive",
    "Kovovýroba Letohrad",
    "Strojírenství Pardubický kraj",
    "ANTIKOR Kunčice",
    "Zdeněk Maixner – ANTIKOR s.r.o. Letohrad",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    images: [
      {
        url: "/img/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "ANTIKOR s.r.o. – strojírenská výroba a CNC obrábění",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/img/og-default.jpg"],
  },
};

export const runtime = "nodejs";

// ✅ NEW helpers
function normalizeTelHref(phone: string) {
  // Keep + and digits; remove spaces
  return phone.replace(/\s+/g, "");
}

function sortByOrderThenName(a: Contact, b: Contact) {
  const ao = a.order ?? 9999;
  const bo = b.order ?? 9999;
  if (ao !== bo) return ao - bo;
  return a.name.localeCompare(b.name, "cs");
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hasOpenPositions = (await getOpenPositions()).length > 0;

  // ✅ NEW: Load contacts from Decap-managed markdown
  const settings = await getGeneralSettings();
  const contacts = [...(settings.contacts ?? [])].sort(sortByOrderThenName);

  // Left column: no department
  const leftContacts = contacts.filter((c) => !c.department);

  // Right column: grouped by department
  const rightContacts = contacts.filter((c) => Boolean(c.department));
  const grouped = rightContacts.reduce<Record<string, Contact[]>>((acc, c) => {
    const key = c.department;
    if (!key) return acc;
    acc[key] ??= [];
    acc[key].push(c);
    return acc;
  }, {});

  // Keep group order stable: sort by department name (or change to custom order later)
  const rightGroups = Object.entries(grouped).sort(([a], [b]) =>
    a.localeCompare(b, "cs"),
  );

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WJM9L52R');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${saira.variable} ${specialGothicExtendedBold.variable} antialiased overflow-x-hidden`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJM9L52R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SocialsButtons />
        <NavbarDesktop items={navigationItems} />
        <HiringNowBadge hasOpenPositions={hasOpenPositions} />
        {children}
        <div className="bg-dark border-t border-light/10 p-0">
          <Section anchor="kontakt">
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
              Kontaktujte nás
              <br />
            </h2>
            <Divider />
            <p className="my-4 mx-[5%] md:mx-[10%] lg:mx-[20%] xl:mx-[25%] text-md font-normal text-pretty text-light/80 text-center">
              <Balancer>
                Máte dotazy, potřebujete cenovou nabídku nebo chcete
                prodiskutovat váš projekt v&nbsp;oblasti kovovýroby, CNC
                obrábění nebo&nbsp;klempířských prací? Neváhejte nás
                kontaktovat! Jsme připraveni vám pomoci s&nbsp;vašimi nerezovými
                a&nbsp;ocelovými řešeními.
              </Balancer>
            </p>

            {/* ------ Kontaktní informace + formulář */}
            <div className="grid grid-cols-1 gap-8 mt-8 w-full place-content-center text-center md:text-right md:grid-cols-3">
              <div className="order-1 md:order-1 flex flex-col gap-6">
                <div>
                  <p className="font-bold text-lg mb-1">
                    Zdeněk Maixner - ANTIKOR s.r.o.
                  </p>
                  <p>
                    Kunčice 26
                    <br />
                    561 51 Letohrad
                  </p>
                  <p className="mt-2">
                    IČO: <span className="font-mono">28800729</span>
                  </p>
                  <p>
                    DIČ: <span className="font-mono">CZ28800729</span>
                  </p>
                </div>

                {/* -------- Mapa ANTIKOR */}
                <div className="rounded-lg overflow-hidden shadow-md border border-steel-100 w-full md:max-w-xl ml-auto">
                  <iframe
                    title="Mapa ANTIKOR"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4405.275863447904!2d16.511194012894748!3d50.025138139401854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dfa58c23cd4f3%3A0x8bf34b850ebd66f0!2sZden%C4%9Bk%20Maixner%20-%20ANTIKOR%20s.%20r.%20o.!5e0!3m2!1scs!2scz!4v1756661103947!5m2!1scs!2scz"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* ------- Kontakty (left column from Decap) */}
              <div className="order-2 md:order-2">
                <ul className="space-y-6 text-center">
                  {leftContacts.map((c, idx) => (
                    <li key={`${c.email || c.name}-${idx}`}>
                      <strong>
                        {c.role ? `${c.role}: ` : ""}
                        {c.name}
                      </strong>{" "}
                      {c.note ? <span>{c.note}</span> : null}
                      <br />
                      {c.phone ? (
                        <>
                          <span>
                            tel.:{" "}
                            <a
                              href={`tel:${normalizeTelHref(c.phone)}`}
                              className="underline text-steel-600"
                            >
                              {c.phone}
                            </a>
                          </span>
                          <br />
                        </>
                      ) : null}
                      {c.email ? (
                        <span>
                          e-mail:{" "}
                          <a
                            href={`mailto:${c.email}`}
                            className="underline text-steel-600"
                          >
                            {c.email}
                          </a>
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ------- Kontakty 2 (right column grouped by department from Decap) */}
              <div className="order-3 md:order-3">
                <ul className="space-y-6 text-center md:text-left">
                  {rightGroups.map(([department, items]) => (
                    <li key={department}>
                      <strong>{department}</strong>
                      <br />

                      {items.sort(sortByOrderThenName).map((c, idx) => (
                        <div
                          key={`${c.email || c.name}-${idx}`}
                          className="mt-3"
                        >
                          <strong>
                            {c.role ? `${c.role}: ` : ""}
                            {c.name}
                          </strong>

                          {c.note ? (
                            <>
                              <br />
                              <span>{c.note}</span>
                            </>
                          ) : null}
                          <br />

                          {c.phone ? (
                            <>
                              <span>
                                tel.:{" "}
                                <a
                                  href={`tel:${normalizeTelHref(c.phone)}`}
                                  className="underline text-steel-600"
                                >
                                  {c.phone}
                                </a>
                              </span>
                              <br />
                            </>
                          ) : null}

                          {c.email ? (
                            <span>
                              e-mail:{" "}
                              <a
                                href={`mailto:${c.email}`}
                                className="underline text-steel-600"
                              >
                                {c.email}
                              </a>
                            </span>
                          ) : null}
                        </div>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        </div>
        <Footer />
      </body>
    </html>
  );
}
