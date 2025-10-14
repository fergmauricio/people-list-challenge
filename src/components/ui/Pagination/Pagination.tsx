import "./Pagination.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getVisiblePages = () => {
    if (totalPages <= 5) return pages;

    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);

    const visiblePages: (number | string)[] = [];

    if (start > 1) {
      visiblePages.push(1);
      if (start > 2) visiblePages.push("...");
    }

    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) visiblePages.push("...");
      visiblePages.push(totalPages);
    }

    return visiblePages;
  };

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="pagination__arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {getVisiblePages().map((page, index) => (
        <button
          key={index}
          className={`pagination__page ${
            page === currentPage ? "pagination__page--active" : ""
          } ${page === "..." ? "pagination__ellipsis" : ""}`}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination__arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    </nav>
  );
};
