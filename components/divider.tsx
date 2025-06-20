interface DividerProps {
  color?: "dark" | "light" | "steel" | "steel-700";
}

const Divider: React.FC<DividerProps> = ({ color = "steel" }) => {
  return <div className={`w-20 h-3 bg-${color} my-8`}></div>;
};

export default Divider;
