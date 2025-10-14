import { motion } from "framer-motion";

const NoResults: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    style={{ textAlign: "center", padding: "40px", fontSize: "18px" }}
  >
    <h2>Nenhum resultado encontrado</h2>
    <p>Tente novamente utilizando outro termo</p>
  </motion.div>
);

export default NoResults;
