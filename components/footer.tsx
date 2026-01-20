import Link from "next/link";

const FooterMenu = () => {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-3 py-8 text-center container mx-auto gap-10 md:gap-4">
      <Link
        href="/"
        className="-m-1.5 p-1.5 mx-auto flex flex-col justify-center"
      >
        <span className="sr-only">ANTIKOR</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="/img/logos/logo-long-mono-light.png"
          className="h-16 w-auto"
        />
      </Link>
      <div className="flex flex-col gap-2 justify-center">
        <p className="font-bold text-sm">Zdeněk Maixner - ANTIKOR s.r.o</p>
        <p className="text-sm">Kunčice 26</p>
        <p className="text-sm">561 51 Letohrad</p>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/o-nas" className="text-sm hover:text-steel transition">
          O nás
        </Link>
        <Link
          href="/o-nas#sluzby-a-technologie"
          className="text-sm hover:text-steel transition"
        >
          Služby a technologie
        </Link>
        <Link href="/kariera" className="text-sm hover:text-steel transition">
          Kariéra
        </Link>
        <Link href="#kontakt" className="text-sm hover:text-steel transition">
          Kontakt
        </Link>
        <div className="flex flex-row align-middle justify-center gap-5">
          <Link href="/gdpr" className="text-sm hover:text-steel transition">
            GDPR
          </Link>
          |
          <Link href="/cookies" className="text-sm hover:text-steel transition">
            Cookies
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-light border-t border-light/10 w-full">
      <FooterMenu />

      <div className="mx-auto text-center">
        <p className="text-sm py-4 bg-light/10">
          &copy; {new Date().getFullYear()}, coalmarketing & Michal Špitálský
        </p>
      </div>
    </footer>
  );
};

export default Footer;
