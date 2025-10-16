import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  it("deve renderizar número correto de páginas", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("deve chamar onPageChange quando página é clicada", async () => {
    const user = userEvent.setup();
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    await user.click(screen.getByText("3"));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
  });

  it("deve desabilitar botão anterior na primeira página", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByText("‹")).toBeDisabled();
    expect(screen.getByText("›")).toBeEnabled();
  });

  it("deve desabilitar botão próximo na última página", () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByText("‹")).toBeEnabled();
    expect(screen.getByText("›")).toBeDisabled();
  });

  it("deve mostrar ellipsis para muitas páginas", () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getAllByText("...")).toHaveLength(2);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
  });

  it("deve destacar página atual", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const activeButton = screen.getByText("3");
    expect(activeButton).toHaveClass("pagination__page--active");
  });

  it("deve navegar para próxima página", async () => {
    const user = userEvent.setup();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    await user.click(screen.getByText("›"));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it("deve navegar para página anterior", async () => {
    const user = userEvent.setup();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    await user.click(screen.getByText("‹"));
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });
});
