interface DividerProps {
  color?: "dark" | "light" | "steel";
}

const Divider: React.FC<DividerProps> = ({ color = "steel" }) => {
  return (
    <div
      className={`w-20 h-3 my-8`}
      style={{ backgroundColor: "var(--" + color + ")" }}
    ></div>
  );
};

export default Divider;
