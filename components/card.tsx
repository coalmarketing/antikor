import { twMerge } from "tailwind-merge";

interface CardProps {
  tip?: boolean;
  theme?: "dark" | "steel";
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ tip, theme, children, className }) => {
  return (
    <div
      className={`card min-h-[200px] h-full ${
        theme == "steel" ? "card-steel" : "card-dark"
      } `}
    >
      <div
        className={twMerge(
          `card-content ${
            tip ? "card-tip" : ""
          } min-h-[200px] h-full relative `,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
