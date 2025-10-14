import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchHeader } from "./SearchHeader";

describe("SearchHeader", () => {
  it("deve renderizar o título e input de busca", () => {
    render(<SearchHeader searchTerm="" onSearchChange={jest.fn()} />);

    expect(screen.getByText("Encontrar pessoas")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Encontrar pessoas...")
    ).toBeInTheDocument();
  });

  it("deve chamar onSearchChange quando digitar no input", async () => {
    const user = userEvent.setup();
    const handleSearchChange = jest.fn();

    render(<SearchHeader searchTerm="" onSearchChange={handleSearchChange} />);

    const input = screen.getByPlaceholderText("Encontrar pessoas...");
    await user.type(input, "Maurício");

    expect(handleSearchChange).toHaveBeenCalledWith("Maurício");
  });

  it("deve mostrar contagem de resultados", () => {
    render(
      <SearchHeader
        searchTerm="Maurício"
        onSearchChange={jest.fn()}
        resultsCount={3}
      />
    );

    expect(screen.getByText("3 usuário(s)")).toBeInTheDocument();
  });

  it("deve mostrar mensagem de nenhum resultado", () => {
    render(
      <SearchHeader
        searchTerm="xyz"
        onSearchChange={jest.fn()}
        resultsCount={0}
      />
    );

    expect(screen.getByText("Nenhum resultado encontrado")).toBeInTheDocument();
  });

  it("deve mostrar mensagem de busca", () => {
    render(
      <SearchHeader
        searchTerm="Maurício"
        onSearchChange={jest.fn()}
        resultsCount={2}
      />
    );

    expect(
      screen.getByText("2 resultado(s) encontrado(s)")
    ).toBeInTheDocument();
  });

  it("deve mostrar loading state", () => {
    render(
      <SearchHeader
        searchTerm="Maurício"
        onSearchChange={jest.fn()}
        isLoading={true}
      />
    );

    expect(screen.getByText("Buscando...")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Encontrar pessoas...")).toBeDisabled();
  });
});
