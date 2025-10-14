import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => onChange(localValue), 300);
    return () => clearTimeout(timer);
  }, [localValue]);

  return (
    <motion.div
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      style={{ textAlign: "center", margin: "20px 0" }}
    >
      <input
        type="text"
        placeholder="Search people..."
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        style={{ fontSize: "16px" }}
      />
    </motion.div>
  );
};

export default SearchInput;
