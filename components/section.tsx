interface SectionProps {
  anchor?: string;
  theme?: "dark" | "light";
  children: React.ReactNode;
  adaptiveHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  anchor,
  theme = "dark",
  adaptiveHeight = false,
  children,
}) => {
  return (
    <section
      id={anchor ?? ""}
      className={`w-screen ${
        !adaptiveHeight ? "min-h-screen" : ""
      } relative overflow-hidden flex flex-col items-center justify-center px-5 lg:px-20 xl:px-40 py-20 
        ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      {children}
    </section>
  );
};

export default Section;
