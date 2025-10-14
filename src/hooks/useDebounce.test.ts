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
    const { result } = renderHook(() => useDebounce("test", 500));
    expect(result.current).toBe("test");
  });

  it("should debounce value changes", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "first", delay: 500 },
      }
    );

    expect(result.current).toBe("first");

    rerender({ value: "second", delay: 500 });

    expect(result.current).toBe("first");

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("second");
  });
});
