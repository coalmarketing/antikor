import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR | Zdeněk Maixner - ANTIKOR s.r.o",
  description:
    "Nabízíme komplexní zpracování kovů: CNC soustružení a frézování, ohýbání na lisech a svařování TIG/MAG. Sériová i zakázková výroba z oceli, nerezi a hliníku.",
  alternates: { canonical: "/gdpr" },
};

export default function GdprPage() {
  return (
    <main className="py-36 bg-dark">
      <div
        className="mx-auto max-w-4xl prose prose-invert"
        id="waulterGdpr"
      ></div>
    </main>
  );
}
