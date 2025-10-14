import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "./useDebounce";

describe("useDebounce", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should return initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("Maurício", 500));
    expect(result.current).toBe("Maurício");
  });

  it("should debounce value changes", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "Priscila", delay: 500 },
      }
    );

    expect(result.current).toBe("Priscila");

    rerender({ value: "Laís", delay: 500 });

    expect(result.current).toBe("Priscila");

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("Laís");
  });
});
