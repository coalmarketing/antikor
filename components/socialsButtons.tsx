import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialsButtons = () => {
  return (
    <div className="hidden md:flex flex-col gap-5 fixed right-0 top-1/2 -translate-y-3/4 z-[100]">
      <Link href={""} target="_blank">
        <div className="grid place-content-center w-14 h-14 bg-steel hover:bg-steel-700 transition-all text-white rounded border border-steel-700 shadow-lg">
          <FaFacebook size={24} />
        </div>
      </Link>
      <Link href={""} target="_blank" aria-label="Instagram">
        <div
          className="grid place-content-center w-14 h-14 bg-steel hover:bg-steel-700 transition-all text-white rounded border border-steel-700 shadow-lg"
          aria-hidden="true"
        >
          <FaInstagram size={26} />
        </div>
      </Link>
      <Link href={""} target="_blank" aria-label="LinkedIn">
        <div
          className="grid place-content-center w-14 h-14 bg-steel hover:bg-steel-700 transition-all text-white rounded border border-steel-700 shadow-lg"
          aria-hidden="true"
        >
          <FaLinkedin size={26} />
        </div>
      </Link>
    </div>
  );
};

export default SocialsButtons;
