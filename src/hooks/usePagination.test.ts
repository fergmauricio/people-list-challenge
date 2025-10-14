import { renderHook, act } from "@testing-library/react";
import { usePagination } from "./usePagination";

describe("usePagination", () => {
  it("should initialize with correct values", () => {
    const { result } = renderHook(() =>
      usePagination({ totalItems: 50, itemsPerPage: 10 })
    );

    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(5);
    expect(result.current.hasNext).toBe(true);
    expect(result.current.hasPrev).toBe(false);
  });

  it("should navigate to next page", () => {
    const { result } = renderHook(() =>
      usePagination({ totalItems: 50, itemsPerPage: 10 })
    );

    act(() => {
      result.current.next();
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.hasPrev).toBe(true);
  });

  it("should not go beyond total pages", () => {
    const { result } = renderHook(() =>
      usePagination({ totalItems: 10, itemsPerPage: 10 })
    );

    act(() => {
      result.current.next();
    });

    expect(result.current.currentPage).toBe(1);
  });
});
