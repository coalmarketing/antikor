import Divider from "./divider";

interface SubPageHeaderProps {
  title: string;
  claim: string;
  description: string;
}

const SubPageHeader: React.FC<SubPageHeaderProps> = ({
  title,
  claim,
  description,
}) => {
  return (
    <section className="w-full h-[600px] px-[10%] flex flex-col items-start justify-between bg-black">
      <div className="w-[1000px] h-full flex flex-col justify-center">
        <div className="flex items-center gap-1 mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logos/head-blue.svg"
            className="h-6 w-auto object-cover"
            alt=""
          />
          <h1 className="text-lg font-semibold text-steel uppercase tracking-widest">
            {title}
          </h1>
        </div>
        <p className="text-light text-left text-6xl font-bold mt-5">{claim}</p>
        <Divider />
        <p className="text-light/80 text-left text-xl mt-10">{description}</p>
      </div>
    </section>
  );
};

export default SubPageHeader;
