import Divider from "./divider";

interface SubPageHeaderProps {
  title: string;
  claim: string;
  description: string;
  imageUrl?: string;
}

const SubPageHeader: React.FC<SubPageHeaderProps> = ({
  title,
  claim,
  description,
  imageUrl,
}) => {
  return (
    <section className="w-full h-[600px] px-[10%] flex flex-col items-start justify-between bg-dark/80 overflow-hidden relative">
      <div className="max-w-[1000px] h-full flex flex-col justify-center">
        <div className="flex items-center gap-1 mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logos/head-blue.svg"
            className="h-6 w-auto object-cover"
            alt=""
          />
          <h1 className="lg:text-lg font-semibold text-steel uppercase tracking-widest">
            {title}
          </h1>
        </div>
        <p className="text-light text-left text-6xl font-bold mt-5">{claim}</p>
        <Divider alignment="left" marginBottom={0} />
        <p className="text-light/80 text-left text-lg mt-10">{description}</p>
      </div>

      <div className="bg-steel-500/20 w-screen h-screen absolute top-0 left-20 hero-polygon"></div>

      <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl || "/img/products/ANTIKOR-hero-thumb.png"}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt=""
        />
      </div>
    </section>
  );
};

export default SubPageHeader;
