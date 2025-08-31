interface DividerProps {
  color?: "dark" | "light" | "steel";
  marginTop?: number | string;
  marginBottom?: number | string;
  alignment?: "left" | "center" | "right";
}

const Divider: React.FC<DividerProps> = ({
  color = "steel",
  marginTop = "2rem",
  marginBottom = "2rem",
  alignment = "center",
}) => {
  return (
    <div
      className="w-20 h-3"
      style={{
        backgroundColor: `var(--${color})`,
        marginTop,
        marginBottom,
        marginLeft: alignment === "left" ? "0" : "auto",
        marginRight: alignment === "right" ? "0" : "auto",
      }}
    ></div>
  );
};

export default Divider;
