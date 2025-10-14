import { useState, useMemo } from "react";

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
}

export const usePagination = ({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const next = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  const prev = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const goTo = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  };

  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > 1;

  return {
    currentPage,
    totalPages,
    next,
    prev,
    goTo,
    hasNext,
    hasPrev,
    setCurrentPage,
  };
};
