import { motion } from "framer-motion";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          style={{
            border: "1px solid var(--grey-2)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            background: p === currentPage ? "var(--primary)" : "transparent",
            color: p === currentPage ? "white" : "var(--text)",
          }}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </motion.div>
  );
};

export default Pagination;
