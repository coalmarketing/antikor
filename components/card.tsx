interface CardProps {
  tip?: boolean;
  theme?: "dark" | "light";
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ tip, children }) => {
  return (
    <div className="card">
      <div className={`card-content ${tip ? "card-tip" : ""}`}>{children}</div>
    </div>
  );
};

export default Card;
